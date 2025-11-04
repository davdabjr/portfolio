import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

export const About = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Get to Know Me"
          description="A quick overview of my professional skills and background."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* My Skills (previously My Toolbox) */}
          <Card className="p-8 hover:-translate-y-1 transition duration-300">
            <h3 className="font-serif text-2xl mb-4">My Skills</h3>
            <p className="text-white/60">
              The technical foundation that drives my work and innovation across
              cybersecurity, IT management, cloud infrastructure, automation, and
              development.
            </p>
          </Card>

          {/* Beyond the Code (updated content) */}
          <Card className="p-8 hover:-translate-y-1 transition duration-300">
            <h3 className="font-serif text-2xl mb-4">Beyond the Code</h3>
            <p className="text-white/60">
              Exploring how technology, security, and innovation come together to
              create smarter, safer digital solutions — from optimizing systems to
              building resilient infrastructures.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

