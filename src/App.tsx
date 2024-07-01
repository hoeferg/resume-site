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
    <div className="m-10 flex flex-col">
      <div className="order-1 md:order-1">
      <Intro />
      <Contact />
      </div>
      <Intro />
      <Contact />
      <CareerProfile />
      <Experience />
      <Skills />
      <Education />
      <PersonalDevelopment />
      <Languages />
    </div>
  );
}

export default App;
