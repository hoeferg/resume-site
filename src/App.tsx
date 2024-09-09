import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Component() {
  const handleDownloadResume = () => {
    // Replace with the actual path to your resume file
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
            <h1 className="text-2xl font-bold mb-2">Gayle Hoefer</h1>
            <p className="mb-4">Software Engineer</p>
            <Button 
              className="w-full mb-6 bg-white text-teal-600 hover:bg-teal-100"
              onClick={handleDownloadResume}
            >
              Download Resume
            </Button>

            <div className="mb-6">
            <img 
                src="/src/images/Gayle.png" 
                alt="Picture of Gayle Hoefer" 
                width={200} 
                height={200} 
                className="rounded-full"
              />
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
              <h2 className="text-2xl font-bold text-teal-700 mb-4">
                CAREER PROFILE
              </h2>
              <p className="text-gray-700">
                Full stack web developer with a background in education.
                Innovative problem-solver passionate about developing web
                applications; focused on mobile-first design and development.
                Strengths in creativity, teamwork, and building projects from
                idealization to execution as shown as working at a startup.
              </p>
            </section>

            {/* Experiences */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">
                EXPERIENCES
              </h2>

              {/* Experiance 1 */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold">
                  Chief Information Security Officer, Software Engineer
                </h3>
                <p className="text-gray-600">Healthcare Download, Remote Az</p>
                <p className="text-gray-600">January 2023 - June 2024</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>
                    Chief Information Security Officer: Created a secure site
                    with end-to-end encryption, ensuring compliance with HIPAA
                    and other healthcare regulations.
                  </li>
                  <li>
                    First employee hired by company: Played a pivotal role in
                    designing a website and creating the initial database for
                    the site.
                  </li>
                  <li>
                    User Dashboard: Designed, programmed, and rigorously tested
                    a user-friendly dashboard for easy access to healthcare
                    information.
                  </li>
                  <li>
                    VC Presentations: Played a key role in presentations to
                    venture capitalists, showcasing the web application's
                    potential in the health analytics sector.
                  </li>
                  <li>
                    Full-Stack Development: Developed both backend and frontend
                    components of the website using technologies such as React,
                    Node.js, Postman, and Sequelize.
                  </li>
                  <li>
                    Communication: Provided daily updates on widget creation and
                    server status to managers.
                  </li>
                </ul>
              </div>

              {/* Experiance Two */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold">
                  Verison Specialist, Sales Associate
                </h3>
                <p className="text-gray-600">Best Buy, Phoenix, Az</p>
                <p className="text-gray-600">
                  May 2022 - August 2022, August 2024 - Current{" "}
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>
                    Customer Engagement: Effectively communicated the features
                    and benefits of major appliances, playing a crucial role in
                    facilitating sales.
                  </li>
                  <li>
                    Product Management: Managed the efficient movement of
                    products from storage to the sales floor, ensuring optimal
                    product availability and presentation.
                  </li>
                  <li>
                    Sales Achievement: Generated $100,000 in product sales
                    within the first month of the store's opening, demonstrating
                    an ability to quickly establish rapport with customers and
                    drive revenue.
                  </li>
                  <li>
                    Top Sales Performer: Maintained the top-ranking position as
                    the number one salesperson on the sales team for three
                    consecutive months, showcasing sales acumen, product
                    knowledge, and a customer-focused approach.
                  </li>
                </ul>
              </div>

              {/* Experiance Three */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold">
                  Middle School Science Teacher
                </h3>
                <p className="text-gray-600">
                  Pendergast Elementary School District; Phoenix, Az
                </p>
                <p className="text-gray-600">August 2020 - May 2022</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>
                    Led the integration of technology for seven teachers during
                    the transition to remote learning amid COVID-19.
                  </li>
                  <li>
                    Devised a curriculum that not only guided students' learning
                    but also encouraged their active engagement in the
                    educational process. I also took a proactive approach in
                    managing interpersonal relationships among students,
                    ensuring a harmonious and supportive classroom atmosphere.
                  </li>
                  <li>
                    Achieved a 25% increase in student comprehension of science
                    by incorporating teamwork projects into the curriculum,
                    enhancing both understanding and collaborative skills.
                  </li>
                  <li>
                    Pioneered a 3D printing program that made our middle school
                    the most active 3D printing studio in the country,
                    empowering students with practical skills and exposure to
                    cutting-edge technology.
                  </li>
                </ul>
              </div>

              {/* Experiance Four */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold">
                  Fifth and Sixth Grade Science Student Teacher
                </h3>
                <p className="text-gray-600">
                  Deer Valley Unified School District and Mesa Unified School
                  District; Phoenix, Az
                </p>
                <p className="text-gray-600">August 2020 - May 2022</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>
                    Instructional Planning: Collaborated closely with the main
                    teaching team to design comprehensive lesson plans for both
                    in-person and virtual classes, ensuring a seamless learning
                    experience.
                  </li>
                  <li>
                    Diverse Teaching Techniques: Developed and employed a
                    variety of teaching methods to engage and support student
                    learning.
                  </li>
                  <li>
                    Communication: Maintained open channels of communication
                    with school administration and parents, providing regular
                    updates on students' progress and performance.
                  </li>
                  <li>
                    Online Transition: Facilitated a successful transition of
                    80% of students to online learning, demonstrating
                    adaptability and commitment to student success during
                    challenging times.
                  </li>
                  <li>
                    Improved Test Scores: Achieved a 15% increase in science
                    test scores by incorporating engaging demonstrations into
                    the curriculum, making complex concepts more accessible.
                  </li>
                </ul>
              </div>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Project One */}
                <Card>
                  <CardHeader className="bg-teal-500 text-white">
                    <CardTitle>Olympus Project</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">                       
                      <li><strong>Deployed: </strong>
                        <a href="https://olympus.herokuapp.com/" className="text-blue-600 hover:underline">olympus.herokuapp.com</a>
                      </li>
                      <li><strong>Github: </strong>
                        <a href="https://github.com/hoeferg/Olympus-Project2" className="text-blue-600 hover:underline">Olympus-Project2</a>
                      </li>
                      <li><strong>Summary: </strong>
                        A quiz game where users answer questions to prevent
                        disaster on the Olympus Space Station
                      </li>
                      <li><strong>Role: </strong>Stripe incorporation, full stack development</li>
                      <li><strong>Tools: </strong>Stripe, MongoDB, React, GraphQL</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Project Two */}
                <Card>
                  <CardHeader className="bg-teal-500 text-white">
                    <CardTitle>E-commerce</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li><strong>Deployed: </strong>
                        <a href="https://hoeferg.github.io/Ecommerce/" className="text-blue-600 hover:underline">hoeferg.github.io/Ecommerce</a>
                      </li>
                      <li><strong>Github: </strong>
                        <a href="https://github.com/hoeferg/Ecommerce" className="text-blue-600 hover:underline">Ecommerce</a>
                      </li>
                      <li><strong>Summary: </strong>
                        An ecommerce website that contains sample data analytics for a business
                      </li>
                      <li><strong>Role: </strong>Styled front end and managed quality control</li>
                      <li><strong>Tools: </strong>React, Github Pages, Node, Material UI</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Project Three */}
                <Card>
                  <CardHeader className="bg-teal-500 text-white">
                    <CardTitle>Back End E-Commerce App</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li><strong>Github: </strong>
                        <a href="#" className="text-blue-600 hover:underline">Back End App E-Commerce</a>
                      </li>
                      <li><strong>Summary: </strong>
                        Manage the current stock of a store
                      </li>
                      <li><strong>Database Tools: </strong>HTML, CSS, JavaScript, jQuery, Node</li>
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
                  { name: "Node", proficiency: 95 },
                  { name: "JavaScript", proficiency: 95 },
                  { name: "Java", proficiency: 90 },
                  { name: "Python", proficiency: 95 },
                  { name: "Sequalize", proficiency: 85 },
                  { name: "API Generation", proficiency: 70 },
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center">
                    <span className="w-40 text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <Progress value={skill.proficiency} className="flex-grow" />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
