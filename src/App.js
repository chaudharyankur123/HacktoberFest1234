import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Cart from './Pages/Cart/Cart';
import Account from './Pages/AccountPage/Account';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Homepage/Home';
import Navbar from './Components/Navbar/Navbar';
import Products from './Pages/Products/Products';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<Products/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/account/:id' element={<Account/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    <Footer/>   
    </div>
  );
}

export default App;
