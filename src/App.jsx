import { useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { prevLocHook } from "./components/prevLocHook";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css'

function App() {
  const location = useLocation();
  const prevLocation = prevLocHook();
  console.log(prevLocation);
  console.log(location);

  const ROUTES = [
    {path: "/", fromRightElement: <Home fromRight="true"/>, fromLeftElement: <Home />},
    {path: "/about", fromRightElement: <About fromRight="true"/>, fromLeftElement: <About />},
    {path: "/career", fromRightElement: <Career fromRight="true"/>, fromLeftElement: <Career />},
    {path: "/education", fromRightElement: <Education fromRight="true"/>, fromLeftElement: <Education />},
    {path: "/projects", fromRightElement: <Projects fromRight="true"/>, fromLeftElement: <Projects />},
    {path: "/certificates", fromRightElement: <Certificates fromRight="true"/>, fromLeftElement: <Certificates />},
  ]
  const prevIndex = ROUTES.findIndex(r => r.path === prevLocation);
  const currIndex = ROUTES.findIndex(r => r.path === location.pathname);

  const fromRight = currIndex < prevIndex;
  console.log(fromRight);

  return (
    <>
      <NavBar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {ROUTES.map((item,index) => {
            return <Route path={item.path} element={fromRight ? item.fromRightElement : item.fromLeftElement} />
          })}
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  )
}

export default App
