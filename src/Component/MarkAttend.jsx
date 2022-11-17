import React from 'react'
import { getFirestore,where } from "firebase/firestore";
 import { getAuth } from "firebase/auth";
import {
  query, collection,
  addDoc, getDocs, doc, onSnapshot
  , serverTimestamp, orderBy, limit
  , deleteDoc, updateDoc
} from "firebase/firestore";
import {Box,TextField,Button,
  Container,styled,Avatar
,Paper,InputBase,IconButton,Divider} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState,useEffect } from 'react';
const MarkAttend = () => {
  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    marginRight:'50px',
    fontWeight:'400',
    fontSize:'20px'
  }));
  let UserId ;
  const [Document, setDocument] = useState({});
const [curentRollNo, setcurentRollNo] = useState('')
const [isSearch, setisSearch] = useState(false)
const [AttendeceValue, setAttendeceValue] = useState('');
const db = getFirestore();
const auth = getAuth();

const SearchStudentData = async (e) => {
  
  e.preventDefault();
  const q = query(collection(db, "StudentDetail"),
 
  where("rollNo", "==", curentRollNo)
  );
  
  const querySnapshot =await getDocs(q);
  querySnapshot.forEach((doc) => {
    UserId = doc.id;
    let data = JSON.stringify(doc.data())
    setDocument(JSON.parse(data));
  });
  setisSearch(true)
  console.log('Document',Document)
  console.log('UserId',UserId)
  
};
const CheckAttendence = async(e)=>{
  e.preventDefault();
 try {
  const docRef = await addDoc(collection(db, "StudentDetail"), {
    ...Document,studentHistory:{
      status:AttendeceValue,time:serverTimestamp()
    },});
 
} catch (e) {
 
}
};
       
  return (
    <div>
<Container sx={{maxwidth:{xs:"xs",sm:"sm",lg:"lg"}}}>
        
        {/* IF CONDITION */}
     
        <Box sx={{ bgcolor: '#cfe8fc', height: {xs:'150hv',lg:'80vh'},p:"20px" }} >
      

<Box
style={{float:"right"}}
      
      
     
    
      autoComplete="off"
    >
        <Paper
      
      sx={{mb:"10px" ,p: '5px 10px', display: 'flex', alignItems: 'center', width: {xs:280,sm:250,lg:300} }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search with Roll No"
        onChange={(e)=>{
          setcurentRollNo(e.target.value)
        }}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton onClick={SearchStudentData} type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      
    </Paper>
        
      
    </Box>
    
    {
        (isSearch === true )
        // &&(Document.length !== 0)
        ?
       <Box
        mt={2}
       
                  m={3}
                  p={3}
                >
                  <Box sx={{display:{xs:'block',lg:'flex'},alignItems:'center'}}>
<Avatar

        alt="image not uploaded"
        src={Document.image}
        sx={{ width: {xs:150,lg:250}, height: {xs:150,lg:250},border:'solid' }}
      />
                  {/* <img
                  style={{borderRadius:'100px'}}
                  
                   alt='Not' height="200px" width="250px" />
                 */}
                <br />

                <div>
                <Div sx={{p:{xs:'10px',lg:'20px'}}}><strong>NAME: </strong>{Document.fullName}</Div>
                <Div sx={{p:{xs:'10px',lg:'20px'}}}><strong>Roll No: </strong>{Document.rollNo}</Div>    
                </div></Box>
      
      {/* <TextField  style={{margin:'3px'}}  id="filled-read-only-input"   defaultValue="Hello World"
          InputProps={{
            readOnly: true, }}
          variant="filled" label=" Full Name"  />
      <TextField style={{margin:'3px'}}  id="filled-read-only-input"
        
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled" label="Father Name"  /><br />
      <TextField  style={{margin:'3px'}} id="filled-read-only-input"
        
          defaultValue=""
          InputProps={{
            readOnly: true,
          }}
          variant="filled" label="Roll Number"  />
      <TextField style={{margin:'3px'}} id="filled-read-only-input"
        
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled" label="Contact Number"  /><br />
      <TextField style={{margin:'3px'}} id="filled-read-only-input"
         
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled" label="CNIC Number"  />
      <TextField style={{margin:'3px'}} id="filled-read-only-input" 
         
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled" label="Course Name"  />*/}
          <br />
         <Box sx={{display:{xs:'block',lg:'flex'}}}>
         <Div sx={{p:{xs:'10px',lg:'20px'}}}><strong>FATHER NAME: </strong>{Document.fatherName}</Div>
         <Div sx={{p:{xs:'10px',lg:'20px'}}}><strong>CNIC: </strong>{Document.CNICNo}</Div>
         <Div sx={{p:{xs:'10px',lg:'20px'}}}><strong>CONTACT: </strong>{Document.ContactNo}</Div>
          </Box>  
          <Box sx={{display:{xs:'block',lg:'flex'}}}>
         <Div sx={{p:{xs:'10px',lg:'20px'}}}><strong>COURSE: </strong>{Document.CourseNam}</Div>
         <Div sx={{p:{xs:'10px',lg:'20px'}}}><strong>GENDER: </strong>{Document.gender}</Div>
         <Div sx={{p:{xs:'10px',lg:'20px'}}}><strong>EDUCATION: </strong>{Document.qualification
}</Div>
          </Box>        
              
      <Box sx={{m:'20px',alignItems:"center"}}>
      <Button  onClick={CheckAttendence} sx={{m:'10px',}} variant="outlined" size="small">
          Present
        </Button>
        <Button sx={{m:'10px',}} variant="outlined" size="small">
          Absent</Button>
        <Button sx={{m:'10px',}} variant="outlined" size="small">
          Leave</Button>
        <Button sx={{m:'10px',}} variant="outlined" size="small">
          Late</Button>
          <select name="" id="teachr" onChange={(e)=>{
         setAttendeceValue(e.target.value)
        }}>
          <option value="Present">Present</option>
          <option value="Leave">Leave</option>
          <option value="Late">Late</option>
          <option value="Absent">Absent</option>
        </select>
      </Box>
      {/* <Box sx={{ minWidth: 200 }}>
      <FormControl  >
  <InputLabel id="demo-simple-select-label">Mark</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value=''
    label="Age"
    onChange=""
    sx={{ maxWidth: 100 }}
  >
    <MenuItem value="Present">Present</MenuItem>
    <MenuItem value="Absent">Absent</MenuItem>
    <MenuItem value="Leave">Leave</MenuItem>
  </Select>
</FormControl>
</Box> */}
   
                 <br />


    <Button  
    
      variant='contained' type="submit">Submit</Button>
    </Box> :
    ""}
    </Box>
   
    </Container>
    </div>
  )
}

export default MarkAttend