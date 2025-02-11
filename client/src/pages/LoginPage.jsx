import React from 'react'
import "../styles/login.css"

const LoginPage = () => {
  return (
    <div>
      <div className="login">
      <div className="login_content">
      <p className='textp'>Login Now</p>
        <form className="login_content_form">
          <input
            type="email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit">LOG IN</button>
        </form>
        <a href="/register">Don't have an account? Sign In Here</a>
      </div>
    </div>
    </div>
  )
}

export default LoginPage