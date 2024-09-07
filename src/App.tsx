import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

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
            {/* Career Profile */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">CAREER PROFILE</h2>
              <p className="text-gray-700">
                Full stack web developer with a background in education. Innovative problem-solver passionate about
                developing web applications; focused on mobile-first design and development. Strengths in creativity, teamwork,
                and building projects from idealization to execution as shown as working at a startup.
              </p>
            </section>

            {/* Experiences */}
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
              {/* Add more unique job experiences here */}
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-teal-700 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                PROJECTS
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="bg-teal-500 text-white">
                    <CardTitle>DNS and Home Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Installed Pi Hole to manage DNS.</li>
                      <li>Setup Prometheus with Node Exporter and Blackbox Exporter.</li>
                      <li>Created dashboards in Grafana to visualize ISP health and CPU metrics.</li>
                      <li>Alert Manager used to notify of problems.</li>
                      <li>Setup VPN so mobile devices can use Pi Hole.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="bg-teal-500 text-white">
                    <CardTitle>WebDev Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Devlope Page Sites.</li>
                      <li>Web Hosting.</li>
                      <li>Search Engine Optimization.</li>
                      <li>Google Maps Listings.</li>
                      <li>Website Analytics.</li>
                      <li>Web Monitoring.</li>
                      <li>Marketing.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Skills & Proficiency */}
            <section>
              <h2 className="text-2xl font-bold text-teal-700 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                SKILLS & PROFICIENCY
              </h2>
              <div className="space-y-4">
                {[
                  { name: "Product Readiness", proficiency: 95 },
                  { name: "Post Mortem", proficiency: 95 },
                  { name: "Prometheus & Grafana", proficiency: 90 },
                  { name: "ELK Stack", proficiency: 95 },
                  { name: "Python & Flask", proficiency: 85 },
                  { name: "Linux Administration", proficiency: 70 },
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center">
                    <span className="w-40 text-sm font-medium text-gray-700">{skill.name}</span>
                    <Progress value={skill.proficiency} className="flex-grow" />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}