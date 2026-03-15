import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const links = [
  {
    label: "Email",
    value: "cmanoj15122003@gmail.com",
    href: "mailto:cmanoj15122003@gmail.com",
  },
  { label: "Phone", value: "6374281071", href: "tel:+916374281071" },
  { label: "Focus", value: "Firmware and Android", href: "#experience" },
];

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Reveal>
        <SectionTitle
          title="Contact"
          subtitle="If the work feels aligned, let's connect."
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <div>
            <p className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-6xl">
              Open to software, embedded systems, firmware, and Android
              engineering opportunities.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/48">
              Available for teams working on operating systems, firmware,
              industrial software, and product engineering that values rigorous
              implementation and collaborative delivery.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] px-7 py-8 text-white shadow-panel backdrop-blur-md">
            {links.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between border-b border-white/10 py-5 last:border-b-0"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.22 }}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-white/45">
                  {item.label}
                </span>
                <span className="text-sm text-white sm:text-base">{item.value}</span>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
