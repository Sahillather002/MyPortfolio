import Navigation from "@/Components/Navigation/navigation";
import Greeting from "@/Components/Greetings/greeting";
import Skills from "@/Components/skills/skills";
import Projects from "@/Components/OpenSourceProject/openSourceProject";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Greeting />
      <Skills />
      <Projects />
    </main>
  );
}
