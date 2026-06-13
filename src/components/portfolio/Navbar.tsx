import { motion } from "framer-motion";
import { Menu, X, Moon, Sun, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container px-4">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 transition-all gap-2",
            scrolled ? "glass shadow-elegant" : "bg-transparent"
          )}
        >
          <a href="#home" className="font-display text-base sm:text-lg font-bold tracking-tight shrink-0">
            <span className="gradient-text">{"<MK/>"}</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="/Muthu_Krishnan_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-xl border border-border hover:border-brand-cyan hover:text-brand-cyan transition-colors"
            >
              <FileText size={15} />
              Resume
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center text-sm font-medium px-4 py-2 rounded-xl bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-card"
            >
              Hire Me
            </a>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass rounded-2xl p-4"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg hover:bg-secondary text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Muthu_Krishnan_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-xl border border-border text-sm font-medium"
                >
                  <FileText size={15} />
                  View Resume
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block mt-2 text-center px-4 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
