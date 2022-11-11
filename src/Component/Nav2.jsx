import { Mail,DragHandle,
     Notifications, Pets, 
     ModeNight,Home,Article,
     AccountBox,Settings,Group,
     Person,Storefront,Logout
    } from "@mui/icons-material";
  import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,Switch,
  Drawer,
  Button,
  List,Tab,Tabs,
  ListItem,
  ListItemButton,
  Divider,ListItemIcon,ListItemText
  } from "@mui/material"



  import { Link } from "react-router-dom";

  import { useState } from "react";
  import * as React from 'react';


  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    backgroundColor:"skyblue",
    justifyContent: "space-between",
    // [Toolbar.breakpoints.up("sm")]: {
    //     justifyContent: "center",
    //   },
  });
  const TabPage = styled(Tab)({
   fontWeight:'bold'
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 12px",
    borderRadius: theme.shape.borderRadius,
    width: "15%",
  }));
  
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  const Navbar2 = ({mode,setMode}) => {
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        // setIsOpen((prevState) => !prevState)
        setIsOpen(true)
    }
    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <AppBar position="sticky">

        <StyledToolbar>
        <Button variant="contained" sx={{display:{lg:'none',sm:'none'}}} onClick={toggleDrawer}><DragHandle/></Button>
            <Drawer
                open={isOpen}
                onClose={()=>{
                    setIsOpen(false)
                }}
                direction='left'
                
            >
                <Box sx={{ width:250,textAlign:'center' }}>
                <List>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                <Home /> 
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
               <Article /> 
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
               <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                 <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                 <Person /> 
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                 <Settings /> 
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                 <AccountBox /> 
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                 <Logout/>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                 <ModeNight /> 
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
        </List></Box>
            </Drawer>

        <Box sx={{justifyContent:{xs:'center',sm: "left",lg:'left'},
    alignItems:{xs:"center"}
    }}>
        <Pets sx={{ display: { xs: "none", sm: "block",lg:'block' } }} /> 
          <Typography  variant="h6"
           sx={{ 
           display: { xs: "" } }}>
            LAMA DEV
          </Typography>
        </Box>
          {/* <Pets sx={{ display: { xs: "block", sm: "none" } }} /> */}
          {/* <Search>
            <InputBase placeholder="search..." />
          </Search> */}
          <Box sx={{ fontWeight:'20px', display:{xs:'none',lg:'block',sm:"block"} }}>
          <Tabs
          
          value={value} onChange={handleChange} centered>
  <TabPage label="Home" />
  <TabPage label="About" />
  <TabPage label="More" />
</Tabs>
    </Box>
          
          <Icons>
            
            
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              onClick={(e) => setOpen(true)}
            />
          </Icons>
          {/* <UserBox onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Typography variant="span">John</Typography>
          </UserBox> */}
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    );
  };
  
  export default Navbar2;


  