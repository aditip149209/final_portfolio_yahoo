import Image from "next/image";
import Button from "../_components/ui/button";
import Card from "../_components/ui/card";

const Work = () => {
    const projectsData = [
  {
    tags: "Node.js MySql Sequelize PostMan",
    title: "KaizenFit - Fitness Tracker",
    description: "Start tracking your fitness goals with KaizenFit",
    linkText: "GitHub",
    linkHref: "https://github.com/aditip149209/kaizenfit"
  },
  {
    tags: "Next.js",
    title: "My Portfolio",
    description: "you are here",
    linkText: "Live",
    linkHref: "#"
  },
  {
    tags: "Go gRPC Raft",
    title: "Synapse",
    description: "A network aware container runtime orchestrator",
    linkText: "GitHub",
    linkHref: "https://github.com/aditip149209/Synapse"
  },
  {
    tags: "FastAPI React.js Agno Langchain",
    title: "StrAIver",
    description: "Your personal CS tutor and companion",
    linkText: "GitHub",
    linkHref: "https://github.com/aditip149209/straiver-fin"
  },
  {
    tags: "Node.js Docker Redis Nginx K8",
    title: "SwalpaURL",
    description: "Give your verbose URLs short, wacky names",
    linkText: "GitHub",
    linkHref: "https://github.com/aditip149209/SwalpaURL"
  },
  {
    tags: "React.js Vite",
    title: "Artist Website",
    description: "A simple website for my art teacher",
    linkText: "Live",
    linkHref: "https://artbyvishwanath.vercel.app/"
  },
  {
    tags: "C++ Make AES-256",
    title: "Stegosaurus",
    description: "A steganography tool that hides and jumbles",
    linkText: "Github",
    linkHref: "https://github.com/ddpigeon/stegosaurus"
  }
];

    return(
        <>
            <section id="projects" className="py-12 md:py-20 px-4 md:px-48">
                <div className="mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"><span className="text-purple-700">/</span>projects</h2>
                    <p className="text-gray-400 mt-3 md:mt-5 text-base md:text-xl">List of my projects</p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {projectsData.map((project) => (
                        <div key={project.title} className="border border-gray-700 flex flex-col h-full">
                            <div className="p-4 md:p-6 border-b border-gray-700">
                                <p className="text-xs md:text-sm text-gray-300">{project.tags}</p>
                            </div>
                            <div className="p-4 md:p-6 flex flex-col flex-grow">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 md:mb-6 flex-grow text-sm md:text-base">{project.description}</p>
                                <a href={project.linkHref} className="border border-pink-500 py-2 px-4 self-start inline-flex items-center gap-2 hover:bg-pink-800 transition-colors text-sm md:text-base">
                                    {project.linkText} <span>{'<~>'}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <div className="absolute top-100 left-0 -z-10 hidden md:block">
                <Image
                    src="Dots.svg"
                    alt="decorative dots"
                    height={100}
                    width={100}
                />
            </div>
            <div className="absolute top-200 right-0 -z-10 hidden lg:block">
                <Image 
                    src="Group 58.svg"
                    alt="decorative group"
                    height={300}
                    width={300}
                />
            </div>
        </>
    );
};

export default Work;

