import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import zarneyLightAsset from "@/assets/zarney-light.png.asset.json";
import zarneyDarkAsset from "@/assets/zarney-dark.png.asset.json";

type Message = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

const ZARNEY_WELCOME = "Hi! I'm Zarney 👋\n\nI'm Rezaan Achmat Fredericks' personal AI Portfolio Assistant.\n\nI'm here to answer questions about my skills, projects, experience, education, services, achievements, and professional journey.\n\nFeel free to ask me anything while exploring my portfolio.";

const ChatBot = () => {
  const { theme } = useTheme();
  const zarneyIcon = theme === "dark" ? zarneyDarkAsset.url : zarneyLightAsset.url;
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: ZARNEY_WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show attention bubble when triggered by the theme tooltip sequence
  useEffect(() => {
    const handler = () => {
      if (sessionStorage.getItem("chatBubbleDismissed")) return;
      setShowBubble(true);
      const hideTimer = setTimeout(() => {
        setShowBubble(false);
        sessionStorage.setItem("chatBubbleDismissed", "true");
      }, 10000);
      (handler as any)._t = hideTimer;
    };
    window.addEventListener("showChatTip", handler);
    return () => {
      window.removeEventListener("showChatTip", handler);
      if ((handler as any)._t) clearTimeout((handler as any)._t);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";

    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && prev.length > 1 && assistantSoFar.startsWith(chunk.length > 0 ? assistantSoFar.slice(0, -chunk.length) || chunk : chunk)) {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
          );
        }
        if (last?.role === "assistant" && assistantSoFar.length > chunk.length) {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
          );
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      const allMessages = [...messages, userMsg].filter((_, i) => i > 0); // skip initial greeting
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!resp.ok || !resp.body) {
        throw new Error("Failed to get response");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsertAssistant(content);
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error("Chat error:", e);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble responding right now. Please try again!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const dragConstraintsRef = useRef<HTMLDivElement>(null);
  const [wasDragged, setWasDragged] = useState(false);

  return (
    <>
      {/* Drag bounds = viewport */}
      <div
        ref={dragConstraintsRef}
        aria-hidden
        className="fixed inset-0 pointer-events-none z-40"
      />

      {/* Draggable floating widget container */}
      <motion.div
        drag
        dragConstraints={dragConstraintsRef}
        dragMomentum={false}
        dragElastic={0}
        onDragStart={() => setWasDragged(true)}
        onDragEnd={() => setTimeout(() => setWasDragged(false), 50)}
        className="fixed bottom-6 right-6 z-50 touch-none"
      >
        {/* Attention bubble */}
        <AnimatePresence>
          {showBubble && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute bottom-[68px] right-0 w-[240px] glass-card rounded-2xl rounded-br-sm p-3 shadow-lg border border-primary/30 cursor-pointer"
              onClick={() => {
                if (wasDragged) return;
                setShowBubble(false);
                sessionStorage.setItem("chatBubbleDismissed", "true");
                setIsOpen(true);
              }}
            >
              <p className="text-sm text-foreground font-medium">
                💬 Got questions? Chat with Zarney — ask me about my skills, projects, or experience!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating button */}
        <motion.button
          onClick={() => {
            if (wasDragged) return;
            setIsOpen(!isOpen);
            if (!isOpen) {
              setShowBubble(false);
              sessionStorage.setItem("chatBubbleDismissed", "true");
            }
          }}
          className="w-14 h-14 rounded-full bg-background border border-primary/40 shadow-lg hover:shadow-[0_0_30px_hsla(174,60%,45%,0.5)] flex items-center justify-center transition-shadow duration-300 cursor-grab active:cursor-grabbing overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle Zarney chat (drag to move)"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6 text-foreground" />
              </motion.div>
            ) : (
              <motion.img
                key={`zarney-${theme}`}
                src={zarneyIcon}
                alt="Zarney"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full object-cover"
                draggable={false}
              />
            )}
          </AnimatePresence>
        </motion.button>

        {/* Chat window — anchored to widget, drags with it */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-[72px] right-0 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] rounded-2xl border border-border bg-background shadow-2xl flex flex-col overflow-hidden"
            >
            {/* Header */}
            <div className="px-4 py-3 border-b border-border bg-primary/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-primary/30 flex items-center justify-center bg-background">
                <img src={zarneyIcon} alt="Zarney" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Zarney</p>
                <p className="text-xs text-muted-foreground">Personal AI Portfolio Assistant</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-primary/30 bg-background flex-shrink-0 mt-1">
                      <img src={zarneyIcon} alt="Zarney" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-3 h-3 text-accent" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 text-primary" />
                  </div>
                  <div className="bg-muted px-3 py-2 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 bg-muted rounded-xl px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isLoading}
                  className="rounded-xl h-9 w-9"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.div>
    </>

  );
};

export default ChatBot;
