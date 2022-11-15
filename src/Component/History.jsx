import React from 'react'
import { getFirestore,where } from "firebase/firestore";
 import { getAuth } from "firebase/auth";
 import { useState,useEffect } from 'react';
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
const History = () => {

    let UserId ;
    const [Document, setDocument] = useState({});
  const [curentRollNo, setcurentRollNo] = useState('')
  const [isSearch, setisSearch] = useState(false)
  
  const db = getFirestore();
  const auth = getAuth();
    const SearchHistoryData = async (e) => {
  
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
      };
  return (
    <div>

<Box

      
      
     
    
      autoComplete="off"
    >
        <Paper
      
      sx={{mb:"10px" ,p: '5px 10px', display: 'flex', alignItems: 'center', width: {xs:280,sm:250,lg:300} }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter Roll No"
        // onChange={(e)=>{
        //   setcurentRollNo(e.target.value)
        // }}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton  type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      
    </Paper>
        
      
    </Box>

    </div>
  )
}

export default History