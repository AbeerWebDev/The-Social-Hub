import { Mail } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";
import { Coffee } from "@mui/icons-material";
import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import { useState } from "react";

// import { ReactComponent as Coffee } from './coffee.svg';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: 'flex'
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: 'none'
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          THE SOCIAL HUB
        </Typography>
        <Coffee sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e)=> setOpen(true)}
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?cs=srgb&dl=pexels-vietnam-photographer-11293709.jpg&fm=jpg"
          />
        </Icons>

        <UserBox onClick={(e)=> setOpen(true)}>
        <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?cs=srgb&dl=pexels-vietnam-photographer-11293709.jpg&fm=jpg"
          />
          <Typography>Christophe</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
