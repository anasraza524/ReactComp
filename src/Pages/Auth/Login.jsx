import { useFormik } from 'formik';
import * as yup from 'yup';
import {Link} from "react-router-dom";
import './Login.css'
import { useState } from 'react';
import { getAuth,
  signInWithEmailAndPassword
  ,onAuthStateChanged
} from "firebase/auth";
import {   } from "firebase/auth";
function Login (){

 // const [email, setEmail] = useState('')
 // const [password, setPassword] = useState('')
 const validationSchema= yup.object({
   email: yup
     .string('Enter your email')
     .email('Enter a valid email')
     .required('Email is required'),
   password: yup
     .string('Enter your password')
     // .min(8, 'Password should be of minimum 8 characters length')
     .required('Password is required'),
 
 })
   const formik = useFormik({
       initialValues: {
         email: '',
         password: '',
       },
      validationSchema: validationSchema,
       onSubmit: (values) => {
       //   setEmail(values.email)
       // setPassword(values.password)
         console.log("values" ,values);

         const auth = getAuth();
         signInWithEmailAndPassword(auth, values.email, values.password)
           .then((userCredential) => {
             // Signed in 
             const user = userCredential.user;
             console.log('Login success',user)
             // ...
           })
           .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             console.log("error",error)
           });

       },
     });
     return (
       <div className="box">
  
 <div className="form-box">
         
         <form onSubmit={formik.handleSubmit}>
           <input
           placeholder="Email address or phone number"
                    id="email"
             name="email"
             label="Email"
             value={formik.values.email}
             onChange={formik.handleChange}

           />
           <br/>
           {(formik.touched.email && Boolean(formik.errors.email))?
           <span style={{color:"red" }}>{formik.errors.email}</span>
         :null }
           
           <br/>
           <input
              placeholder="Password"
             id="password"
             name="password"
             label="Password"
             type="password"
             value={formik.values.password}
             onChange={formik.handleChange}
            
            
           />
           <br/>
           {(formik.touched.password && Boolean(formik.errors.password))?
           <span style={{color:"red"}}>{formik.errors.password} </span>
           : null
           }
           <br/><br/>
           <button color="primary" variant="contained" fullWidth type="submit">
           Log In
           </button>
           <a to="/">Forgotten Password</a>
         </form>
       
       

       <hr/>
   <div className="create-btn">
     <Link to="/from" >Create New Admin</Link>
   </div>
 </div>
</div>


/* <div className="box">
 <div className="title-box">
   <img src="https://i.postimg.cc/NMyj90t9/logo.png" alt="Facebook">
   <p>Facebook helps you connect and share with the people in your life.</p>
 </div>
 <div className="form-box">
   <form action="#">
     <input type="text" placeholder="Email address or phone number">
     <input type="password" placeholder="Password">
     <button type="submit">Log In</button>
     <a href="#">Forgotten Password</a>
   </form>
   <hr>
   <div className="create-btn">
     <a href="https://youtu.be/Lcw8t9vTpQI" target="_blank">Create New Account</a>
   </div>
 </div>
</div>




   // <form action="/">
   //   <input type="text" placeholder="Email address or phone number"/>
   //   <input type="password" placeholder="Password"/>
   //   <button type="submit">Log In</button>
   //   <Link to="/">Forgotten Password</Link>
   // </form> */
   
       

     );
}

  export default Login ;
