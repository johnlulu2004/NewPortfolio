import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="flex-1 space-y-6 flex flex-col items-center text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium opacity-0 animate-fade-in">
              CS + Applied Math @ JHU
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="block opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="block text-primary opacity-0 animate-fade-in-delay-1">
                John Lu.
              </span>
              <span className="block text-gradient opacity-0 animate-fade-in-delay-2 text-3xl md:text-4xl font-normal mt-2">
                I build for the web & beyond.
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg opacity-0 animate-fade-in-delay-3 leading-relaxed">
              Rising junior at Johns Hopkins — passionate about React, AI/ML,
              and solving real problems with clean, thoughtful code.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 opacity-0 animate-fade-in-delay-4">
              <a
                href="#projects"
                className="cosmic-button inline-flex items-center justify-center"
              >
                See My Work
              </a>
              <a
                href="#about"
                className="newbutton inline-flex items-center justify-center"
              >
                About Me
              </a>
            </div>
          </div>

          {/* Right: Stats / identity card */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in-delay-3">
            <div className="relative w-64 md:w-72 bg-card border border-border rounded-2xl p-6 shadow-lg space-y-5">
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Open to opportunities
              </div>

              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Currently
                </p>
                <p className="font-semibold text-sm">
                  @ Johns Hopkins University
                </p>
              </div>

              <hr className="border-border" />

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">3+</p>
                  <p className="text-xs text-muted-foreground">Years coding</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">3+</p>
                  <p className="text-xs text-muted-foreground">
                    Projects shipped
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">2x</p>
                  <p className="text-xs text-muted-foreground">
                    Hackathon winner
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">∞</p>
                  <p className="text-xs text-muted-foreground">Curiosity</p>
                </div>
              </div>

              <hr className="border-border" />

              <div className="flex gap-2 flex-wrap">
                {["React", "C++", "Python", "ML"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-muted-foreground mb-2 tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </div>
    </section>
  );
};
