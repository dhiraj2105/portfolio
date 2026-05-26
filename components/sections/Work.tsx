import { ArrowUpRight, GitBranch } from "lucide-react";

import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import Tag from "../ui/Tag";

import { projects } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="py-40">
      <Container>
        <FadeIn className="mb-24">
          <SectionTitle
            label="SELECTED WORK"
            title={
              <>
                Systems engineered
                <br />
                for scale.
              </>
            }
          />
        </FadeIn>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <FadeIn
                key={project.id}
                className="grid items-center gap-10 lg:grid-cols-12"
              >
                <div
                  className={`
                    lg:col-span-7
                    ${reverse ? "order-1 lg:order-2" : ""}
                  `}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="interactive block group"
                  >
                    <div
                      className="
                        relative
                        aspect-[16/10]
                        overflow-hidden
                        border border-[#111]
                        bg-[#090909]
                      "
                    >
                      {project.visual}

                      <div
                        className="
                          absolute inset-0
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                          bg-gradient-to-t
                          from-black/40
                          via-transparent
                          to-transparent
                        "
                      />
                    </div>
                  </a>
                </div>

                <div
                  className={`
                    lg:col-span-5
                    ${reverse ? "order-2 lg:order-1" : ""}
                  `}
                >
                  <div className="font-mono text-sm text-zinc-500 mb-6">
                    {project.id}
                    {" / "}
                    {project.category}
                  </div>

                  <h3 className="text-4xl font-black leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mt-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-8">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 mt-10">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="interactive flex items-center gap-2 text-sm text-white hover:text-zinc-300 transition-colors"
                    >
                      LIVE
                      <ArrowUpRight size={16} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="interactive flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      GITHUB
                      <GitBranch size={16} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
