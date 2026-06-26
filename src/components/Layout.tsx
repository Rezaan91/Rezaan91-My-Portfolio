import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WelcomeModal from "@/components/WelcomeModal";
import ChatBot from "@/components/ChatBot";
import siteBg from "@/assets/site-bg.png.asset.json";

const BG_ROUTES = ["/", "/skills", "/projects", "/experience", "/education", "/contact"];

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  const showBg = BG_ROUTES.includes(pathname);

  return (
    <div className={`min-h-screen ${showBg ? "" : "bg-background"}`}>
      {showBg && (
        <div
          aria-hidden
          className="fixed inset-0 pointer-events-none bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${siteBg.url})`, zIndex: -1 }}
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
