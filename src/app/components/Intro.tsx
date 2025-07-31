import * as React from "react";
import Image from 'next/image'

function Intro() {
    return (
        <div id="home" >
            <div >
                {/* avatar */}
                <div> 
                    <Image src="/assets/avatar.jpg" alt="avatar" width={500} height={500} className="w-34 h-34 rounded-full object-cover" />
                </div>

                {/* intro */}
                <div className="flex flex-col gap-3 text-left mt-4">
                    <h1 className="text-zinc-900 text-3xl md:text-5xl lg:text-5xl font-semibold leading-tight lg:leading-[1.15]">
                        Hey, I&apos;m Diana 
                        <br></br>
                        Developer and Designer 
                    </h1>
                    <p className="text-zinc-900 text-base md:text-lg font-normal leading-relaxed">
                        Meredith College Alumna
                        <br></br>
                        Raleigh, NC
                    </p>
                </div>

                {/* contact */}
                <div className="flex gap-3 mt-4">
                    <a href="https://github.com/dmdi-tech" target="_blank">
                        <Image src="/assets/github.gif" width={500} height={500} alt="github_button" className="w-[88px] h-[31px]" />
                    </a>

                    <a href="https://www.linkedin.com/in/dianamedinamoreno/" target="_blank">
                        <Image src="/assets/linkedin.gif" width={500} height={500} alt="github_button" className="w-[88px] h-[31px]" />
                    </a>
                </div>                
            </div>
        </div>
    );
}

export default Intro;