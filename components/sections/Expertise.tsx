import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const expertise = [
  {
    title: "Backend Engineering",

    description:
      "Designing scalable APIs, authentication systems, caching layers, and production backend infrastructure using Spring Boot, Flask, Redis, and MySQL.",

    stack: "NODEJS / FLASK / REDIS",
  },

  {
    title: "Full Stack Development",

    description:
      "Building responsive and high-performance web applications using Next.js, React, TypeScript, and modern frontend architecture.",

    stack: "NEXT.JS / REACT / TS",
  },

  {
    title: "DevOps & Infrastructure",

    description:
      "Deploying and managing Linux-based production systems with Docker, Nginx, AWS, CI/CD pipelines, and system optimization workflows.",

    stack: "AWS / DOCKER / NGINX",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-40 border-t border-[#111]">
      <Container>
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <FadeIn>
              <SectionTitle
                label="EXPERTISE"
                title={
                  <>
                    Engineering
                    <br />
                    capabilities.
                  </>
                }
              />
            </FadeIn>
          </div>

          <div className="lg:col-span-8">
            <FadeIn>
              <div className="space-y-10">
                {expertise.map((item) => (
                  <Card key={item.title} className="p-8">
                    <div className="flex flex-col md:flex-row md:justify-between gap-8">
                      <div>
                        <div className="text-2xl font-bold">{item.title}</div>

                        <p className="text-zinc-500 mt-3 max-w-xl">
                          {item.description}
                        </p>
                      </div>

                      <div className="font-mono text-sm text-zinc-500">
                        {item.stack}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
