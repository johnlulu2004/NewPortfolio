export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {""}
      <div className=" container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className=" space-y-6">
          <h3 className=" text-2xl font-semibold">
            Passionate Web Developer and tech creator
          </h3>
          <p className="text-muted-foreground">
            For the past year I have been learning how to use React to make
            beautiful websites and front-end UI. In school, I have also been
            dipping my toes into Artificial Intelligence and Machine Learning
            through both self-exploration and courses at Johns Hopkins
          </p>
          <p className="text-muted-foreground">
            {" "}
            I am also a part of the JHU ICPC, Tennis, and Hop AI club! In my
            freetime, I enjoy working out, playing tennis, and reviewing food.{" "}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get in Touch
            </a>

            <a
              href="https://docs.google.com/document/d/1rfvrnLLrGVCOuKZxav3caEPMWQq0EwLyzP9J9kx74Ik/edit?usp=sharing"
              className="newbutton"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
