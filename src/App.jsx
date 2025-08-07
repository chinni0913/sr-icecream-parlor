// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Flavors from './Components/Flavours/Flavors'
import Cart from './Components/Cart/Cart'
import { CartProvider } from './Components/Context/CartContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'
import Payment from './Components/Payment/Payment' 
import ReviewList from './Components/Review/ReviewList'
// import './App.css'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/flavors" element={<Flavors />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/reviews" element={<ReviewList />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </CartProvider>
    </>
  )
}

export default App
