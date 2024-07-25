import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    
  return (
      <div>
          <h1>SignUp</h1>
          <input type="text" placeholder='name' /><br /><br />
          <input type="text" placeholder='age' /><br /><br />
          <input type="email" placeholder='email' /><br /><br />
          <input type="text" placeholder='username' />
          <br /><br />
          <input type="password" placeholder='password' /><br /><br />
          <Link to='/login'><input type="submit" value='submit' /></Link>
    </div>
  )
}

export default Signup