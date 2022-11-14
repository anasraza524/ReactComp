import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

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
import { display } from '@mui/system';


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
   
      const [fullName, setfullName] = useState("")
      const [fatherName, setsfatherName] = useState("")
      const [rollNo, setrollNo] = useState("")
      const [ContactNo, setContactNo] = useState("")
      const [CNICNo, setCNICNo] = useState("")
      const [CourseName, setCourseName] = useState("")
      const [gender, setGender] = useState("")
      const [qualification, setQualification] = useState("")
      const [StudentDetail, setStudentDetail] = useState([])  
      const db = getFirestore();
    const auth = getAuth();
    useEffect(() => {
  
     
      
  // unsubsribe close the data when user leave  the page
      let unsubscribe = null;
     
  
  // real time function get data from firebse/firestore Post array on page load
      const getRealTimeData = async () => {
       
        const q = query(collection(db, "StudentDetail"),
        where("user", "==", auth.currentUser.email)
        );
        unsubscribe = onSnapshot(q, (querySnapshot) => {
          const StudentDetail = [];
          querySnapshot.forEach((doc) => {
            let data = doc.data()
            data.id = doc.id
            StudentDetail.push(data)
            // Posts.push({...doc.data(),id: doc.id });
            // Posts.push(doc.data());
          });
          console.log("StudentDetail: ", StudentDetail);
          setStudentDetail(StudentDetail)
        });
      }
      getRealTimeData()
  
  
      // unsubscribe clean up function
      return () => {
        console.log("Clean up funtion ");
        unsubscribe()
      }
  
    }, [])




    const savePost = async () => {

      // console.log("postText", postText);
    
      handleClose()
  
      // set data to cloudnary (storage bucket only for image) 
    
  
    
  
        
  // set text , date to firebase/firestore but set image from cloudnary to firebase/firestore
          try {
            const docRef = await addDoc(collection(db, "StudentDetail"), {
              fullName:fullName ,
              fatherName: fatherName ,
              rollNo:rollNo ,
              ContactNo:ContactNo ,
              CNICNo:CNICNo,
              CourseName: CourseName,
              gender:gender,
              qualification:qualification,
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
      await deleteDoc(doc(db, "StudentDetail", postId));
  
                    // console.log('postId', postId)
    }
  return (
    <div>
<Button sx={{margin:{xs:'5px',lg:"20px"},
  width:{xs:"100",lg:"400px"},height:'50px'
  ,marginTop:"25px",
marginLeft:{xs:'30%',lg:"30%"}
}} variant="outlined" onClick={handleClickOpen}>
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
      <TextField 
       onChange={(e) => {
        setfullName(e.target.value)
      }}
      type='text' id="filled-basic" label=" Full Name" variant="filled" />
      <TextField 
       onChange={(e) => {
        setsfatherName(e.target.value)
      }}
      type='text' id="filled-basic" label="Father Name" variant="filled" /><br />
      <TextField
       onChange={(e) => {
        setrollNo(e.target.value)
      }}
       type='Number' id="filled-basic" label="Roll Number" variant="filled" />
      <TextField
       onChange={(e) => {
        setContactNo(e.target.value)
      }}
       type='Number' id="filled-basic" label="Contact Number" variant="filled" /><br />
      <TextField
       onChange={(e) => {
        setCNICNo(e.target.value)
      }}
       type='Number' id="filled-basic" label="CNIC Number" variant="filled" />
      <TextField onChange={(e) => {
        setCourseName(e.target.value)
      }}
       type='text' id="filled-basic" label="Course Name" variant="filled" /><br />
      <TextField onChange={(e) => {
        setGender(e.target.value)
      }}
       type='text' id="filled-basic" label="Gender" variant="filled" />
<TextField onChange={(e) => {
        setQualification(e.target.value)
      }}
       type='text' id="filled-basic" label="Qualification" variant="filled" /><br />
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




                  <Div 
                  >
                    Profile Photo
                    <label htmlFor="select-image">

< AddPhotoAlternateIcon style={{ paddingLeft: "5px", fontSize: "25px", color: 'green' }} />

</label>
                  </Div>  
                 <br />


    <Button  onClick={savePost}
      variant='contained' type="submit">Submit</Button>
    </Box>
        </DialogContent>
        <DialogActions>
        
        </DialogActions>
      </Dialog>

      {
       StudentDetail.map((eachPost, i) => (
      <Box
      key={i} sx={{ width: '100%' }}>
      <Stack spacing={3}>

        <Item sx={{m:'10px'}}>
        <span style={{paddingRight:'20px'
        ,fontSize:"20px",fontWeight:'400'
         }}>Course Name: {eachPost.CourseName}
         </span>
         <span style={{paddingRight:'20px'
        ,fontSize:"20px",fontWeight:'400'
         }}>Roll No: {eachPost.rollNo}
         </span> 
         <span style={{paddingRight:'20px'
        ,fontSize:"20px",fontWeight:'400'
         }}>Name: {eachPost.fullName}
         </span> 
         <span style={{paddingRight:'20px'
        ,fontSize:"20px",fontWeight:'400'
         }}>Father Name: {eachPost.fatherName}
         </span> 
         
         <span style={{paddingRight:'20px'
        ,fontSize:"20px",fontWeight:'400'
         }}>CNIC No: {eachPost.CNICNo}
         </span>
         <span style={{paddingRight:'20px'
        ,fontSize:"20px",fontWeight:'400'
         }}>Contact No: {eachPost.ContactNo}
         </span>
       
            
        

         
         <Button style={{float:'right',color:'black'}} onClick={() => {

deletePost(eachPost?.id)

}}><DeleteIcon/></Button>
        
        </Item>
        
         
      </Stack>
    </Box>
))}
    </div>
  )
}

export default StudentDetail