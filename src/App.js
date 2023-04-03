import './App.css';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import { useContext, useEffect } from 'react';
import { AuthContext } from './store/Context';
import Firebase from './config/firebase';
function App() {

  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div className='App'>
      <BrowserRouter>
      <div className='App-header'>
        <Header />
      </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={user? <Home/>:<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart></Cart>} />
        </Routes>
      </BrowserRouter>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
