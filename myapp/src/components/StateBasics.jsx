import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname, setFname] = useState()
    
    const handleinput = (e) => {
        setFname(e.target.value)
        console.log(fname)
    }
    var [val, setVal] = useState()
    const handleval = () => {
        setVal(fname)
        
    }


  return (
      <div>
          <Typography variant='h5'>Welcome {val}</Typography>
          <TextField variant="outlined" onChange={handleinput} /><br /><br />
          <Button onClick={handleval} variant='contained'>Submit</Button>
        
    </div>
  )
}

export default StateBasics