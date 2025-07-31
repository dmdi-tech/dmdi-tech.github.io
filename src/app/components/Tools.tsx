import * as React from "react";

// list of cards
const tools = [
    {
        skills:["HTML", "CSS", "JS", "REACT", "NEXT JS", "TAILWIND", "PYTHON", "JAVA", "SQLITE", "DOCKER", "FASTAPI", "GIT"]
    }
]

function Tools() {
    return(
        <section>
            <h2 className="text-zinc-900 text-xl md:text-2xl font-semibold leading-relaxed">Tools</h2>
            <p className="text-shadow-zinc-900 text-base font-normal leading-relaxed space-y-4 mb-2">Here are some of the languages/tools I love to use.</p>
                        
            <div className="flex items-center justify-center">
                <div className="">
                    <div className="flex flex-wrap gap-1.5">
                        {tools.map((toolList) => 
                            toolList.skills.map((skill, index) => (
                                <span key={index} className="px-2.5 py-1 bg-purple-200 border 
                                border-zinc-500/30 text-zinc-800 rounded-md font-bold">{skill}</span>
                            ))
                        )}                  
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tools;