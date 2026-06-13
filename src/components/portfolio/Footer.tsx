import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 mt-10">
      <div className="container px-4 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs sm:text-sm text-muted-foreground text-center md:text-left">
        <div className="font-display flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
          <span className="gradient-text font-bold">Muthu Krishnan S</span>
          <span className="hidden sm:inline">·</span>
          <span>Python Fullstack Developer</span>
        </div>
        {/* <div className="flex items-center gap-1.5 flex-wrap justify-center">
          <span>Built with</span>
          <Heart size={14} className="text-brand-pink fill-brand-pink" />
          <span>· © {new Date().getFullYear()}</span>
        </div> */}
        <div className="text-center">
  <p>© {new Date().getFullYear()} Muthu Krishnan. All Rights Reserved.</p>
</div>
      </div>
    </footer>
  );
};

export default Footer;
