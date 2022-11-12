import './SignUp.css'
import { useFormik } from 'formik';
import * as yup from 'yup';
import {Link} from "react-router-dom";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function From(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


//   const handleEmailChange =(e) =>{
//    setEmail(e.currentTarget.value)
//  }
//  const handlePasswordChange =(e) =>{
//   setPassword(e.currentTarget.value)
//  }
  const validationSchema= yup.object({
    firstname: yup
    .string('Enter your First name')
    .required('First name is required'),
    lastname: yup
    .string('Enter your Last name')
    .required('Last name is required'),

    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .matches(
        // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/,
        // "Must Contain 5 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required('Password is required'),
      confirm_password: yup
      .string('Enter your password')
      .label('confirm password').required("confirm Password is required")
      // .oneOf([yup.ref('password'), null],
      //  'Passwords must match'),
  
  })
    const formik = useFormik(
      {
       

        initialValues: {
          firstname:'',
          lastname:'',
           email:  '',
           password:'',
          confirm_password:'',
        },
        
       validationSchema: validationSchema,
       
        onSubmit: (values) => {
        //   setEmail(values.email)
        // setPassword(values.password)
          console.log("values" ,values);
          
          const auth = getAuth();
createUserWithEmailAndPassword(auth, values.email, values.password)
  .then((userCredential) => {
    // Signed in 

    const user = userCredential.user;
    console.log("user",user)
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorMessage:",errorMessage)
    console.log("Sign up:",error)
    console.log("Email",email)
    console.log("password",password)
    // ..
  });
        },
      });

return(

<body>
 {/* <nav className="navbar">
    <img className="logo" src="fb.png"/>
     <form className="login_form">
      <div className="email">
        <div className="font">Email or Phone</div>
        <input type="text" name=""/>
      </div>
      <div className="password">
        <div className="font">Password</div>
        <input type="password" name=""/>
      </div>
      <button className="login_btn">Login</button>
    </form> 
  </nav>*/}

 
    {/* <div className="logo_body">
  <img className="logobdy" src="fbbdy.png"/>
  <p className="like_font font1">Thanks for stopping by!</p>
  <p className="like_font">We hope to see you again soon.</p>
</div> */}

  <div className="signup_body">
    <p className="acc_crt">Create an account</p>
    <p className="free_hint">It's free and always will be.</p>
    <form onSubmit={formik.handleSubmit} className="signup_form">
      <div>
        
        <input
         className="firstname"
          type="text"
           name="firstname"
           value={formik.values.firstname}
             onChange={formik.handleChange}
           placeholder="First name"/>
         
         
         
        <input className="lastname"
         type="text"
          name="lastname"
          value={formik.values.lastname}
             onChange={formik.handleChange}
           placeholder="Last name"/>
           <br />
           {(formik.touched.firstname && Boolean(formik.errors.firstname))?
            <span style={{color:"red",marginRight:"65px" }}>{formik.errors.firstname}</span>
          :null }
         {(formik.touched.lastname && Boolean(formik.errors.lastname))?
            <span style={{color:"red" }}>{formik.errors.lastname}</span>
          :null }
         
           <input
           placeholder="Email address or phone number"
                    id="email"
             name="email"
             label="Email"
            //  value={email}
            //   onChange={(e)=>{
            //     setEmail(e.target.value)
            //   }
            // }
             value={formik.values.email}
              onChange={formik.handleChange} 
             className="email"
           />
        <br/>
            {(formik.touched.email && Boolean(formik.errors.email))?
            <span style={{color:"red" }}>{formik.errors.email}</span>
          :null }
        
        {/* <input className="email" type="text" name="" placeholder="Mobile number or Email"/> */}
        <br/>
        <input
               placeholder="Password"
              id="password"
              name="password"
              label="Password"
              type="password"
            //   value={password}
            //   onChange={(e)=>{
            //     setPassword(e.target.value)
            //   }
            // }
              value={formik.values.password}
              onChange={
                formik.handleChange
              }
              className="password"
             
            />
            <br/>
            {(formik.touched.password && Boolean(formik.errors.password))?
            <span style={{color:"red"}}>{formik.errors.password} </span>
            : null
            }        
        {/* <input className="password" type="password" name="" placeholder="Password"/> */}
        <br/>
        <input
         className="password2"
          type="password" 
           name="confirm_password"
           label="confirm_password"
            placeholder="Confirm password"
            value={formik.values.confirm_password}
          onChange={formik.handleChange}
            />

<br/>
            {(formik.touched.confirm_password && Boolean(formik.errors.confirm_password))?
            <span style={{color:"red"}}>{formik.errors.confirm_password} </span>
            : null
            }   
      </div>
      
      
     
    
    <div className="birth_date"> 
        
      {/* <select className="month">
         <option>Month</option><option>Jan</option><option>Feb</option><option>Mar</option>
         <option>Apr</option><option>May</option><option>Jun</option><option>Jul</option>
         <option>Aug</option><option>Sep</option><option>Oct</option><option>Nov</option>
         <option>Dec</option>
       </select>

        <select className="day">
         <option>Day</option><option>1</option><option>2</option><option>3</option>
         <option>4</option><option>5</option><option>6</option><option>7</option>
         <option>8</option><option>9</option><option>10</option><option>11</option>
         <option>12</option><option>13</option><option>14</option><option>15</option>
         <option>16</option><option>17</option><option>18</option><option>19</option>
         <option>20</option><option>21</option><option>22</option><option>23</option>
         <option>24</option><option>25</option><option>26</option><option>27</option>
         <option>28</option><option>29</option><option>30</option>
       </select>

       {/* <select className="year">
         <option>Year</option><option>1970</option><option>1972</option><option>1974</option>
         <option>1976</option><option>1978</option><option>1980</option><option>1982</option>
         <option>1984</option><option>1986</option><option>1988</option><option>1990</option>
         <option>1992</option><option>1995</option><option>1997</option><option>2000</option>
         <option>2002</option><option>2003</option><option>2004</option><option>2005</option>
         <option>2006</option><option>2007</option><option>2008</option>
       </select> */}
       
       {/* <p className="brth_hint"><a href="#">Why do i need to provide my date of birth?</a></p> */}
       
     </div> 

      
    

    
     

<Link className="linkToLogin" to="/">Already have an account</Link>
<br />      <button type='sumbit' className="signup">Sign Up</button>
      
    </form>
  </div>



</body>
)


}
export default From;