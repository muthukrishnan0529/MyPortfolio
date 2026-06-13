import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Section from "./Section";

const projects = [
  {
    title: "Job Portal Web Application",
    description:
      "A fullstack job platform connecting candidates and recruiters. Features resume upload, job applications, and a dedicated HR dashboard for managing postings and applicants.",
    tech: ["React", "Django", "PostgreSQL", "MUI"],
    live: "https://jobportal-muthu.vercel.app/",
    github: "https://github.com/muthukrishnan0529/jobportalhost",
    accent: "from-brand-cyan/40 to-brand-violet/40",
    number: "01",
  },
  {
    title: "TaskFlow Web Application",
    description:
      "A task management system with full CRUD operations, focused on a clean UI, smooth UX, and a fully responsive layout that works seamlessly across devices.",
    tech: ["React", "Django", "PostgreSQL", "MUI"],
    live: "https://taskflow-muthu.vercel.app/",
    github: "https://github.com/muthukrishnan0529/Taskflow",
    accent: "from-brand-violet/40 to-brand-pink/40",
    number: "02",
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={<>Projects I've <span className="gradient-text">built & shipped</span>.</>}
      description="Real-world applications, each focused on solving a meaningful problem with clean architecture and a polished UI."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-3xl overflow-hidden glass p-8 md:p-10 hover:shadow-glow transition-all duration-500"
          >
            {/* Glow */}
            <div
              className={`absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="relative flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-muted-foreground tracking-wider">
                  PROJECT / {p.number}
                </span>
                <div className="flex gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="h-10 w-10 rounded-xl border border-border flex items-center justify-center hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live Demo"
                    className="h-10 w-10 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center hover:shadow-glow transition-all"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:gradient-text transition-all">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-background/60 border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium hover:gradient-text transition-all"
                >
                  Live Demo <ArrowUpRight size={14} />
                </a>
                <span className="text-border">·</span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={14} /> Source
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
