import * as React from "react";

function Experience() {
  const experience = [
    {
      title: "AI Agent Builder",
      company: "NeuralSeek",
      date: "July 2025 – Present",
      description:
        "Designed, built, and deployed functional AI agents aligned with real-world business needs.",
    },
    {
      title: "Fellow",
      company: "Keploy",
      date: "June 2025 – July 2025",
      description:
        "Selected as one of 1,000 from over 18.5k applicants worldwide to contribute to open-source API testing tools.",
    },
  ];

  return (
    <section className="-mb-5" id="experience">
        <h2 className="text-zinc-900 text-xl md:text-2xl font-semibold leading-relaxed mb-2">Experience</h2>

        <div className="ml-1 relative border-l-3 border-zinc-300 pl-6">
            {experience.map((event, index) => (
            <div key={index} className="relative">
                {/* dot */}
                <div className="absolute -left-[35px] top-1 w-5 h-5 bg-zinc-900 rounded-full border-4 border-white"></div>

                {/* content */}
                <div className="bg-white p-4 rounded-lg border-zinc-700 shadow-sm mb-5">
                    <h3 className="text-lg font-semibold text-zinc-900">{event.title}</h3>

                    <p className="text-sm text-zinc-500 font-medium">{event.company} • {event.date}</p>
                    
                    <p className="mt-1 text-zinc-700 leading-relaxed">{event.description}</p>
                </div>
            </div>
            ))}
        </div>
    </section>
  );
}

export default Experience;
