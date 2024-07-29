import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Acomodações from "./components/Acomodações";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import About from "./components/About";
import Packages from './components/Packages';
import Accommodations from './components/Accommodations';

import Breakfast from "./components//Breakfast";
import Contact from "./components//Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu from './components/Menu';
import Menu1 from './components/Menu';
import pousadaImage from "./assets/pousada.jpg"; 
import GlobalStyles from './styles/GlobalStyles';



import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/accommodations" component={Accommodations} />
          <Route path="/packages" component={Packages} />
          <Route path="/contact" component={Contact} />
          <Route path="/breakfast" component={Breakfast} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
