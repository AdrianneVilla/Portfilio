import Buttons from "./Buttons";
export default function HeaderNav(){
  return (
    <div>
      <div className="flex flex-wrap gap-20 w-full uppercase  justify-center items-center-safe">
        <ul className=" flex flex-wrap gap-20">
        <li id="aboutMe">About Me</li>
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


