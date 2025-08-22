import Buttons from "./Buttons";



export default function HeaderNav(){
  return (
    <div className="p-0 m-0">
      <div className="flex flex-wrap gap-20 w-full uppercase sticky h-full  justify-center items-center-safe">
        <ul className=" flex flex-wrap gap-20">
        <li id="aboutMe"><a href ="#AboutMe">About Me</a></li>
        <li id="projects">Projects</li>
        <li id="certificates">Certificates</li>
        <li id="contacts">Contacts</li>
        <li id="languageFramework">Language & Framework</li>
        </ul>
        <div>
          <ul>
           <li>
          <Buttons buttonsName="Email Me"/>
          </li>
          </ul>
        </div>
      </div>
        
       
      
    </div>
  );
  
}



