import Image from "next/image";
import Button from "./_components/ui/button";

export default function Home() {
  const projectsData = [
  {
    imageSrc: "/placeholder.png", // Replace with your image path
    tags: "React.js Agno Langchain FastAPI",
    title: "StrAIver",
    description: "Your very own CS companion",
    liveLink: "#",
  },
  {
    imageSrc: "/placeholder.png",
    tags: "React.js MySql Node.js",
    title: "KaizenFit",
    description: "Your personal fitness companion",
    liveLink: "#",
  },
  {
    imageSrc: "/placeholder.png",
    tags: "React.js Docker K8 Node.js",
    title: "SwalpaURL",
    description: "A not-so-boring URL shortener",
    liveLink: "#",
  },
];

const skillsData = {
  Languages: ["TypeScript", "C++", "Rust", "Python", "JavaScript"],
  Other: ["HTML", "CSS", "REST", "Docker", "K8", "Nginx"],
  Databases: ["PostgreSQL", "MySQL"],
  Tools: ["VSCode", "Linux", "Figma", "Git"],
  Frameworks: ["React", "Django", "Express.js", "Next.js"],
};

    return (
      <>
      <div className="font-mono py-24 md:py-48">

{/* this is the hero section */}

        <section id="hero">
          <div className="grid md:grid-cols-2 gap-16 items-center md:px-48">
            <div>  
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Hi! I'm Aditi, a <span className="text-pink-500">software engineer</span> and a <span className="text-pink-500">full-stack developer</span>
                </h1>
                <p className="text-gray-400 mt-4">I craft responsive websites and scalable backends. Always eager to learn new technologies!</p>
                <div className="mt-4">
                  <Button href="/contact">Contact Me!</Button>
                </div>
              </div>
              <div className="relative">
                {/* Placeholder for main character illustration */}
                <div className="w-full h-80 flex items-center justify-center rounded-lg">
                    <Image 
                    className=""
                    src="Group 63.svg"
                    alt="yayyy mee"
                    width={400}
                    height={400}
                    />
                </div>
                <div className="mt-4 border border-gray-700 p-2 text-sm w-fit mx-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-linear-65 from-purple-900 to-pink-500"></div>
                    <span>Currently working on <span className="text-white">Portfolio</span></span>
                  </div>
                </div>
              </div>
          </div>
        </section>

{/* projects */}
        <section id="works" className="py-16 md:px-48 md:mt-24">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-white"><span className="text-pink-500">#</span>projects</h2>
              <div className="grow h-0.5 bg-gradient-to-r from-pink-500 via-purple-400 to-purple-700 mx-5"></div>
              <Button href="works">View more </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectsData.map(p => (
                <div key={p.title} className="border border-gray-700">
                  {/* Placeholder for project image */}
                  <div className="w-full h-48 bg-gray-800 flex items-center justify-center border-b border-gray-700">
                    <span className="text-gray-500">{p.title} Image</span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-2">{p.tags}</p>
                    <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-gray-400 mb-4">{p.description}</p>
                    <Button href={p.liveLink}>Live &lt;~&gt;</Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- SKILLS SECTION --- */}
          <section id="skills" className="py-16 md:px-48 md:mt-24">
            <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white"><span className="text-pink-500">#</span>skills</h2>
            <div className="grow h-0.5 bg-gradient-to-r from-pink-500 via-purple-400 to-purple-700 ml-5"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center">
                {/* Placeholder for skills decorative SVG */}
                <div className="flex items-center justify-center">
                    <Image
                    src="Group 64.svg"
                    alt="random icons"
                    width={500}
                    height={500}
                    />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(skillsData).map(([category, list]) => (
                  <div key={category} className="border border-gray-400">
                    <h3 className="text-white text-xl font-bold p-2 border-b border-gray-400">{category}</h3>
                    <ul className="p-2 text-lg font-medium text-gray-300 space-y-1">
                      {list.map(skill => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="absolute top-100 right-0 -z-10">
                                    <Image
                                    src="Group 58.svg"
                                    alt="yay"
                                    height={300}
                                    width={300}
                                    />
          </div>
          <div className="absolute top-350 left-10 -z-10">
                                    <Image
                                    src="Dots.svg"
                                    alt="yay"
                                    height={100}
                                    width={100}
                                    />
          </div>
          <div className="absolute top-550 right-10 -z-10">
                                    <Image
                                    src="Dots.svg"
                                    alt="yay"
                                    height={100}
                                    width={100}
                                    />
          </div>

    </div>
    </>
  );
}
