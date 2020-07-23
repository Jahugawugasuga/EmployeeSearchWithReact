import React from "react";
import Button from './components/Button'
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
      <Button/>
      </Wrapper>
      <Footer />
    </div>

  )
}

export default App;
