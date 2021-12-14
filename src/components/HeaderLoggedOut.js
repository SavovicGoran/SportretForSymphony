import React, { useState } from "react"
import Axios from "axios"

function HeaderLoggedOut(props) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await Axios.post("https://backend.sportret.com/api/auth/login", { email, password })
      if (res.data) {
        console.log(res.data)
        localStorage.setItem("sportretToken", res.data.token)
        props.setLoggedIn(true)
      } else {
        console.log("Incorect email/password")
      }
    } catch (e) {
      console.log("There was a login problem")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
        <div className="row align-items-center">
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input onChange={(e) => setEmail(e.target.value)} name="email" className="form-control form-control-sm input-dark" type="text" placeholder="Email" autoComplete="off" />
          </div>
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input onChange={(e) => setPassword(e.target.value)} name="password" className="form-control form-control-sm input-dark" type="password" placeholder="Password" />
          </div>
          <div className="col-md-auto">
            <button className="btn btn-success btn-sm">Sign In</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default HeaderLoggedOut
