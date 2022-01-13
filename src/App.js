import React from 'react';

//Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
//Pages
import Home from "./Container/Home/Home";
import About from "./Container/About/About";
import Service from "./Container/Service/Service";
import Contact from "./Container/Contact/Contact";

const App = () => {
  return (
          <Router>
              <Header />
              <Routes>
                  <Route  path={'/'} element={<Home />} />
                  <Route exact path={'/about-us'} element={<About />} />
                  <Route exact path={'/service'} element={<Service />} />
                  <Route exact path={'/contact-us'} element={<Contact />} />
              </Routes>
              <Footer />
          </Router>
  );
};
export default App;