import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { Mail, Notifications, Pets,Icon } from "@mui/icons-material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';





import {
    Button, Divider,
        TextareaAutosize, TextField,
         Stack, Paper, styled,
         Dialog,DialogActions,DialogContent
       ,DialogContentText,DialogTitle
       ,ListItemButton, ListItemIcon, Tooltip
       , Typography, IconButton, Box, Avatar
       }
  from "@mui/material"
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const ClassCreate = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
  return (
    <div > 
  <Button variant="outlined" onClick={handleClickOpen}>
  Create Class
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        
        </DialogTitle>
        <DialogContent>
        <Box
      component="form"
      sx={{
       
       
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      
    >
     
      <TextField type='time' id="filled-basic" label=" Class timings" variant="filled" />
      <TextField type='text' id="filled-basic" label="Schedule of classes" variant="filled" /><br />
      <TextField type='text' id="filled-basic" label="Teacher’s name" variant="filled" />
      <TextField type='text' id="filled-basic" label="Section name" variant="filled" /><br />
      <TextField type='text' id="filled-basic" label="Course Name" variant="filled" />
      <TextField type='Number' id="filled-basic" label="Batch Number" variant="filled" /><br />


    <Button  fullWidth
      variant='contained' type="submit">Submit</Button>
    </Box>
        </DialogContent>
        <DialogActions>
        
        </DialogActions>
      </Dialog>
  

      <Card sx={{ maxWidth: 345 }}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit Student Detail</Button>
       
      </CardActions>
    </Card>
  </div>
  )
}

export default ClassCreate