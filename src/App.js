import logo from './logo.svg';
import './App.css';
import pic from "../src/images/logo.png"
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <header>
      
      <nav className='nav-bar'>
       
      <div className='nav-links'>
      <ul>
        <li><a href=''>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#menu'>Menu</a> </li>
       
      </ul>
      <img src={pic} alt=""/><p>A's COfFEE</p>
      </div>
      </nav>
      </header>

     <Home/>
     <About/>
     <Menu/>

    </div>
  );
}

export default App;
