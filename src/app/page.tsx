import Image from "next/image";
import Button from "./_components/ui/button";

export default function Home() {
  const projectsData = [
  {
    imageSrc: "/Gemini_Generated_Image_vi5ihdvi5ihdvi5i.png", // Replace with your image path
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
      <div className="font-mono py-24 md:py-48">

{/* this is the hero section */}

        <section id="hero">
          <div className="grid md:grid-cols-2 gap-16 items-center md:px-48">
            <div>  
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Hi! I'm Aditi, a <span className="text-pink-500">software engineer</span> passionate about building robust web applications from concept to deployment
                </h1>
                <p className="text-gray-400 mt-4">I thrive on solving complex problems with elegant code, always exploring new technologies.</p>
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
                <div className="mt-4 border border-gray-700 p-2 text-sm w-fit mx-auto flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-linear-65 from-purple-900 to-pink-500"></div>
                    <span>Currently working on <span className="text-white">Synapse</span></span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-linear-65 from-purple-900 to-pink-500"></div>
                    <span>Upcoming summer intern at <span className="text-white">Sprinklr</span></span>
                  </div> */}
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
                  <div className="w-full h-48 bg-gray-800 border-b border-gray-700 overflow-hidden">
  <img
    src={p.imageSrc} // Replace with your image source
    alt={p.title} // Add descriptive alt text
    className="w-full h-full object-cover"
  />
</div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-2">{p.tags}</p>
                    <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-gray-400 mb-4">{p.description}</p>
                    <Button href={p.liveLink}>GitHub &lt;~&gt;</Button>
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
