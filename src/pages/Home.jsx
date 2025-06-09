import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme Toggle */}
      <ThemeToggle />
      {/* bg effect */}
      <StarBackground />
      {/* navbar*/}
      <Navbar />
      {/* main content*/}

      <main>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <ProjectSection></ProjectSection>
        <ContactSection></ContactSection>
      </main>

      {/*footer */}
      <Footer size={20}></Footer>
    </div>
  );
};
