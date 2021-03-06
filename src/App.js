import React from "react";
// import logo from "../assets/logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import "../styles/css/custom.css";
// import "../styles/css/bootstrap.min.css";

// import './'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import IndexPage from "./pages/IndexPage";
import RegForm from "./components/layout/RegFrom"

function IndexPageRender() {
  return <IndexPage />;
}

function App() {
  return (
    <Router>
      <div>
        <header>
          <Header />
          <RegForm />

        </header>
        <Route path="/" component={IndexPageRender} />
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
