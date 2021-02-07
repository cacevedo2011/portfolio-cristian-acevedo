import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../../components/Nav";
import Skills from '../../components/Traits';
import Portfolio from "../../components/Portfolio";
import About from "../../components/About";
import Contact from '../../components/Contact';



class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/skills" component={Skills} />
          </div>
      </HashRouter>
    );
  }
}
export default Header;