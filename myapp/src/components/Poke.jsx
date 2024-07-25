import React from 'react'
import { Card,Grid} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

const Poke = () => {
    var [pokemon, setPokemon] = useState([])
    useEffect(() => {
        axios.get("https://dummyapi.online/api/pokemon")
            .then((response) => {
                console.log(response)
                setPokemon(response.data)
            })
        
    },[])
   
  return (
      <div>
          <Grid container spacing={2}>
              {pokemon.map((val) => {
                  return (
                      <Grid item xs={12} sm={6} md={4}>
                          <Card sx={{ maxWidth: 345 }}>
                              <CardMedia
                                  sx={{ height: 140 }}
                                  image={val.image_url}
                                  title="green iguana"
                              />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="div">
                                      {val.pokemon}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                      {val.type}
                                  </Typography>
                              </CardContent>
                              <CardActions>
                                  <Button size="small">Share</Button>
                                  <Button size="small">Learn More</Button>
                              </CardActions>
                          </Card>
                      </Grid>
                      
                  )
              })}
              
          </Grid>
              </div>
         
  )
}

export default Poke