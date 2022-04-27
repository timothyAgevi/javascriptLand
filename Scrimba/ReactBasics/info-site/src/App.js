// import logo from './logo.svg';
import './App.css';
import React from "react"
// import Navbar from "./components/Navbar"
// import Main from "./components/Main"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Main from "./components/Main"
// Scrimba/ReactBasics/info-site/src/Main.js




function App() {
  return (
      <div>
          <Header />
          <Main/>
          <Footer />
      </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"))

export default App;
