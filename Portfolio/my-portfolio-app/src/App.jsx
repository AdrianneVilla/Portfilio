
import './App.css'
import HeaderNav from './components/HeaderNav';
import Name from './components/Name';
function App() {
  
  return (
      <div className='text-white' >
        <header className=''>
          <HeaderNav />
        </header>
        <div className='flex flex-wrap  w-screen h-200 ml-0 mt-5'>
          <Name/>
        </div>

      </div>
      );
}

export default App;
