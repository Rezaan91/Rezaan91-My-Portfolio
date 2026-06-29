import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Step = 0 | 1 | 2 | 3;

const WelcomeModal = () => {
  const [step, setStep] = useState<Step>(0);

  useEffect(() => {
    const shown = sessionStorage.getItem("welcomeSequenceShown");
    if (!shown) {
      const timer = setTimeout(() => setStep(1), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const finish = () => {
    setStep(0);
    sessionStorage.setItem("welcomeSequenceShown", "true");
  };

  const open = step !== 0;

  const renderContent = () => {
    if (step === 1) {
      return (
        <>
          <DialogHeader>
            <DialogTitle className="text-2xl font-display gradient-text">
              Welcome 👋
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
            <p className="font-medium text-foreground">Looking forward to connecting!</p>
          </div>
          <Button variant="hero" onClick={() => setStep(2)} className="mt-2 w-full">
            Explore My Portfolio
          </Button>
        </>
      );
    }
    if (step === 2) {
      return (
        <>
          <DialogHeader>
            <DialogTitle className="text-2xl font-display gradient-text">
              Theme Toggle 🌸
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              I've added a Light Mode and Dark Mode feature for your viewing comfort.
            </p>
            <p>
              You can switch themes anytime using the sun/moon icon in the navigation bar. Your preference will be saved automatically for future visits.
            </p>
          </div>
          <Button variant="hero" onClick={() => setStep(3)} className="mt-2 w-full">
            Continue
          </Button>
        </>
      );
    }
    if (step === 3) {
      return (
        <>
          <DialogHeader>
            <DialogTitle className="text-2xl font-display gradient-text">
              AI Assistant 🤖
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p className="font-medium text-foreground">Got questions?</p>
            <p>
              Chat with my AI Assistant to learn more about my skills, projects, experience, services, and professional background.
            </p>
            <p>
              Feel free to ask anything—it's here to help you explore my portfolio.
            </p>
          </div>
          <Button variant="hero" onClick={finish} className="mt-2 w-full">
            Start Exploring
          </Button>
        </>
      );
    }
    return null;
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) finish(); }}>
      <DialogContent
        key={step}
        className="sm:max-w-md glass-card border-primary/30 animate-fade-in"
      >
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;
