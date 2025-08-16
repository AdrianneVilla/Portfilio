
import './App.css'
import HeaderNav from './components/HeaderNav';
import Name from './components/Name';
import AboutMe from './components/AboutMe';
function App() {
  
  return (
      <div className='text-white' >
        <header className='sticky'>
          <HeaderNav />
        </header>
        <div className='flex flex-wrap  w-screen h-225 ml-0 mt-5'>
          <Name />
        </div>
        <div>
          <AboutMe />
        </div>
      </div>
      );
}

export default App;
