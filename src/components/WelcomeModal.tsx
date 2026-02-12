import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const WelcomeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show on every visit (session-based)
    const shown = sessionStorage.getItem("welcomeShown");
    if (!shown) {
      const timer = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("welcomeShown", "true");
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DialogContent className="sm:max-w-md glass-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display gradient-text">
            Hi there 👋
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
          <p>
            Thank you for taking the time to connect. I'm excited to introduce you to my portfolio, where I showcase my work, skills, and the projects I've completed.
          </p>
          <p>
            My goal is to give you a clear picture of the quality, creativity, and dedication I bring to every project.
          </p>
          <p>
            If you have any questions, need a quote, or would like to discuss a project, feel free to reach out—I'd love to help.
          </p>
          <p className="font-medium text-foreground">
            Looking forward to connecting!
          </p>
        </div>
        <Button variant="hero" onClick={handleClose} className="mt-2 w-full">
          Explore My Portfolio
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;
