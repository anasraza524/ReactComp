import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { Routes, Route, Link ,Navigate} from "react-router-dom";
import Navbar2 from './Component/Nav2';
import StickyFooter from './Component/Footer';
import { useState } from 'react';

import ClassCreate from './Component/ClassCreate';
import StudentDetail from './Component/StudentDetail';
function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div>
       <ThemeProvider theme={darkTheme}>
      <Navbar2 setMode={setMode} mode={mode}/>
      <Routes>
     
      <Route path="/" element={<Home/>} />
      <Route path="About" element={<About/>} />
      <Route path="StudentDetail" element={<StudentDetail/>} />
      <Route path="ClassCreate" element={<ClassCreate/>} />  
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
    {/* <StickyFooter/> */}
    {/* <ClassCreate/> */}
    </ThemeProvider>
    </div>
  );
}

export default App;
