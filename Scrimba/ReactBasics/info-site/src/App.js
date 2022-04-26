// import logo from './logo.svg';
import './App.css';
import React from "react"
// import Navbar from "./components/Navbar"
// import Main from "./components/Main"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "./Components/Footer"

function Footer() {
  return (
      <footer>
          <small>© 2021 Ziroll development. All rights reserved.</small>
      </footer>
  )
}



function Page() {
  return (
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}

function App(){
  return(
    <Page/>
  )
}
ReactDOM.render(<Page />, document.getElementById("root"))

export default App;
