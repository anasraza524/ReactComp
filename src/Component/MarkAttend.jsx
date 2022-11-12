import React from 'react'
import {Box,TextField,Button,Container} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const MarkAttend = () => {
  return (
    <div>
<Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }} >
      

<Box
style={{float:"right"}}
      component="form"
      onSubmit=""
      sx={{
        '& > :not(style)': { m: 1, width: '22ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField
      type="text"
          label="Search"
          id="outlined-size-small"
          Value="Small"
          size="small"
        />
        
      
    </Box>
    

       <Box
        mt={2}
       
                  m={3}
                  p={5}
                >

                  <img
                  style={{borderRadius:'100px'}}
                  src="" alt='Not' height="150px" width="150" />
                <br />

             
      <TextField  style={{margin:'3px'}}  id="filled-read-only-input"   defaultValue="Hello World"
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
          variant="filled" label="Course Name"  /><br />
      
      <Box sx={{ minWidth: 200 }}>
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
</Box>
   
                 <br />


    <Button  
      variant='contained' type="submit">Submit</Button>
    </Box>
    </Box>
    </Container>
    </div>
  )
}

export default MarkAttend