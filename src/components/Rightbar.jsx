import {
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

import Box from "@mui/material/Box";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} padding={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online friends
        </Typography>

        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?cs=srgb&dl=pexels-elias-de-carvalho-1375849.jpg&fm=jpg"
          />
          <Avatar alt="Travis Howard" src="" />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/616376/pexels-photo-616376.jpeg?cs=srgb&dl=pexels-marx-ilagan-616376.jpg&fm=jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/189857/pexels-photo-189857.jpeg?cs=srgb&dl=pexels-jessica-lewis-creative-189857.jpg&fm=jpg"
          />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/725463/pexels-photo-725463.jpeg?cs=srgb&dl=pexels-nripen-kumar-roy-725463.jpg&fm=jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/887349/pexels-photo-887349.jpeg?cs=srgb&dl=pexels-designecologist-887349.jpg&fm=jpg"
          />
          <Avatar alt="Trevor Henderson" src="" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2709386/pexels-photo-2709386.jpeg?cs=srgb&dl=pexels-ike-louie-natividad-2709386.jpg&fm=jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1028927/pexels-photo-1028927.jpeg?cs=srgb&dl=pexels-kate-photo-1028927.jpg&fm=jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
