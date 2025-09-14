import Image from "next/image";
import Button from "../_components/ui/button";
import Download_Button from "../_components/ui/downloadbutton";
import Card from "../_components/ui/card";

const About = () => {
    const skills = {
    Languages: ["TypeScript", "C++", "Rust", "Python", "JavaScript"],
    Other: ["HTML", "CSS", "REST", "DOCKER", "KB"],
    Tools: ["VSCode", "Linux", "Figma", "Git", "KDE"],
    Databases: ["PostgreSQL", "MySQL"],
    Frameworks: ["React", "Django", "Express.js"],
  };

    const funFacts = [
    "I run long distance",
    "I often cycle",
    "I like Italian cuisine",
    "I was in the USA and UAE",
    "My favorite Movie is The Pursuit of Happyness",
    "I am still in college",
    "I love fighter jets and motorbikes",
  ];
    return(
        <div className="relative">
           <section id="about-me" className="py-20 md:py-10 px-10 md:px-48">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <h4 className="text-xl lg:text-4xl font-bold text-white mb-4"><span className="text-purple-600">/</span>about-me</h4>
                <p className="text-gray-500 mb-6">Who am I?</p>
                <p className="mb-4">
                  Hello, I'm Aditi!
                </p>
                <p className="mb-4">
                  I'm a third-year undergraduate student pursuing B.Tech in IT, with a fervent passion for Computer Science and problem-solving. My journey in development has equipped me with expertise in Python, JavaScript, Node.js, React, HTML, and CSS. I'm excited to be joining Sprinklr as a Software Engineer next summer.
                </p>
                <p>
                  My keen eye for detail and grindset mentality drives me to continuously explore and master new technologies, transforming complex challenges into elegant solutions. I thrive on bringing innovative development and system projects to life.
                </p>
                <div className="mt-10">
                <Download_Button />
              </div>
              </div>
              
              <div className="relative flex justify-center">
                {/* Placeholder for Character Illustration */}
                <Image
                    src="Group 62.svg"
                    alt="a cartoon indian hacker girl"
                    width={700}
                    height={700}
                />               
              </div>
            </div>
          </section>

          <section id="skills" className="py-16 md:py-32 px-10 md:px-48">
            <div className="flex flex-wrap items-center gap-4 mb-8">
                <h2 className="text-xl lg:text-3xl font-bold text-white"><span className="text-purple-700">#</span>skills</h2>
                <div className="grow h-0.5 bg-gradient-to-r from-pink-500 via-purple-400 to-purple-700"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {Object.entries(skills).map(([category, list]) => (
                <Card key = {category} heading={category} content={list} />
              ))}
            </div>
          </section>

          <section id="fun-facts" className="py-16 md:py-20 md:px-48">
             <div className="flex flex-wrap items-center gap-4 mb-8">
                <h2 className="text-xl lg:text-3xl font-bold text-white"><span className="text-purple-700">#</span>fun-facts</h2>
                <div className="grow h-0.5 bg-gradient-to-r from-pink-500 via-purple-400 to-purple-700"></div>
            </div>
            <div className="flex flex-wrap gap-4">
                {funFacts.map(fact => (
                    <span key={fact} className="border border-gray-700 px-4 py-2 text-gray-400">{fact}</span>
                ))}
            </div>
             {/* Placeholder for decorative SVGs */}    

          </section>
          <div className="absolute top-150 right-0 -z-10">
                          <Image
                          src="Group 58.svg"
                          alt="yay"
                          height={300}
                          width={300}
                          />
                       </div>
                       <div className="absolute top-400 left-0 -z-10">
                          <Image
                          src="Group 58.svg"
                          alt="yay"
                          height={300}
                          width={300}
                          />
                       </div>
                       <div className="absolute top-300 left-0 -z-10">
                          <Image
                          src="Dots.svg"
                          alt="yay"
                          height={100}
                          width={100}
                          />
                       </div>
                       <div className="absolute top-350 right-0 -z-10">
                          <Image
                          src="Dots.svg"
                          alt="yay"
                          height={200}
                          width={200}
                          />
                       </div>
          
        </div>
    )
};

export default About;