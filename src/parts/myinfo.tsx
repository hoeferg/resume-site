//defide code into two parts so that they can be rendered different for desktop and mobile
import Intro from "../components/intro";
import Contact from "../components/contact";
import Education from "../components/education";
import PersonalDevelopment from "../components/personalDevelopment";
import Languages from "../components/languages";

export default function MyInfo() {
    return (
        <div className="text-white bg-cyan-500 ">
            <Intro />
            <Contact />
            <Education />
            <PersonalDevelopment />
            <Languages />
        </div>
    )
}