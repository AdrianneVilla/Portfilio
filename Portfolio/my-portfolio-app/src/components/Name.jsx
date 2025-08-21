import React from "react";
import Buttons from "./Buttons";
import BorderButtons from "./BorderButtons";

export default function Name(){
  return (
  <>
    <div className="w-fit h-full mt-40 content-center p-10 pl-30">
      <div className="flex flex-wrap h-fit justify-left">
        <span className="text-2xl font-bold">I'M
          <span className="font-bold p-4 text-5xl text-yellow-500 uppercase">
            Adrianne L. Villa
          </span>
        </span>
      </div>
      <div className="text-left flex flex-wrap justify-start">
        <h2 className="">
       <span className="font-bold text-xl mt-2 relative w-[fit-content] before:absolute before:inset-0 before:animate-typewriter before:bg-[#242423]
       after:absolute after:inset-0 after:w-[0.12em] after:animate-caret after:bg-white ">
        UI/UX Designer
        <span className="p-4">|</span>
        Front-End Developer
       </span>
       </h2>
       </div>
       <div className="w-130 h-20 mt-10">
         <p className="text-left text-xl font-light">
            Passionate about designing and building complex, interactive, responsive, fun, and creative projects.
         </p>
       </div>

       <div className="flex flex-wrap gap-5 mt-5">
          <Buttons buttonsName={"Learn More"}/>
          <BorderButtons buttonsName={"Download CV"}/>
       </div>
    </div>
  </>
  );
}