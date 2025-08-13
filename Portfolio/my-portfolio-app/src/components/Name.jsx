import React from "react";
import Buttons from "./Buttons";
import BorderButtons from "./BorderButtons";
export default function Name(){
  return (
  <>
    <div className="w-50% h-full content-center p-10 pl-30">
      <div className="flex flex-wrap h-fit justify-left">
        <span className="text-2xl font-bold">I'M
          <span className="font-bold p-4 text-5xl text-yellow-500 uppercase">
            Adrianne L. Villa
          </span>
        </span>
      </div>
      <div className="text-left flex flex-wrap justify-start">
       <span className="font-bold text-l mt-2">
        UI/UX Designer
        <span className="p-4">|</span>
        Front-End Developer
       </span>
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