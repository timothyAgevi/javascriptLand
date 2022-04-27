import './App.css';
import React from "react"

import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Main from "./components/Main"
// Scrimba/ReactBasics/info-site/src/Main.js

function App() {
  return (
      <div>
          <Navbar/>
          <Main/>
          <Footer />
      </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"))

export default App;
