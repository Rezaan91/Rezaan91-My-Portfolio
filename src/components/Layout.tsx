import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WelcomeModal from "@/components/WelcomeModal";
import ChatBot from "@/components/ChatBot";
import siteBg from "@/assets/site-bg.png.asset.json";
import aboutBgNew from "@/assets/about-bg-new.png.asset.json";

const BG_MAP: Record<string, string> = {
  "/": siteBg.url,
  "/skills": siteBg.url,
  "/projects": siteBg.url,
  "/experience": siteBg.url,
  "/education": siteBg.url,
  "/contact": siteBg.url,
  "/about": aboutBgNew.url,
};

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  const bgUrl = BG_MAP[pathname];

  return (
    <div className={`min-h-screen ${bgUrl ? "" : "bg-background"}`}>
      {bgUrl && (
        <div
          aria-hidden
          className="fixed inset-0 pointer-events-none bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgUrl})`, zIndex: -1 }}
        />
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
