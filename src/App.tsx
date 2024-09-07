import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="max-w-6xl mx-auto my-8 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar - will be on top for mobile */}
          <div className="w-full md:w-1/3 bg-teal-600 text-white p-6 md:p-8 order-first md:order-last">
            <h1 className="text-2xl font-bold mb-2">Gayle Hoefer</h1>
            <p className="mb-4">Software Engineer</p>
            <Button className="w-full mb-6 bg-white text-teal-600 hover:bg-teal-100">Download Resume</Button>
            
            <div className="mb-6">
              <h2 className="font-bold mb-2">Contact</h2>
              <p>gaylehoefer@gmail.com</p>
              <p>(602) 809-0162</p>
              <p>linkedin-Gayle Hoefer</p>
            </div>
            
            <div className="mb-6">
              <h2 className="font-bold mb-2">Education</h2>
              <p>Full Stack Web Development Certificate</p>
              <p>University of Arizona, Tucson, Az</p>
            </div>
            
            <div className="mb-6">
              <h2 className="font-bold mb-2">PERSONAL DEVELOPMENT</h2>
              <ul>
                <li>Java</li>
                <li>Python</li>
                <li>Heroku</li>
                <li>Docker</li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-bold mb-2">LANGUAGES</h2>
              <p>English (Native)</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 p-6 md:p-8">
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">CAREER PROFILE</h2>
              <p className="text-gray-700">
                Full stack web developer with a background in education. Innovative problem-solver passionate about
                developing web applications; focused on mobile-first design and development. Strengths in creativity, teamwork,
                and building projects from idealization to execution as shown as working at a startup.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">EXPERIENCES</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Chief Information Security Officer, Software Engineer</h3>
                <p className="text-gray-600">Healthcare Download, Remote Az</p>
                <p className="text-gray-600">January 2023 - June 2024</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Software engineer and the first full-time employee hired by the company.</li>
                  <li>As chief information security officer I created a secure site through end to end encryption while ensuring the company followed HIPPA laws and other healthcare regulations.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-teal-700 mb-4">PROJECTS</h2>
              <p className="text-gray-700">Project details would go here.</p>
            </section>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}