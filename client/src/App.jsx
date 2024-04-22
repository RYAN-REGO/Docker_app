import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create" element={<CreatePost/>} />
    </Routes>
    </div>
  )
}

export default App
