import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { Mail, Notifications, Pets,Icon } from "@mui/icons-material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';

import { initializeApp } from "firebase/app";
import { getFirestore,where } from "firebase/firestore";
 import { getAuth } from "firebase/auth";
import {
  query, collection,
  addDoc, getDocs, doc, onSnapshot
  , serverTimestamp, orderBy, limit
  , deleteDoc, updateDoc
} from "firebase/firestore";
import moment from 'moment';
import axios from 'axios';
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
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));
const ClassCreate = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [file, setFile] = useState(null)
    const [classTimimg, setclassTimimg] = useState("")
    const [schduleOfClass, setschduleOfClass] = useState("")
    const [teacherName, setteacherName] = useState("")
    const [courseName, setcourseName] = useState("")
    const [batchNumber, setbatchNumber] = useState("")
    const [sectionName, setsectionName] = useState("")
    const [CreatedClass, setCreatedClass] = useState([])   
    const db = getFirestore();
    const auth = getAuth();
    useEffect(() => {
  
     
      
  // unsubsribe close the data when user leave  the page
      let unsubscribe = null;
     
  
  // real time function get data from firebse/firestore Post array on page load
      const getRealTimeData = async () => {
       
        const q = query(collection(db, "CreatedClass"),
        where("user", "==", auth.currentUser.email)
        );
        unsubscribe = onSnapshot(q, (querySnapshot) => {
          const CreatedClass = [];
          querySnapshot.forEach((doc) => {
            let data = doc.data()
            data.id = doc.id
            CreatedClass.push(data)
            // Posts.push({...doc.data(),id: doc.id });
            // Posts.push(doc.data());
          });
          console.log("CreatedClass: ", CreatedClass);
          setCreatedClass(CreatedClass)
        });
      }
      getRealTimeData()
  
  
      // unsubscribe clean up function
      return () => {
        console.log("Clean up funtion ");
        unsubscribe()
      }
  
    }, [])


console.log(              classTimimg ,
  
)

    const savePost = async () => {

      // console.log("postText", postText);
    
      handleClose()
  
      // set data to cloudnary (storage bucket only for image) 
    
  
    
  
        
  // set text , date to firebase/firestore but set image from cloudnary to firebase/firestore
          try {
            const docRef = await addDoc(collection(db, "CreatedClass"), {
              classTimimg:classTimimg ,
              schduleOfClass:schduleOfClass ,
              teacherName:teacherName ,
              sectionName:sectionName ,
              courseName:courseName,
              batchNumber: batchNumber,
              user: auth.currentUser.email,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
           
          }
 
      console.log('file', file)
  
      
  
    }
    const deletePost = async (postId) => {
      handleClose()
      await deleteDoc(doc(db, "CreatedClass", postId));
  
                    // console.log('postId', postId)
    }
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
  
     
      sx={{
       
       
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      
    >
     
      <TextField
        onChange={(e) => {
          setclassTimimg(e.target.value)
        }}
       type='text' id="filled-basic" label=" Class timings" variant="filled" />
      
      <TextField
onChange={(e) => {
  setschduleOfClass(e.target.value)
}}
       type='text' id="filled-basic" label="Schedule of classes" variant="filled" /><br />
      <TextField
      onChange={(e) => {
        setteacherName(e.target.value)
      }}
       type='text' id="filled-basic" label="Teacher’s name" variant="filled" />
      <TextField
      onChange={(e) => {
        setsectionName(e.target.value)
      }}
       type='text' id="filled-basic" label="Section name" variant="filled" /><br />
      <TextField
      onChange={(e) => {
        setcourseName(e.target.value)
      }}
       type='text' id="filled-basic" label="Course Name" variant="filled" />
      <TextField
      onChange={(e) => {
        setbatchNumber(e.target.value)
      }}
       type='Number' id="filled-basic" label="Batch Number" variant="filled" /><br />


    <Button  
    onClick={savePost}
      variant='contained' type="submit">Submit</Button>
    </Box>
        </DialogContent>
        <DialogActions>
        
        </DialogActions>
      </Dialog>
  

      {
       CreatedClass.map((eachPost, i) => (

          
      <Stack 
      
      flex={2}
      m={10}
      key={i}
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      sx={{ maxWidth: 400,borderRadius:"20px", }}
      >  
  <Card sx={{ maxWidth: 400, }}>
    
    <CardContent>
      <Typography gutterBottom variant="h4" component="div">
<span>{eachPost.teacherName}</span> <br />

      </Typography>
      <Typography variant="h6" >
      Class Timimg:<span>{eachPost.classTimimg}</span><br />
      Section Name:  <span>{eachPost.sectionName}</span><br />
      Schdule Of Class:<span>{eachPost.schduleOfClass}</span><br />
      Course Name: <span> {eachPost.courseName}</span><br />
      BatchNumber: <span> {eachPost.batchNumber}</span><br />
      </Typography>
    </CardContent>
    <CardActions>
     <Link to="StudentDetail"><Button size="small">Edit Student Detail</Button></Link> 
     
    </CardActions>
  </Card> 

</Stack>
))}
  </div>
  )
}

export default ClassCreate