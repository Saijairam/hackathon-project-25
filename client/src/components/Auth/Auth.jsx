import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../../actions/auth';

import './Auth.css';

const Auth = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sign , setsign] = useState(false);
 
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [isAdmin, setisAdmin] = useState(false);
  const [password, setpassword] = useState("");

  // const data = {name,email,isAdmin,password};

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(sign){
      dispatch(signup({name,email,isAdmin,password},navigate));
    }else{
      dispatch(login({email,password},navigate));
    }
    // console.log(data);
  }

  const handleSwitch = ()=>{
    setsign(!sign);
  }

  return (
    <div>
      <Navbar/>
      <div className="container">
         <h1 className='text-center mt-3'>{sign ? "SIGNUP" : "LOGIN"} FORM</h1>
        <form className='form-container pt-2 mt-3' onSubmit={handleSubmit}>
        {
            sign && (
              <>
                <label className='label' htmlFor="name">
                  <h4>Name</h4>
                  <input type="text" name='name' onChange={(e)=>setname(e.target.value)}/>
                </label>
              </>
            )
          }
          
          <label className='label' htmlFor="email">
            <h4>Email</h4>
            <input type="text" name='email' onChange={(e)=>setemail(e.target.value)}/>
          </label>
          {
            sign && (
              <>
                <label className='label' htmlFor="isAdmin">
                  <h4>Are u admin</h4>
                  <input type="text" name="isAdmin" onChange={(e)=>setisAdmin(e.target.value)}  placeholder="type True or False"/>
                </label>
              </>
            )
          }
          
          <label className='label' htmlFor="password">
            <h4>Password</h4>
            <input type="password" name='password' onChange={(e)=>setpassword(e.target.value)}/>
          </label>
          <button type="submit">{sign ? "Signup" : "Login"}</button>
        </form>
        <p style={{marginTop:"10px"}}>
          {sign ? "Already have an account?" : "Don't have an account? "}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch} >{sign ? "Log in" : "Sign up"}</button>
         </p>
      </div>
      
    </div>
  )
}

export default Auth