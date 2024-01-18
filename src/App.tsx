import './assets/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Single from './pages/Single';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import { HelmetProvider } from 'react-helmet-async';
import Search from './pages/Search';


function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Index/>}/>
            <Route path="/:productId" element={<Single/>}/>
            <Route path="/category/:category" element={<Categories/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path='*' element={<NotFound/>} />
          </Route>
        </Routes>
        <ToastContainer/>
      </Router>
     </HelmetProvider>
  )
}

export default App
