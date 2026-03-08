import { ArrowRight, ExternalLink, Github, Trophy } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Charity Searcher",
    description:
      "A hackathon project that lets users discover and filter charities by cause. Won Best New Venture out of 200+ participants at HopHacks 2024.",
    highlight: "🏆 Best New Venture — HopHacks 2024",
    image: "/charity.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://johnlulu2004.github.io/PrivateHophacksRepo2024/",
    githubURL:
      "https://github.com/johnlulu2004/Charity-Searcher?tab=readme-ov-file",
  },
  {
    id: 2,
    title: "Stockly",
    description:
      "Real-time financial data visualization system integrating the Finnhub API to stream live market data. Features dynamic 3D-style stock visualizations mapping metrics like radius, pulse rate, and color intensity, powered by async data pipelines for continuous UI animation.",
    highlight: "📈 HopHacks 2025",
    image: "/stockly.png",
    tags: ["JavaScript", "Python", "Finnhub API"],
    demoURL: "https://manuelpanora1.github.io/HopHacks25/",
    githubURL: "https://manuelpanora1.github.io/HopHacks25/",
  },
  {
    id: 3,
    title: "MiLB Scheduling Optimization",
    description:
      "Research with the JHU Sports Analytics Group developing optimized team and umpire scheduling for Minor League Baseball using integer programming.",
    highlight: "📊 JHU Sports Analytics Research",
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A mix of hackathon builds and ongoing research. More on the way as I
          keep leveling up my React and ML skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-xs card-hover border border-border flex flex-col"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Highlight badge */}
                <p className="text-xs text-primary font-medium mb-3">
                  {project.highlight}
                </p>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 items-center border-t border-border pt-4">
                  <a
                    href={project.demoURL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubURL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Github size={15} />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/johnlulu2004"
            target="_blank"
            rel="noreferrer"
          >
            All projects on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
