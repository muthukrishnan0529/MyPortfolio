import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}

const Section = ({ id, eyebrow, title, description, children }: SectionProps) => {
  return (
    <section id={id} className="relative py-16 sm:py-24 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-10 sm:mb-14"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gradient-primary" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-brand-cyan">
                {eyebrow}
              </span>
            </div>
          )}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight break-words">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default Section;
