import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Greet = () => {
    var [val, setValue] = useState()
    const creact = () => {
        setValue("React")
    }
    const cangular = () => {
        setValue("Angular")
    }
    const cview = () => {
        setValue("View")
    }
    // useEffect(()=>{function calling},[])  syntax of useeffect

    useEffect(() => { 
        cview();
    },[])


  return (
      <div>
          <Typography variant="h5">Welcome {val}</Typography>
          <Button variant="contained" color='success' onClick={creact}>React</Button>&nbsp;&nbsp;&nbsp;
          <Button variant="contained"  color='primary' onClick={cangular}>Angular</Button>&nbsp;&nbsp;&nbsp;
          <Button variant="contained" color='error' onClick={cview}>View</Button>&nbsp;&nbsp;&nbsp;
    </div>
  )
}

export default Greet