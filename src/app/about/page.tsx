import Image from "next/image";
import Button from "../_components/ui/button";
import Download_Button from "../_components/ui/downloadbutton";
import Card from "../_components/ui/card";

const About = () => {
    const skills = {
    Languages: ["TypeScript/JavaScript", "C++", "Go", "Python" ],
    Other: [ "DOCKER", "KB", "GCP", "Sequelize"],
    Tools: ["VSCode", "Linux", "Figma", "Git"],
    Databases: ["PostgreSQL", "MySQL"],
    Frameworks: ["React", "Django", "Express.js", "Next.js"],
  };

    return(
        <div className="relative">
           <section id="about-me" className="py-12 md:py-20 px-4 md:px-48">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="max-w-xl">
                <h4 className="text-2xl md:text-4xl font-bold text-white mb-4"><span className="text-purple-600">/</span>about-me</h4>
                <p className="text-gray-500 mb-4 md:mb-6 text-sm md:text-base">Who am I?</p>
                <p className="mb-3 md:mb-4 text-sm md:text-base">
                  Hello, I'm Aditi!
                </p>
                <p className="mb-3 md:mb-4 text-sm md:text-base">
                  I'm a third-year undergraduate student pursuing B.Tech in IT, with a fervent passion for Computer Science and problem-solving. My journey in development has equipped me with expertise in Python, JavaScript, Node.js, React, HTML, and CSS.
                </p>
                <p className="text-sm md:text-base">
                  My keen eye for detail and grindset mentality drives me to continuously explore and master new technologies, transforming complex challenges into elegant solutions. I thrive on bringing innovative development and system projects to life.
                </p>
                <div className="mt-6 md:mt-10">
                  <Download_Button />
                </div>
              </div>
              
              <div className="relative flex justify-center">
                <Image
                    src="Group 62.svg"
                    alt="a cartoon indian hacker girl"
                    width={400}
                    height={400}
                    className="w-full max-w-xs md:max-w-none"
                />               
              </div>
            </div>
          </section>

          <section id="skills" className="py-12 md:py-16 md:py-32 px-4 md:px-48 mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white"><span className="text-purple-700">#</span>skills</h2>
                <div className="grow h-0.5 bg-gradient-to-r from-pink-500 via-purple-400 to-purple-700"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {Object.entries(skills).map(([category, list]) => (
                <Card key={category} heading={category} content={list} />
              ))}
            </div>
          </section>

          <div className="absolute top-150 right-0 -z-10 hidden lg:block">
            <Image
                src="Group 58.svg"
                alt="decorative"
                height={300}
                width={300}
            />
          </div>
          <div className="absolute top-300 left-0 -z-10 hidden md:block">
            <Image
                src="Dots.svg"
                alt="decorative"
                height={100}
                width={100}
            />
          </div>
          <div className="absolute top-350 right-0 -z-10 hidden md:block">
            <Image
                src="Dots.svg"
                alt="decorative"
                height={200}
                width={200}
            />
          </div>
        </div>
    )
};

export default About;