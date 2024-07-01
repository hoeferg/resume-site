import "./App.css";
import Intro from "./components/intro";
import Contact from "./components/contact";
import CareerProfile from "./components/careerProfile";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Education from "./components/education";
import PersonalDevelopment from "./components/personalDevelopment";
import Languages from "./components/languages";
import "./index.css"

function App() {
  return (
    <>
      <Intro />
      <Contact />
      <CareerProfile />
      <Experience />
      <Skills />
      <Education />
      <PersonalDevelopment />
      <Languages />
    </>
  );
}

export default App;
