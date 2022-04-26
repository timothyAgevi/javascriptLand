// import logo from './logo.svg';
import './App.css';
import React from "react"
// import Navbar from "./components/Navbar"
// import Main from "./components/Main"
import ReactDOM from "react-dom"

function Header() {
  return (
      <header>
          <nav className="nav">
              <img src="./logo192.png" width="40px"  alt="React Logo" className="nav-logo" />
              <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
          </nav>
      </header>
  )
}

function Footer() {
  return (
      <footer>
          <small>© 2021 Ziroll development. All rights reserved.</small>
      </footer>
  )
}

function MainContent() {
  return (
      <div>
          <h1>Reasons I'm excited to learn React</h1>
          <ol>
              <li>It's a popular library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I'm more likely to get a job as a developer
              if I know React</li>
          </ol>
      </div>
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
