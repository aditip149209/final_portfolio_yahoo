import Image from "next/image";

const Contact = () => {
    return(
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <section id="contact">
        {/* Page Heading */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
            <span className="text-purple-500">/</span>contact
          </h2>
          <p className="text-gray-400">Get in touch or shoot me an email directly at <a href="mailto:aditip149209@gmail.com" className="text-white hover:underline">aditip149209@gmail.com</a></p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Left Column: Info & Socials */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-gray-400 max-w-lg">
                I’m currently available for freelance work and open to discussing new projects. Whether you have a question, a proposal, or just want to say hi, my inbox is always open. I’ll get back to you as soon as possible.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
        <div className="border border-gray-700 w-fit -mt-10">
              <h3 className="text-white border-b border-gray-700 p-4 font-bold">Message me here</h3>
              <div className="space-y-4 p-4">
                {/* Discord Link */}
                <a href="https://discord.com/users/852746966352789515" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                  <Image src="Discord.svg" alt="discord" width={24} height={24}/>
                  <span>elysiumseeker2012</span>
                </a>
                {/* Email/LinkedIn Link */}
                <a href="https://linkedin.com/in/aditi-pandey1932" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                  {/* <IconPlaceholder className="w-8 h-8"/> */}
                  <Image src="Linkedin.svg" alt="linkedin" width={24} height={24} />
                  <span>linkedin</span>
                </a>
              </div>
        </div>
        </div>
      </section>
      <div className="absolute top-40 right-0 -z-10">
            <Image
                src="Group 58.svg"
                alt="yay"
                height={300}
                width={300}
                />
        </div>
    </main>
    )
};

export default Contact;