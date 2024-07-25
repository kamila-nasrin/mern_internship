import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [add, setAdd] = useState(0)

    const addfunc = () => {
        setAdd(add+1)  
    }
    const subfunc = () => {
        setAdd(add-1)
    }
    
  return (
      <div>
          <Typography variant='h5'>count {add}</Typography><br /><br />
          <Button variant='contained' value='increment' onClick={addfunc}>Increment</Button>&nbsp;&nbsp;&nbsp;
          <Button variant='contained' value='decrement' onClick={subfunc}>Decrement</Button>
      </div>
  )
}

export default Counter