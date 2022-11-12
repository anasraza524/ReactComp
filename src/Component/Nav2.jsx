import { Mail,DragHandle,
     Notifications, Pets, 
     ModeNight,Home,Article,
     AccountBox,Settings,Group,
     Person,Storefront,Logout
    } from "@mui/icons-material";
    import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
    import LogoutIcon from '@mui/icons-material/Logout';
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

  import { getAuth,signOut } from "firebase/auth";

  import { Link } from "react-router-dom";

  import { useState } from "react";
  import * as React from 'react';
import { color } from "@chakra-ui/react";


  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    backgroundColor:"skyblue",
    justifyContent: "space-between",
    // [Toolbar.breakpoints.up("sm")]: {
    //     justifyContent: "center",
    //   },
  });

  const LinkPage = styled(Link)({
    textDecoration:'none',
    color:'white',
    
    
   });
  const TabPage = styled(Tab)({
   fontWeight:'bolder',
   fontSize:'16px',
   color:'#FFFFFF',
   
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
    const logout = ()=>{
      const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
    }
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
                  <LinkPage to="/">
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                <Home /> 
              </ListItemIcon>
              <ListItemText primary="Dashnoard" />
            </ListItemButton>
          </ListItem></LinkPage>
          <LinkPage to="/StudentDetail">
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
               <Article /> 
              </ListItemIcon>
              <ListItemText primary="Student Detail" />
            </ListItemButton>
          </ListItem></LinkPage>
          <LinkPage to="/MarkAttend">
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
               <Group />
              </ListItemIcon>
              <ListItemText primary="Mark Attendance" />
            </ListItemButton>
          </ListItem></LinkPage>
          
          <Divider/>
          <ListItem disablePadding>
            <ListItemButton component="a" >
              <ListItemIcon>
                 <Logout/>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
         
        </List></Box>
            </Drawer>

        <Box sx={{justifyContent:{xs:'center',sm: "left",lg:'left'},
    alignItems:{xs:"center"}
    }}>
        <EscalatorWarningIcon sx={{ display: { xs: "none", sm: "block",lg:'block' } }} /> 
          <Typography  variant="h6"
           sx={{ 
           display: { xs: "" } }}>
            S M I T
          </Typography>
        </Box>
          {/* <Pets sx={{ display: { xs: "block", sm: "none" } }} /> */}
          {/* <Search>
            <InputBase placeholder="search..." />
          </Search> */}
          <Box sx={{ fontWeight:'20px', display:{xs:'none',lg:'block',sm:"block"} }}>
         
          
          {/* // value={value} onChange={handleChange} 
          centered */}
          

 

 
 <LinkPage  to="/" ><TabPage label="Dashboard" /></LinkPage>
 <LinkPage  to="/StudentDetail" ><TabPage label="StudentDetail" /></LinkPage>
 <LinkPage  to="/MarkAttend" ><TabPage label="MarkAttendnace" /></LinkPage>
{/* <TabPage component="a" to="/" label="Home"><Link  to="/">Home</Link></TabPage>
<TabPage component="a" to="About" label="About"><Link to="About">About</Link></TabPage> */}





    </Box>
    
          <Icons>
            
          <LogoutIcon onClick={logout}/>
            <Avatar
              sx={{ width: 30, height: 30 }}
             
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
          
      </AppBar>
    );
  };
  
  export default Navbar2;


  