import * as React from "react";

function About() {
    return (
        <section id="about" >
            <div>
                <h2 className="text-zinc-900 text-xl md:text-2xl font-semibold
                leading-relaxed">About Me</h2>
                <div className="text-shadow-zinc-900 text-base font-normal leading-relaxed space-y-4">
                    <p> I&apos;m Diana, a dedicated Backend developer. 
                        I recently graduated from Meredith College in Raleigh, NC with a degree
                        in Computer Science and Professional Spanish.
                        I made this portfolio using React. It&apos;s an attempt to understand how to 
                        build webpages while using different tech stacks. Previously, I only used 
                        HTML, CSS and basic JS. 
                    </p>

                    <p> When I&apos;m not coding, I enjoy cooking new dishes, listening to music, or playing a few video games
                        here and there. I also love trinkets and anything 2000s. Whether I&apos;m debugging or designing, I bring curiosity, resourcefulness, and a touch of nostalgia to everything I do.
                    </p>

                    <p>
                        Enjoy your stay!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;