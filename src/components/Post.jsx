import React from 'react';
import { 
    Avatar, 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    CardMedia, 
    Checkbox, 
    IconButton, 
    Typography 
} from '@mui/material';
  
import { 
    Favorite, 
    MoreVert, 
    Share, 
    FavoriteBorder 
} from '@mui/icons-material';

  

const Post = () => {
  return (
    <Card sx={{m: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/10055905/pexels-photo-10055905.jpeg?cs=srgb&dl=pexels-boris-hamer-10055905.jpg&fm=jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post