import React from 'react'
import { Link } from "react-router-dom";
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
const StudentDetail = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
<Button variant="outlined" onClick={handleClickOpen}>
  Add Student
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

    </div>
  )
}

export default StudentDetail