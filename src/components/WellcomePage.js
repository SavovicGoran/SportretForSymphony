import React, { useState } from "react"
import axios from "axios"
import Container from "./Container"

function WellcomePage() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirm, setPasswordConfirm] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await axios.post("https://backend.sportret.com/api/auth/register ", { name, email, password, password_confirmation: passwordConfirm })
      console.log("User was created")
      alert("svaka cast domacine")
    } catch (e) {
      console.log("There was an error")
    }
  }
  return (
    <Container wide={true}>
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Hellou There.</h1>
          <p className="lead text-muted">Wellcome to Sportret. A unique sport/social network.</p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input onChange={(e) => setName(e.target.value)} id="username-register" name="name" className="form-control" type="text" placeholder="Pick a username" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input onChange={(e) => setEmail(e.target.value)} id="email-register" name="email" className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input onChange={(e) => setPassword(e.target.value)} id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Repeat Password</small>
              </label>
              <input onChange={(e) => setPasswordConfirm(e.target.value)} id="password-repeat" name="passwordRepeat" className="form-control" type="password" placeholder="Repeat password" />
            </div>
            <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
              Sign up to Sportret
            </button>
          </form>
        </div>
      </div>
    </Container>
  )
}
export default WellcomePage
