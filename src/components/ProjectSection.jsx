import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Charity-Searcher",
    description:
      "Winner of Best New Venture out of 200+ participants at Hophacks 2024 ",

    image: "/charity.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoURL: "https://johnlulu2004.github.io/PrivateHophacksRepo2024/",
    githubURL:
      "https://github.com/johnlulu2004/Charity-Searcher?tab=readme-ov-file",
  },
  {
    id: 2,
    title: "Johns Hopkins Sports Analytics Research Group",
    description: "Develops team and umpire scheduling for the MiLB.",

    image: "/baseball.png",
    tags: ["C++", "Gurobi", "MATLAB"],
    demoURL:
      "https://sports-analytics.cs.jhu.edu/baseball-scheduling-optimization/",
    githubURL:
      "https://sports-analytics.cs.jhu.edu/baseball-scheduling-optimization/",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects and research that I am doing.
          There will be more to come as I continue to sharpen my skills with
          React.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover "
            >
              <div className=" h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={project.id + "-" + tag + "-" + idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1 ">{project.title}</h3>
                <p className=" text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center  ">
                  <div className=" flex space-x-3">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 transition-colors duration-300 hover-primary"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubURL}
                      target="_blank"
                      className="text-foreground/80 transition-colors duration-300 hover-primary"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/johnlulu2004"
          >
            Check my Github <ArrowRight size={16}></ArrowRight>
          </a>
        </div>
      </div>
    </section>
  );
};
