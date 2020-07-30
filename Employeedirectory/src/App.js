import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper'
import Home from "./pages/Home.js"


function App() {
  return (
    <div>
      <Header/>
      <Wrapper>
        <Home/>
      </Wrapper>
      <Footer />
    </div>

  )
}

export default App;
