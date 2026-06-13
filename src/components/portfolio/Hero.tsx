import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles, Download } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Decorative blobs - desktop only for performance */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-brand-violet/30 blur-3xl pointer-events-none hidden lg:block lg:animate-blob" />
      <div className="absolute top-40 -right-20 h-96 w-96 rounded-full bg-brand-cyan/25 blur-3xl pointer-events-none hidden lg:block lg:animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container relative">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium text-muted-foreground mb-6 sm:mb-8"
            >
              <Sparkles size={14} className="text-brand-cyan" />
              Available for opportunities
              <span className="ml-1 h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold tracking-tight leading-[1.05] text-[clamp(2.25rem,7vw,5.5rem)]"
            >
              <span className="block whitespace-nowrap">Muthu Krishnan S</span>
              <span className="block gradient-text bg-[length:200%_auto] animate-gradient-shift mt-1">
                Python Fullstack
              </span>
              <span className="block">Developer.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-5 sm:mt-6 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              I build <span className="text-foreground font-medium">responsive</span> and{" "}
              <span className="text-foreground font-medium">scalable</span> web applications with React, Django, and a sharp eye for detail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-card sm:hover:shadow-glow transition-all"
              >
                View Projects
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/Muthu_Krishnan_Resume.pdf"
                download
                aria-label="Download resume"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-border sm:hover:border-brand-cyan sm:hover:text-brand-cyan transition-colors font-medium"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass sm:hover:bg-secondary transition-colors font-medium"
              >
                <Mail size={16} />
                Contact
              </a>
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto order-1 lg:order-2 w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[360px]"
          >
            {/* Glow */}
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-brand-violet/30 via-brand-cyan/25 to-brand-pink/20 rounded-3xl blur-2xl pointer-events-none hidden sm:block" />

            {/* Frame */}
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-brand-cyan/70 via-brand-violet/70 to-brand-pink/50 shadow-card">
              <div className="relative rounded-[1.4rem] overflow-hidden bg-card aspect-[4/5]">
                <img
                  src={profilePhoto}
                  alt="Muthu Krishnan S — Python Fullstack Developer portrait"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_15%]"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 via-background/30 to-transparent pointer-events-none" />

                {/* Status badge inside the card */}
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 glass rounded-full px-2.5 py-1 text-[10px] font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
                  </span>
                  Available
                </div>

                {/* Name overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="text-sm font-display font-semibold leading-tight">Muthu Krishnan S</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Fullstack Developer · Thoothukudi</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hidden md:flex flex-col items-center gap-2 text-xs"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-brand-cyan to-transparent animate-pulse" />
      </motion.a>
    </section>
  );
};

export default Hero;
