const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "HTML/CSS", "Tailwind"],
  },
  { category: "Languages", items: ["Python", "C++", "Java", "MATLAB"] },
  {
    category: "AI / ML",
    items: ["PyTorch", "scikit-learn", "NumPy", "Pandas"],
  },
  { category: "Tools", items: ["Git", "GitHub", "Gurobi", "VS Code"] },
];

const facts = [
  { emoji: "🎓", text: "Double major: CS + Applied Math" },
  { emoji: "🎾", text: "JHU Tennis & ICPC club member" },
  { emoji: "🤖", text: "Hop AI club — exploring LLMs & agents" },
  { emoji: "🍜", text: "Amateur food critic in my spare time" },
  { emoji: "🏋️", text: "Hit the gym most mornings before class" },
  { emoji: "🏆", text: "Best New Venture — HopHacks 2024" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          A little more than the résumé version.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Developer, researcher, and curious mind.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a rising junior at Johns Hopkins studying Computer Science and
              Applied Mathematics. I got hooked on web development about a year
              ago when I started building with React — and I haven't stopped
              since.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              On the research side, I work with the JHU Sports Analytics Group
              on optimization problems for Minor League Baseball scheduling.
              It's where my math background and programming come together in a
              genuinely fun way.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outside of code, you'll find me on the tennis court, reviewing
              local food spots, or going deep on the latest AI papers with the
              Hop AI club.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="#contact"
                className="cosmic-button inline-flex items-center justify-center"
              >
                Get in Touch
              </a>
              <a
                href="https://docs.google.com/document/d/1rfvrnLLrGVCOuKZxav3caEPMWQq0EwLyzP9J9kx74Ik/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="newbutton inline-flex items-center justify-center"
              >
                View Résumé
              </a>
            </div>
          </div>

          {/* Right: Skills + Facts */}
          <div className="space-y-8">
            {/* Quick facts */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h4 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Quick Facts
              </h4>
              <ul className="space-y-3">
                {facts.map(({ emoji, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm">
                    <span className="text-lg">{emoji}</span>
                    <span className="text-foreground/80">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills grid */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground">
                Tech I Work With
              </h4>
              {skills.map(({ category, items }) => (
                <div key={category}>
                  <p className="text-xs text-primary font-medium mb-2">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
