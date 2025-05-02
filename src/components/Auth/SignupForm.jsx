import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function SignupForm() {
  const navigate = useNavigate(); 

  const [signupDetails, setSignupDetails] = useState({
    name: '',
    email: '',
    password: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignup = () => {
    console.log(signupDetails); 
    navigate('/dashboard'); 
  };

  return (
    <>
      <div className="signupform__container">
        <div className="signupform__content">
          <h2 className="register__text">Register With</h2>

          <div className="signupform__icons">
            <div className="signupform__icon">
              <FaFacebook className="fa__icon" />
            </div>
            <div className="signupform__icon">
              <FaApple className="fa__icon" />
            </div>
            <div className="signupform__icon">
              <FaGoogle className="fa__icon" />
            </div>
          </div>

          <p className="signupform__i">or</p>

          <form className="signup__form">
            <label className="signup__label">Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Your full name" 
              className="signup__input" 
              value={signupDetails.name} 
              onChange={handleInputChange} 
            />

            <label className="signup__label">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Your email address" 
              className="signup__input" 
              value={signupDetails.email} 
              onChange={handleInputChange} 
            />

            <label className="signup__label">Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Your password" 
              className="signup__input" 
              value={signupDetails.password} 
              onChange={handleInputChange} 
            />
          </form>

          <div className="signup__switch" style={{ marginLeft: "4.2rem" }}>
            <Switch {...label} style={{ color: "white" }} defaultChecked />
            <p className="rem__text">Remember me</p>
          </div>
          <div className="button__container">
            <button className="signup__button" onClick={handleSignup}>SIGN UP</button> 
          </div>

          <Link to="/signin" className="link__text"><p className="already__text">Already have an account? <span className="already__span">Sign in</span></p></Link>

        </div>
      </div>
    </>
  );
}
