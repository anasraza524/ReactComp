import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';

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

  const Span = styled(span)({
    fontWeight:'bold',
    fontSize:'16px',
   
    
   });
  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
   

  }));
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    backgroundColor:"grey",
    textAlign: 'left',
   
    color: theme.palette.text.secondary,
  }));
const StudentDetail = () => {
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null)
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);   };
      const [selectedImage, setSelectedImage] = useState(null);

      const [imageUrl, setImageUrl] = useState(null);
    
      useEffect(() => {
        if (selectedImage) {
          setImageUrl(URL.createObjectURL(selectedImage));
        }
      }, [selectedImage]);
 
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
     {imageUrl && selectedImage && (
                <Box mt={2}
                  m={3}
                >

                  <img
                  style={{borderRadius:'100px'}}
                  src={imageUrl} alt={selectedImage.name} height="150px" width="150" />
                </Box>
              )}
      <TextField type='text' id="filled-basic" label=" Full Name" variant="filled" />
      <TextField type='text' id="filled-basic" label="Father Name" variant="filled" /><br />
      <TextField type='Number' id="filled-basic" label="Roll Number" variant="filled" />
      <TextField type='Number' id="filled-basic" label="Contact Number" variant="filled" /><br />
      <TextField type='Number' id="filled-basic" label="CNIC Number" variant="filled" />
      <TextField type='text' id="filled-basic" label="Course Name" variant="filled" /><br />
      

      <input
                    id='select-image'
                    type="file"

                    name='postImage'
                    onChange={(e) => {
                      setFile(e.currentTarget.files[0])
                      setSelectedImage(e.target.files[0])
                    }}

                    style={{ display: 'none' }}


                  />
                  <Div>
                    Profile Photo
                    <label htmlFor="select-image">

< AddPhotoAlternateIcon style={{ paddingLeft: "5px", fontSize: "25px", color: 'green' }} />

</label>
                  </Div>  
                 <br />


    <Button  fullWidth
      variant='contained' type="submit">Submit</Button>
    </Box>
        </DialogContent>
        <DialogActions>
        
        </DialogActions>
      </Dialog>


      <Box sx={{ width: '100%' }}>
      <Stack spacing={3}>
        <Item>
         <span>anasd</span>
         <span>anasd</span>
        </Item>
      
      </Stack>
    </Box>

    </div>
  )
}

export default StudentDetail