import './App.css'

//components
import HeaderNav from './components/HeaderNav';
import Name from './components/Name';
import AboutMe from './components/AboutMe';


//assets or images
import Image from './assets/hero-pic.png'

function App() {
  
  return (
      <div className='text-white' >
        <header className='fixed bg-gray w-full pt-5 pb-5 z-40 bg-[#242423] '>
          <HeaderNav />
        </header>
        <div className='p-10 main-container flex flex-wrap gap-80 justify-center items-center text-center relative  w-full h-fit'>
          <Name />
        <img src={Image} alt="img"  className='h-200'/>
        </div>
        <div>
          <AboutMe/>
        </div>
      </div>
      );
}

export default App;
