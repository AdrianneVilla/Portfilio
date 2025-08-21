
import './App.css'
import HeaderNav from './components/HeaderNav';
import Name from './components/Name';
import Image from './assets/hero-pic.png'
function App() {
  
  return (
      <div className='text-white' >
        <header className='fixed bg-gray w-full bg-blend-color'>
          <HeaderNav />
        </header>
        <div className='p-10 main-container flex flex-wrap gap-80 justify-center items-center text-center relative  w-full h-fit'>
          <Name />
        <img src={Image} alt="img"  className='h-200'/>
        </div>
        <div>
          
        </div>
      </div>
      );
}

export default App;
