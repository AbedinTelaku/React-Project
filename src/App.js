import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import DogCeoPage from "./Pages/DogCeoPage";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/dogs" element={<DogCeoPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;