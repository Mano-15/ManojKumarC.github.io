import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="border-b border-white/10 py-20 sm:py-28">
      <Reveal>
        <SectionTitle
          title="About"
          subtitle="Profile, interests, and academic background."
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="max-w-3xl font-serif text-3xl leading-tight text-white sm:text-5xl">
            I specialize in embedded systems and firmware engineering, with
            practical experience spanning BIOS customization, Android feature
            work, microcontroller programming, and research-led engineering.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-md">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                Areas of Interest
              </p>
              <p className="mt-2 text-sm leading-7 text-white/62">
                Operating systems, firmware engineering, embedded programming,
                circuit simulation, collaborative development, machine learning
                for electrical systems, and space exploration.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                Education
              </p>
              <p className="mt-2 text-sm leading-7 text-white/62">
                B.E. in Electrical and Electronics Engineering from Sri Sairam
                Engineering College, graduating in 2025 with a CGPA of 9.09 /
                10. Higher Secondary: 93.02%. Secondary: 88.4%.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
