import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { Routes, Route, Link ,Navigate} from "react-router-dom";
import Navbar2 from './Component/Nav2';
import Login from './Pages/Auth/Login';
import From from './Pages/Auth/SignUp';
import StickyFooter from './Component/Footer';
import { useState,useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ClassCreate from './Component/ClassCreate';
import StudentDetail from './Component/StudentDetail';
import MarkAttend from './Component/MarkAttend';
import History from './Component/History';
function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });



  const [isLogin, setisLogin] = useState(false)
  useEffect(() => {
    const auth = getAuth();
  const Unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('user',user)
      setisLogin(true)
      // ...
    } else {
      // User is signed out
      // ...
      setisLogin(false)
    }
  }); return()=>{
    console.log('cleanUp function')
   Unsubscribe()
 }
   
  }, [])
  return (
    <div>
       <ThemeProvider theme={darkTheme}>
      <Navbar2  setMode={setMode} mode={mode}/>
    
    
    
    
    
    
    
      {(isLogin)?

<Routes>
     

<Route path="StudentDetail" element={<StudentDetail/>} />
<Route path="/" element={<ClassCreate/>} />
<Route path="MarkAttend" element={<MarkAttend/>} />
<Route path="History" element={<History/>} />  
<Route path="*" element={<Navigate to="/" replace={true} />} />
</Routes>



   


  :
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="From" element={<From/>} />
    <Route path="*" element={<Navigate to="/" replace={true} />} />    
          </Routes> 
 



    }
    
    
    
    
    
    
    
    
    
    
    {/* <StickyFooter/> */}
    {/* <ClassCreate/> */}
    </ThemeProvider>
    </div>
  );
}

export default App;
