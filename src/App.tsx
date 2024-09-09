import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Component() {
  const handleDownloadResume = () => {
    const resumeUrl = '/src/resume/GayleHoeferResume.pdf'
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Gayle_Hoefer_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card className="max-w-6xl mx-auto my-8 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar - will be on top for mobile */}
          <div className="w-full md:w-1/3 bg-teal-600 text-white p-6 md:p-8 order-first md:order-last">
            <div className="mb-6">
              <img 
                src="/src/images/Gayle.png" 
                alt="Picture of Gayle Hoefer" 
                className="w-full h-auto rounded-lg mb-4"
              />
              <h1 className="text-2xl font-bold mb-2">Gayle Hoefer</h1>
              <p className="mb-4">Software Engineer</p>
              <Button 
                className="w-full mb-6 bg-white text-teal-600 hover:bg-teal-100"
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
            </div>

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
          <div className="w-full md:w-2/3 p-6 md:p-8 bg-white">
            {/* Career Profile */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-teal-700 mb-2 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                CAREER PROFILE
              </h2>
              <p className="text-gray-700">
                Full stack web developer with a background in education. Innovative problem-solver passionate
                about developing web applications; focused on mobile-first design and development. Strengths in
                creativity, teamwork, and building projects from idealization to execution as shown as working at a
                startup.
              </p>
            </section>

            {/* Experiences */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-teal-700 mb-2 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                EXPERIENCES
              </h2>

              {/* Chief Information Security Officer, Software Engineer */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Chief Information Security Officer, Software Engineer</h3>
                <p className="text-gray-600">Healthcare Download, Remote Az</p>
                <p className="text-gray-600">January 2023 - June 2024</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Created a secure site with end-to-end encryption, ensuring compliance with HIPAA and other healthcare regulations.</li>
                  <li>First employee hired by company: Played a pivotal role in designing a website and creating the initial database for the site.</li>
                  <li>Designed, programmed, and rigorously tested a user-friendly dashboard for easy access to healthcare information.</li>
                  <li>Played a key role in presentations to venture capitalists, showcasing the web application's potential in the health analytics sector.</li>
                  <li>Developed both backend and frontend components of the website using technologies such as React, Node.js, Postman, and Sequelize.</li>
                  <li>Provided daily updates on widget creation and server status to managers.</li>
                </ul>
              </div>

              {/* Verison Specialist, Sales Associate */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Verison Specialist, Sales Associate</h3>
                <p className="text-gray-600">Best Buy, Phoenix, Az</p>
                <p className="text-gray-600">May 2022 - August 2022, August 2024 - Current</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Effectively communicated the features and benefits of major appliances, playing a crucial role in facilitating sales.</li>
                  <li>Managed the efficient movement of products from storage to the sales floor, ensuring optimal product availability and presentation.</li>
                  <li>Generated $100,000 in product sales within the first month of the store's opening.</li>
                  <li>Maintained the top-ranking position as the number one salesperson on the sales team for three consecutive months.</li>
                </ul>
              </div>

              {/* Middle School Science Teacher */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Middle School Science Teacher</h3>
                <p className="text-gray-600">Pendergast Elementary School District; Phoenix, Az</p>
                <p className="text-gray-600">August 2020 - May 2022</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Led the integration of technology for seven teachers during the transition to remote learning amid COVID-19.</li>
                  <li>Devised a curriculum that not only guided students' learning but also encouraged their active engagement in the educational process.</li>
                  <li>Achieved a 25% increase in student comprehension of science by incorporating teamwork projects into the curriculum.</li>
                  <li>Pioneered a 3D printing program that made our middle school the most active 3D printing studio in the country.</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-teal-700 mb-2 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                PROJECTS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-teal-100">
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">Olympus Project</h3>
                    <p><strong>Deployed:</strong> <a href="https://olympus.herokuapp.com/" className="text-blue-600 hover:underline">olympus.herokuapp.com</a></p>
                    <p><strong>Github:</strong> <a href="https://github.com/hoeferg/Olympus-Project2" className="text-blue-600 hover:underline">Olympus-Project2</a></p>
                    <p><strong>Summary:</strong> A quiz game where users answer questions to prevent disaster on the Olympus Space Station</p>
                    <p><strong>Role:</strong> Stripe incorporation, full stack development</p>
                    <p><strong>Tools:</strong> Stripe, MongoDB, React, GraphQL</p>
                  </CardContent>
                </Card>
                <Card className="bg-teal-100">
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">E-commerce</h3>
                    <p><strong>Deployed:</strong> <a href="https://hoeferg.github.io/Ecommerce/" className="text-blue-600 hover:underline">hoeferg.github.io/Ecommerce</a></p>
                    <p><strong>Github:</strong> <a href="https://github.com/hoeferg/Ecommerce" className="text-blue-600 hover:underline">Ecommerce</a></p>
                    <p><strong>Summary:</strong> An ecommerce website that contains sample data analytics for a business</p>
                    <p><strong>Role:</strong> Styled front end and managed quality control</p>
                    <p><strong>Tools:</strong> React, Github Pages, Node, Material UI</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Skills & Proficiency */}
            <section>
              <h2 className="text-xl font-bold text-teal-700 mb-2 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                SKILLS & PROFICIENCY
              </h2>
              <div className="space-y-4">
                {[
                  { name: "Node", proficiency: 95 },
                  { name: "JavaScript", proficiency: 95 },
                  { name: "Java", proficiency: 90 },
                  { name: "Python", proficiency: 95 },
                  { name: "Sequalize", proficiency: 85 },
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center">
                    <span className="w-40 text-sm font-medium text-gray-700">{skill.name}</span>
                    <Progress value={skill.proficiency} className="flex-grow bg-teal-200" indicatorClassName="bg-teal-600" />
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