import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <div className='App-header'>
      <Header />
      </div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
