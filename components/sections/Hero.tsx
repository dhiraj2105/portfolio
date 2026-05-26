import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import Card from "../ui/Card";
import Line from "../ui/Line";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden mt-20">
      <div className="blur-light top-[-200px] right-[-100px]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* LEFT */}

          <div className="lg:col-span-8">
            <FadeIn>
              <div className="font-mono text-sm text-zinc-500 mb-8">
                FULL STACK ENGINEER / BACKEND SYSTEMS
              </div>

              <h1 className="hero-title">
                Building
                <br />
                high-performance
                <br />
                software systems.
              </h1>
            </FadeIn>
          </div>

          {/* RIGHT */}

          <div className="lg:col-span-4">
            <FadeIn>
              <Card className="p-8 md:p-10">
                <div className="font-mono text-xs tracking-wide text-zinc-500 mb-8">
                  LIVE STATUS
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Focus</span>

                    <span className="text-white">
                      Full Stack Infrastructure
                    </span>
                  </div>

                  <Line />

                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Stack</span>

                    <span className="text-white">Nodejs / Python</span>
                  </div>

                  <Line />

                  {/* <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Specialization</span>

                    <span className="text-white">Algo Trading</span>
                  </div> 

                  <Line /> */}

                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Availability</span>

                    <span className="text-[#58f29a]">Open</span>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>

        {/* Bottom */}

        <FadeIn className="mt-32 grid md:grid-cols-3 gap-12">
          <div>
            <div className="number">01</div>

            <p className="text-zinc-400 leading-relaxed max-w-sm mt-4">
              Building scalable systems with Nodejs, Flask, Redis, and
              production-grade API architecture.
            </p>
          </div>

          <div>
            <div className="number">02</div>

            <p className="text-zinc-400 leading-relaxed max-w-sm mt-4">
              Developing full-stack applications using Next.js, TypeScript, and
              modern cloud deployment workflows.
            </p>
          </div>

          <div>
            <div className="number">03</div>

            <p className="text-zinc-400 leading-relaxed max-w-sm mt-4">
              Engineering low-latency trading systems with real-time execution,
              caching, and analytics pipelines.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
