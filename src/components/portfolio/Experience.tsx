import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import Section from "./Section";

const Experience = () => {
  const bullets = [
    "Python Full Stack Developer Intern focused on frontend development.",
    "Built UI components with React and Material UI (MUI) for the live website.",
    "Enhanced UI/UX with React Bits & Universe UI, improving responsiveness.",
    "Collaborated with the team on real-time development tasks.",
  ];

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Where I've <span className="gradient-text">worked & learned</span>.</>}
    >
      <div className="relative max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand-cyan via-brand-violet to-transparent" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-14"
        >
          {/* Timeline dot */}
          <div className="absolute left-0 top-1 h-9 w-9 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
            <Briefcase size={16} className="text-primary-foreground" />
          </div>

          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <div>
                <h3 className="font-display text-xl md:text-2xl font-semibold">
                  Python Fullstack Developer Intern
                </h3>
                <p className="text-brand-cyan font-medium mt-1">Fortura Tech</p>
              </div>
              <div className="flex flex-col sm:items-end text-xs text-muted-foreground gap-1">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={12} /> Internship
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={12} /> Nagercoil, Tamilnadu
                </span>
              </div>
            </div>

            <ul className="mt-5 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-muted-foreground text-sm md:text-base">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-primary shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Experience;
