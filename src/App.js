import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';

function App() {
  
  return (
    <div className="App"> 
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
