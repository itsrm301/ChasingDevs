import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddLinkIcon from '@mui/icons-material/AddLink';
import SvgIcon from '@mui/material/SvgIcon'
import "./MultiActionCard.css";

export default function MultiActionAreaCard({title , description,img,link}) {
  return (
    <div className='card'>
    <Card sx={{ maxWidth: 345 }} className="card" >
      <a href={link} target="blank">
      <CardActionArea>
        <CardMedia
        className='card_media'
          component="img"
          height="200px"
          image={img}
          alt="green iguana"
        />
        {/* icon to insert link later on */}
        <AddLinkIcon/>      
        
        <CardContent>
          <Typography style={{color:"black"}} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{minWidth:0}}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <a href={link} target="blank">
          <button type="button" class="btn btn-primary">
          NOTES
        </button>
          </a>
      </CardActions>
        </a>
    </Card>
    </div>
  );
}
