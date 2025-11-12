import Image from "next/image";

const Contact = () => {
    return(
        <main className="px-4 md:px-8 py-12 md:py-24 relative">
          <section id="contact" className="max-w-4xl mx-auto">
            {/* Page Heading */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                <span className="text-purple-500">/</span>contact
              </h2>
              <p className="text-gray-400 text-sm md:text-base">Get in touch or shoot me an email directly at <a href="mailto:aditip149209@gmail.com" className="text-white hover:underline">aditip149209@gmail.com</a></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              
              {/* Left Column: Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-gray-400 text-sm md:text-base">
                    I'm currently available for freelance work and open to discussing new projects. Whether you have a question, a proposal, or just want to say hi, my inbox is always open. I'll get back to you as soon as possible.
                  </p>
                </div>
              </div>

              {/* Right Column: Contact Info */}
              <div className="border border-gray-700 w-full md:w-fit">
                <h3 className="text-white border-b border-gray-700 p-3 md:p-4 font-bold text-base md:text-lg">Message me here</h3>
                <div className="space-y-3 md:space-y-4 p-3 md:p-4">
                  {/* Discord Link */}
                  <a href="https://discord.com/users/852746966352789515" className="flex items-center gap-3 md:gap-4 text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                    <Image src="Discord.svg" alt="discord" width={20} height={20} className="w-5 h-5 md:w-6 md:h-6"/>
                    <span>elysiumseeker2012</span>
                  </a>
                  {/* LinkedIn Link */}
                  <a href="https://linkedin.com/in/aditi-pandey1932" className="flex items-center gap-3 md:gap-4 text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                    <Image src="Linkedin.svg" alt="linkedin" width={20} height={20} className="w-5 h-5 md:w-6 md:h-6" />
                    <span>linkedin</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="absolute top-40 right-0 -z-10 hidden lg:block">
            <Image
                src="Group 58.svg"
                alt="decorative"
                height={300}
                width={300}
            />
          </div>
        </main>
    )
};

export default Contact;