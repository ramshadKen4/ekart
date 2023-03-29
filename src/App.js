import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home/>}/> 
              <Route path="/signup" element={<Signup />}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;
