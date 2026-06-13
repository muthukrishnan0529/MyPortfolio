import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles, Target } from "lucide-react";
import Section from "./Section";

const highlights = [
  { icon: Code2, label: "React + Django", desc: "Fullstack from API to UI" },
  { icon: Rocket, label: "Production work", desc: "Internship at Fortura Tech" },
  { icon: Target, label: "Performance", desc: "Fast, responsive, accessible" },
  { icon: Sparkles, label: "Clean UI", desc: "Design-led engineering" },
];

const About = () => {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>A passionate developer with a <span className="gradient-text">builder's mindset</span>.</>}
    >
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I'm a <span className="text-foreground font-medium">Python Fullstack Developer</span> who loves turning ideas into real, production-grade applications. My toolkit is centered around <span className="text-foreground font-medium">React</span> on the frontend and <span className="text-foreground font-medium">Django</span> on the backend.
          </p>
          <p>
            During my internship at <span className="text-foreground font-medium">Fortura Tech</span>, I shipped UI components, improved responsiveness, and worked alongside the team on real product features used by real users.
          </p>
          <p>
            I care deeply about <span className="text-foreground font-medium">performance</span>, <span className="text-foreground font-medium">responsiveness</span>, and <span className="text-foreground font-medium">clean UI</span> — the kind of details that turn a working app into a great one.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-2 grid grid-cols-2 gap-3"
        >
          {highlights.map((h) => (
            <div
              key={h.label}
              className="glass rounded-2xl p-5 hover:-translate-y-1 hover:shadow-card transition-all"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-primary/20 flex items-center justify-center mb-3 text-brand-cyan">
                <h.icon size={18} />
              </div>
              <div className="font-medium text-sm">{h.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{h.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
