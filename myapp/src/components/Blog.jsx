import { Table, TableCell, TableContainer, TableRow, TableHead, TableBody } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Blog = () => {
    var [user, setUser] = useState([])
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response.data)
            setUser(response.data)

        })
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Title</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((val, i) => {
                            return (
                                <TableRow>
                                    <TableCell key={i}>{val.id}</TableCell>
                                    <TableCell key={i}>{val.title}</TableCell>
                                </TableRow>

                            )
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Blog