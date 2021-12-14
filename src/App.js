import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"
import WellcomePage from "./components/WellcomePage"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home"

function App() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("sportretToken")))
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path="/" exact>
          {loggedIn ? <Home /> : <WellcomePage />}
        </Route>
        <Route path="/about-us" exact>
          <About />
        </Route>
        <Route path="/terms" exact>
          <Terms />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
