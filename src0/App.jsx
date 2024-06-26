import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import Loan from './pages/loan/Loan';
import Policies from './pages/privacypolicy/Policies';
import Soil from './pages/soil/Soil';
import Weather from './pages/weather/Weather'
import Seller from './pages/seller/Seller'
import Cod from './pages/cod/Cod'
import Tsh from './pages/tshirt/Tsh';
import Hoodies  from './pages/hoodie/Hoodies'
import Faq from './pages/Faq/faq'
import Info from './pages/info/Info'
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/deliveri-info" element={<Info />} />
          <Route path="/hoodie" element={<Hoodies />} />
          <Route path="/term-condition" element={<Loan />} />
          <Route path="/tshirt" element={<Tsh />} />
          <Route path="/privacypolicy" element={<Policies />} />
          <Route path="/returnpolicy" element={<Soil />} />
          <Route path="/contact" element={<Weather />} />
          <Route path="/cod" element={<Cod />} />
          <Route path="/about" element={<Seller />} />
          <Route path="/order" element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/productinfo/:id' element={<ProductInfo/>} />
          <Route path='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path='/updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>

  )
}

export default App 

// user 

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin 

const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.user.email === 'deshmukhh517@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}