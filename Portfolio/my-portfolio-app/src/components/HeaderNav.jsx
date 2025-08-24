import Buttons from "./Buttons";

export default function HeaderNav(){
  return (
    <div className="p-0 m-0">
      <div className="flex flex-wrap gap-20 w-full uppercase sticky h-full  justify-center items-center-safe">
        <ul className=" flex flex-wrap gap-20">
          <NavItems href="#AboutMe" label= "About Me"/>
          <NavItems href="Projects" label= "Projects"/>
          <NavItems href="#Certificates" label= "Certificates"/>
          <NavItems href="#Contacts" label= "Contacts"/>
          <NavItems href="#FrameworksLanguage" label= "Frameworks and Languages"/>
          <NavItems href="#Feedback" label= "Feedback"/>


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
  
 function NavItems({href, label}){
  return (
    <li className="relative group">
      <a href={href}>
        {label}
      </a>
      <span className="absolute -bottom-1 right-0 w-0 h-1 bg-yellow-500 
        transition-all duration-300 group-hover:w-full"></span>
    </li>
  )
 }

}





