import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
         <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/products/:id' Component={Product} />
        <Route exact path='/about' Component={About}/>
        <Route exact path='/contact' Component={Contact}/>
        <Route exact path='/cart' Component={Cart}/>
        <Route exact path='/checkout' Component={CheckOut}/>

      </Routes>
    </div>
  );
}

export default App;
