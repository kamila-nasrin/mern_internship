import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h4' sx={{ flexGrow: 1 }}>Myapp</Typography>&nbsp;&nbsp;&nbsp;
                  <Link to='/sign'><Button variant='contained' color='success' style={{ color: 'black',backgroundColor:'white'}}>SignUp</Button></Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/login'><Button variant='contained' color='success' style={{ color: 'black', backgroundColor: 'white' }}>Login</Button></Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/s'><Button variant='contained' color='success' style={{ color: 'black', backgroundColor: 'white' }}>State</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/c'><Button variant='contained' color='success' style={{ color: 'black', backgroundColor: 'white' }}>Count</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/greet'><Button variant='contained' color='success' style={{ color: 'black', backgroundColor: 'white' }}>Greet</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/mapping'><Button variant='contained' color='success' style={{ color: 'black', backgroundColor: 'white' }}>Mapping</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/api'><Button variant='contained' color='success' style={{ color: 'black', backgroundColor: 'white' }}>Api</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/blog'><Button variant='contained' color='success' style={{ color: 'black', backgroundColor: 'white' }}>Blog</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/poke'><Button variant='contained' color='success' style={{ color: 'black', backgroundColor: 'white' }}>Pokemon</Button></Link>&nbsp;&nbsp;&nbsp;      
        </Toolbar>
          </AppBar>
          <br /><br /><br /><br /><br />
    </div>
  )
}

export default Navbar