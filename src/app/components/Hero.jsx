import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import AnnouncementBanner from "./Banner";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[59vw] md:max-w-2xl lg:max-w-[40vw] flex flex-col items-center justify-center">
        

        <div>
        <Link href="/blog"> {/* Replace with your desired URL */}
        <AnnouncementBanner message="why we started Bladex Lab?" />
      </Link>
    </div>
        


          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}


          <TextGenerateEffect
            words="a new cutting edge AI Agency"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />



          <p className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl font-thin">
            your vision, our expertise
          </p>
          <span className="inline-block backdrop-blur-md bg-white/30 text-white-800 font-thin py-2 px-5 rounded-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
          AI Agents | AI Visuals
</span>

          <a href="#about">
            <MagicButton
              title="continue"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;