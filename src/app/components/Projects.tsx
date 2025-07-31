import * as React from "react";
import Image from "next/image"

const projects = [ 
    // bluesky
    {
        title: "BlueSky Personalized Feed Anaylsis",
        description: "Collaborated with a team of 8 to develop a Python-based web application that retrieves and summarizes BlueSky's data.",
        tech: ["Python", "Git", "AT Proto", "Agile"],
        picture: "/assets/feedanalysis.jpeg",
        github: "", // optional github link
        demo: "", // optional live link 
    },

    // custom api server
    {
        title: "Video Game Collection",
        description: "Developed a video game collection web application that uses FastAPI and SQLite to store and retrieve user's video game collection.",
        tech: ["Python", "FastAPI", "Git", "SQLite"],
        picture: "/assets/frontend.jpg",
        github: "", // optional github link
        demo: "", // optional live link 
    },

    // c++ test generator
]

function Projects() {
    return (
        <section id="projects">
            <h2 className="text-zinc-900 text-xl md:text-2xl font-semibold leading-relaxed mb-2">Projects</h2>
            {/* project cards */}
            <div className="grid grid-cols-2 gap-5 mx-auto">
                {projects.map((project, index) => 
                    <div key={index} className="backdrop-blur-lg border border-black/10 rounded-2xl p-6 shadow-xl space-y-4 hover:shadow-purple-300/20 transition-all">
                        
                        {/* project title*/}
                        <h3 className="text-zinc-900 text-base md:text-lg font-semibold leading-tight text-center">{project.title}</h3>
                        
                        <Image src={project.picture} alt="Project Picture" width={250} height={31}></Image>

                        {/* project description*/}
                        <p className="text-zinc-900">{project.description}</p>

                        {/* tech stack */}
                        <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((tech, index) => (
                                <span key={index} className="px-2.5 py-1 bg-purple-200 border 
                                    border-zinc-900/20 text-zinc-900 rounded-md font-bold">{tech}</span>
                            ))}                  
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;