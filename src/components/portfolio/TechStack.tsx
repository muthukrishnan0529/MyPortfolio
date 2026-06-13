import { motion } from "framer-motion";
import { Database, Layout, Server, Wrench } from "lucide-react";
import Section from "./Section";

const stack = [
  {
    title: "Frontend",
    icon: Layout,
    color: "from-brand-cyan to-sky-400",
    items: ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "MUI"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-brand-violet to-fuchsia-400",
    items: ["Python", "Django", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-emerald-400 to-brand-cyan",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-brand-pink to-brand-violet",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const TechStack = () => {
  return (
    <Section
      id="stack"
      eyebrow="Tech Stack"
      title={<>Tools I use to <span className="gradient-text">ship things</span>.</>}
      description="A focused, modern toolkit for building fullstack web applications end-to-end."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {stack.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl p-5 sm:p-6 glass hover:shadow-card transition-all overflow-hidden flex flex-col"
          >
            <div
              className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${cat.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}
            />
            <div className="relative flex items-center gap-3 mb-5">
              <div
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-background shadow-card shrink-0`}
              >
                <cat.icon size={20} />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="group/pill inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold px-3 py-1.5 rounded-lg text-foreground border border-border/60 bg-background/60 sm:hover:border-brand-cyan/70 sm:hover:bg-card sm:hover:-translate-y-0.5 cursor-default transition-all duration-200"
                >
                  <span className={`h-2 w-2 rounded-sm bg-gradient-to-br ${cat.color} shadow-sm`} />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default TechStack;
