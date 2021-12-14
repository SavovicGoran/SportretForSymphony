import React from "react"
import axios from "axios"

function HeaderLoggedIn(props) {
  const Token = localStorage.getItem("sportretToken")
  const apiUrl = "https://backend.sportret.com/api/srbija"

  const authAxios = axios.create({
    baseUrl: apiUrl,
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  })
  async function getCountry(e) {
    e.preventDefault()

    try {
      const res = await authAxios.get(apiUrl)
      if (res.data) {
        console.log(res.data.data)
      } else {
        console.log("Incorect something")
      }
    } catch (e) {}
  }
  function handleLogout() {
    props.setLoggedIn(false)
    localStorage.removeItem("sportretToken")
  }
  return (
    <div className="flex-row my-3 my-md-0">
      <a href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      {/* <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span> */}

      {/* <a className="btn btn-sm btn-success mr-2" href="#">
        Create Post
      </a> */}
      <button onClick={getCountry} className="btn btn-sm btn-success mr-2">
        Serbia
      </button>
      <button className="btn btn-sm btn-success mr-2">Bosnia</button>
      <button className="btn btn-sm btn-success mr-2">Croatia</button>
      <button className="btn btn-sm btn-success mr-2">Montenegro</button>
      <button className="btn btn-sm btn-success mr-2">Slovenia</button>

      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  )
}

export default HeaderLoggedIn
