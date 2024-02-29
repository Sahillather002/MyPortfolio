import Navigation from "@/Components/Navigation/navigation";
import Greeting from "@/Components/Greetings/greeting";
import Skills from "@/Components/skills/skills";
import Experience from "@/Components/experience/experience";
import Projects from "@/Components/OpenSourceProject/openSourceProject";

import ScrollToTop from "@/Components/commons/scrollToTop";
export default function Home() {
  return (
    <main>
      <Navigation />
      <Greeting />
      <Skills />
      <Experience />
      <Projects />
      <ScrollToTop />
    </main>
  );
}
