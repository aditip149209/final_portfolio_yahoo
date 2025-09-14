import React from "react";
import Image from "next/image";
import Card from "../ui/card";
import { useState } from "react";
import Button from "../ui/button";
import Download_Button from "../ui/downloadbutton";

const About = () => {
    


    
    return(
        <>
            <div>
                <section id="about-me" className="py-20 md:py-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">/about-me</h2>
                <p className="text-gray-500 mb-6">Who am I?</p>
                <p className="mb-4">
                  Hello, I'm Elias!
                </p>
                <p className="mb-4">
                  I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                </p>
                <p>
                  Transforming my creativity and knowledge into a website has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                </p>
              </div>
              <Download_Button />
              <div className="relative flex justify-center">
                {/* Placeholder for Character Illustration */}
                <div className="w-64 h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Character IMG</span>
                </div>
                 {/* Placeholder for Decorative SVGs */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 border border-pink-500/50 -z-10"></div>
                <div className="absolute top-8 right-8 w-24 h-24 bg-pink-500/10 border border-pink-500/50 -z-10"></div>
                <div className="absolute bottom-1/4 -right-4 w-10 h-10 bg-gray-800/50"></div>
              </div>
            </div>
          </section>
                <div>
{/* skills */}
                </div>
                <div>
{/* fun facts */}
                </div>                
            </div>
        </>
    )
};


export default About;