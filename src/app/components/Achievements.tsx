import * as React from "react";
import Image from "next/image"

const achievements = [ 
    {
        name: "#include <dreamers> Hackathon",
        status: "First Place",
        date: "June 18 - 20, 2025",
        description: "Collaborated with a team of 5 to develop a Python and React based web app during a 48-hour hackathon.",
        tech: ["Python", "SQL Alchemy", "FastAPI", "Git"],
        picture: "/assets/includedreamers.jpg",
        github: "", // optional github link
        demo: "", // optional live link 
    },
]

function Achievements() {
    return (
        <section id="achievements">
            <h2 className="text-zinc-900 text-xl md:text-2xl font-semibold leading-relaxed mb-2">Achievements</h2>
            {/* project cards */}
            <div className="grid grid-cols-2 gap-5 mx-auto">
                {achievements.map((event, index) => 
                    <div key={index} className="backdrop-blur-lg border border-black/10 rounded-2xl p-6 shadow-xl space-y-4 hover:shadow-purple-300/20 transition-all">
                        
                        {/* event title*/}
                        <h3 className="text-zinc-900 text-base md:text-lg font-semibold leading-tight text-center">{event.name}</h3>

                        {/* event status */}
                        <p>Placed: {event.status}</p>

                        <Image src={event.picture} alt="Project Picture" width={250} height={31}></Image>
                        
                        {/* event description*/}
                        <p className="text-zinc-900">{event.description}</p>

                        {/* tech stack */}
                        <div className="flex flex-wrap gap-1.5">
                            {event.tech.map((tech, index) => (
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

export default Achievements;