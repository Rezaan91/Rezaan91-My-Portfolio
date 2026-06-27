import { Github, Linkedin, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import footerBg from "@/assets/footer-bg.png.asset.json";
import raLogo from "@/assets/ra-logo.png.asset.json";

const GOLD = "#D4AF37";
const GOLD_BRIGHT = "#F4D06F";

const socials = [
  { href: "https://github.com/Rezaan91", Icon: Github, label: "GitHub", tooltip: "View My GitHub", external: true },
  { href: "https://www.linkedin.com/in/rezaan-achmat-59050774/", Icon: Linkedin, label: "LinkedIn", tooltip: "Connect on LinkedIn", external: true },
  { href: "mailto:rezaan91@gmail.com", Icon: Mail, label: "Email", tooltip: "Send Me an Email", external: false },
];

const Footer = () => {
  return (
    <footer
      className="relative w-full overflow-hidden mt-12"
      style={{
        backgroundImage: `url(${footerBg.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Premium gold top divider */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${GOLD} 20%, ${GOLD} 80%, transparent)` }}
      />

      <div className="container mx-auto px-6 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={raLogo.url}
              alt="Rezaan Achmat Fredericks Logo"
              className="h-24 w-24 md:h-28 md:w-28 object-contain"
              loading="lazy"
            />
          </div>

          {/* Center text */}
          <div className="flex-1 text-center md:text-left space-y-2">
            <p className="font-bold text-white text-sm md:text-base">
              © 2026 <span style={{ color: GOLD }}>Rezaan Achmat Fredericks</span>. All Rights Reserved.
            </p>
            <p className="italic text-white/80 text-xs md:text-sm leading-relaxed">
              Built with passion, precision, purpose, and a commitment to exceptional digital craftsmanship.
            </p>
            <p className="font-bold text-sm md:text-base pt-1">
              <span style={{ color: GOLD }}>Designed &amp; Developed</span>{" "}
              <span className="text-white">by Rezaan Achmat Fredericks</span>
            </p>
          </div>

          {/* Social icons */}
          <TooltipProvider delayDuration={150}>
            <div className="flex items-center gap-5 md:self-end">
              {socials.map(({ href, Icon, label, tooltip, external }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <a
                      href={href}
                      aria-label={tooltip}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="footer-social inline-flex items-center justify-center rounded-md p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ color: GOLD }}
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="bg-neutral-900 text-white border-none rounded-md shadow-lg animate-in fade-in-0"
                  >
                    {tooltip}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>

      <style>{`
        .footer-social {
          transition: all 0.3s ease-in-out;
          cursor: pointer;
        }
        .footer-social:hover, .footer-social:focus-visible {
          color: ${GOLD_BRIGHT} !important;
          transform: translateY(-3px) scale(1.08);
          filter: drop-shadow(0 0 6px ${GOLD_BRIGHT}aa);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
