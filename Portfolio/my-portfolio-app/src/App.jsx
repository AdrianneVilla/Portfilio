
import './App.css'
import HeaderNav from './components/HeaderNav';
import Name from './components/Name';

function App() {
  
  return (
      <div className='text-white' >
        <header className='fixed bg-gray w-full bg-blend-color'>
          <HeaderNav />
        </header>
        <div className='flex flex-wrap  w-fit h-fit'>
          <Name />
        </div>
        <div>
  
        </div>
      </div>
      );
}

export default App;
