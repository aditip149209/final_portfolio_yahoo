import Image from "next/image";
import Button from "./_components/ui/button";

export default function Home() {
  const projectsData = [
  {
    imageSrc: "/Gemini_Generated_Image_vi5ihdvi5ihdvi5i.png",
    tags: "React.js Agno Langchain FastAPI",
    title: "StrAIver",
    description: "Your very own CS companion",
    liveLink: "https://github.com/aditip149209/straiver-fin",
  },
  {
    imageSrc: "/fitsum-admasu-oGv9xIl7DkY-unsplash.jpg",
    tags: "React.js MySql Node.js",
    title: "KaizenFit",
    description: "Your personal fitness companion",
    liveLink: "https://github.com/aditip149209/kaizenfit",
  },
  {
    imageSrc: "synapse.png",
    tags: "Go gRPC raft",
    title: "Synapse",
    description: "A network-aware container orchestrator",
    liveLink: "https://github.com/aditip149209/Synapse",
  },
];

const skillsData = {
  Languages: ["TypeScript/JavaScript", "C++", "Go", "Python"],
  Other: ["Docker", "K8", "Nginx", "GCP"],
  Databases: ["PostgreSQL", "MySQL"],
  Tools: ["VSCode", "Linux", "Figma", "Git"],
  Frameworks: ["React", "Django", "Express.js", "Next.js"],
};

    return (
      <>
      <div className="font-mono py-12 md:py-24 lg:py-48 px-4 md:px-0">

        {/* HERO SECTION */}
        <section id="hero">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center md:px-48">
            <div>  
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Hi! I'm Aditi, a <span className="text-pink-500">software engineer</span> passionate about building robust web applications from concept to deployment
                </h1>
                <p className="text-gray-400 mt-4 text-sm md:text-base">I thrive on solving complex problems with elegant code, always exploring new technologies.</p>
                <div className="mt-4">
                  <Button href="/contact">Contact Me!</Button>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="w-full max-w-xs md:max-w-none flex items-center justify-center rounded-lg">
                    <Image 
                    src="Group 63.svg"
                    alt="Aditi illustration"
                    width={400}
                    height={400}
                    priority
                    />
                </div>
              </div>
          </div>
          
          <div className="mt-8 md:mt-12 px-4 md:px-48">
            <div className="border border-gray-700 p-3 md:p-4 text-xs md:text-sm w-fit flex flex-col gap-2 mx-auto md:mx-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-linear-65 from-purple-900 to-pink-500"></div>
                <span>Currently working on <span className="text-white">Synapse</span></span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="works" className="py-12 md:py-16 md:px-48 md:mt-24 px-4 mt-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white"><span className="text-pink-500">#</span>projects</h2>
              <div className="hidden md:block grow h-0.5 bg-gradient-to-r from-pink-500 via-purple-400 to-purple-700 mx-5"></div>
              <Button href="works">View more </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {projectsData.map(p => (
                <div key={p.title} className="border border-gray-700">
                  <div className="w-full h-40 md:h-48 bg-gray-800 border-b border-gray-700 overflow-hidden">
                    <img
                      src={p.imageSrc}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <p className="text-xs md:text-sm text-gray-500 mb-2">{p.tags}</p>
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">{p.description}</p>
                    <Button href={p.liveLink}>GitHub &lt;~&gt;</Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS SECTION */}
          <section id="skills" className="py-12 md:py-16 md:px-48 md:mt-24 px-4 mt-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white"><span className="text-pink-500">#</span>skills</h2>
              <div className="md:grow h-0.5 bg-gradient-to-r from-pink-500 via-purple-400 to-purple-700 md:ml-5"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="flex justify-center hidden md:flex">
                <Image
                    src="Group 64.svg"
                    alt="skill icons"
                    width={500}
                    height={500}
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
                {Object.entries(skillsData).map(([category, list]) => (
                  <div key={category} className="border border-gray-400">
                    <h3 className="text-white text-sm md:text-xl font-bold p-2 md:p-3 border-b border-gray-400">{category}</h3>
                    <ul className="p-2 md:p-3 text-xs md:text-lg font-medium text-gray-300 space-y-1">
                      {list.map(skill => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="absolute top-100 right-0 -z-10 hidden lg:block">
            <Image
                src="Group 58.svg"
                alt="decorative"
                height={300}
                width={300}
            />
          </div>
          <div className="absolute top-350 left-10 -z-10 hidden md:block">
            <Image
                src="Dots.svg"
                alt="decorative"
                height={100}
                width={100}
            />
          </div>
          <div className="absolute top-550 right-10 -z-10 hidden lg:block">
            <Image
                src="Dots.svg"
                alt="decorative"
                height={100}
                width={100}
            />
          </div>
    </div>
    </>
  );
}
