import Buttons from "./Buttons";
export default function HeaderNav(){
  return (
    <div>
      <div className="flex flex-wrap gap-20 w-full uppercase  justify-center items-center-safe">
        <ul className=" flex flex-wrap gap-20">
        <li>About Me</li>
        <li>Projects</li>
        <li>Certificates</li>
        <li>Contacts</li>
        <li>Language & Framework</li>
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


