import { Table, TableCell, TableContainer, TableRow,TableHead, TableBody } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Mapping = () => {
    var [names, setNames] = useState(
        [
            { "sname": "Adhila", "age": 20 },
            { "sname": "Nesrin", "age": 21 },
            { "sname": "Krishna", "age": 23 },
            { "sname": "Haripriya", "age": 25 }
        ]
    )
  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {names.map((val,i) => {
                          return (
                              <TableRow>
                                  <TableCell key={i}>{val.sname}</TableCell>
                                  <TableCell key={i}>{val.age}</TableCell>
                              </TableRow>
                              
                          )
                      })}
                      
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default Mapping