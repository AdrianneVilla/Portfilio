import Buttons from "./Buttons";
export default function HeaderNav(){
  return (
    <div>
      <ul className="flex flex-wrap gap-15 w-full uppercase text-center justify-center items-center-safe">
        <li>About Me</li>
        <li>Projects</li>
        <li>Certificates</li>
        <li>Contacts</li>
        <li>
          <Buttons buttonsName="Email Me"/>
          </li>
      </ul>
    </div>
  );
}


