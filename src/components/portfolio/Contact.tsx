import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import Section from "./Section";

const contactInfo = [
  { icon: Mail, label: "Email", value: "muthukrishnan0529@gmail.com", href: "mailto:muthukrishnan0529@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 93615 27301", href: "tel:+919361527301" },
  { icon: MapPin, label: "Location", value: "Thoothukudi, Tamilnadu, India" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/muthukrishnan0529" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/muthukrishnandeveloper" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/skmuthu__/" },
];

const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setSending(true);
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:muthukrishnan0529@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title={<>Let's build <span className="gradient-text">something great</span>.</>}
      description="Open to internships, full-time roles, freelance, and interesting collaborations. Drop a message — I usually reply within a day."
    >
      <div className="grid lg:grid-cols-5 gap-4 sm:gap-6">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-3 min-w-0"
        >
          {contactInfo.map((c) => {
            const inner = (
              <div className="glass rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:shadow-card hover:-translate-y-1 transition-all min-w-0">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary/20 text-brand-cyan flex items-center justify-center shrink-0">
                  <c.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-medium text-sm sm:text-base truncate">{c.value}</div>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} className="block min-w-0">
                {inner}
              </a>
            ) : (
              <div key={c.label} className="min-w-0">{inner}</div>
            );
          })}

          <div className="glass rounded-2xl p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Find me on</div>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="h-11 w-11 rounded-xl border border-border flex items-center justify-center hover:border-brand-cyan hover:text-brand-cyan hover:-translate-y-0.5 transition-all"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-3 glass rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 min-w-0"
        >
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</label>
              <input
                name="name"
                required
                className="mt-2 w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              name="message"
              required
              rows={6}
              className="mt-2 w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all resize-none"
              placeholder="Hi, I came across your portfolio and would love to discuss a project opportunity with you."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-card hover:shadow-glow transition-all disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send Message"}
            <Send size={16} />
          </button>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;
