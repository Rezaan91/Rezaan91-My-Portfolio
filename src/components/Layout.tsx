import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WelcomeModal from "@/components/WelcomeModal";
import ChatBot from "@/components/ChatBot";
import { useTheme } from "@/hooks/use-theme";
import siteBg from "@/assets/site-bg.png.asset.json";
import aboutBgNew from "@/assets/about-bg-new.png.asset.json";
import siteBgDark from "@/assets/site-bg-dark.jpg.asset.json";
import aboutBgDark from "@/assets/about-bg-dark.jpg.asset.json";

const BG_MAP_LIGHT: Record<string, string> = {
  "/": siteBg.url,
  "/skills": siteBg.url,
  "/projects": siteBg.url,
  "/experience": siteBg.url,
  "/education": siteBg.url,
  "/contact": siteBg.url,
  "/about": aboutBgNew.url,
};

const BG_MAP_DARK: Record<string, string> = {
  "/": siteBgDark.url,
  "/skills": siteBgDark.url,
  "/projects": siteBgDark.url,
  "/experience": siteBgDark.url,
  "/education": siteBgDark.url,
  "/contact": siteBgDark.url,
  "/about": aboutBgDark.url,
};

const Layout = () => {
  const { pathname } = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  const map = theme === "dark" ? BG_MAP_DARK : BG_MAP_LIGHT;
  const bgUrl = map[pathname];

  return (
    <div className={`min-h-screen ${bgUrl ? "" : "bg-background"}`}>
      {bgUrl && (
        <AnimatePresence mode="sync">
          <motion.div
            key={bgUrl}
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 pointer-events-none bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgUrl})`, zIndex: -1 }}
          />
        </AnimatePresence>
      )}
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <WelcomeModal />
      <ChatBot />
    </div>
  );
};

export default Layout;
