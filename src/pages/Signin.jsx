import React from 'react'
import SigninImage from "../assets/images/SigninImage.svg";
import SigninLogo from "../assets/images/SigninLogo.svg";
import SigninIcon from "../assets/images/SigninIcon.svg";
import { FaUser } from "react-icons/fa6";
import { HiUserCircle } from "react-icons/hi2";
import { FaKey } from "react-icons/fa6";
import Switch from '@mui/material/Switch';
import Footer from "../components/Auth/Footer";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Signin() {
  return (
    <div>
        <div className="signin__container">
           
            <div className="signin__first__content">
            <div className="signin__first__content_i">
                <div className="signin__welcome">
                    <p className="signin__welcome__text">Welcome!</p>
                    <p className="signin__enter__text">Enter your email and password to sign in</p>
                </div>

                <div className="signin__form">

                <label className="signup__label signin__label">Email</label>
                <input type="text" placeholder="Your email address" className="signup__input signin__input" />

                <label className="signup__label  signin__label">Password</label>
                <input type="text" placeholder="Your password" className="signup__input signin__input" />
                </div> 

                <div className="signin__switch">
                    <Switch {...label} style={{color: "white"}} defaultChecked/>
                    <p className="rem__text">Remember me</p>
                </div>
                <div className="button__container signin__button__container">
                    <button className="signup__button signin__new__button">SIGN UP</button>
                </div>

                <p className="already__text">Already have an account? <span className="already__span">Sign in</span></p>
            </div>
               
            </div> 

            <div className="signin__second__content">
                <img src={SigninImage} className="signin__image" alt="signin__img" />
            </div>
        </div>
        <div className="signin__header__container">
               <div className="navbar__content navbar__signin__content">
            
                            <div className="navbar__content_i navbar__signin__content_i">
                            <div className="navbar__logo__text navbar__signin__logo__text">
                                <img src={SigninLogo} className="logo__icon signin__Logo__icon" alt="navbar__icon" />
                                <p className="logo__text signin__logo__text">VANDELAY INDUSTRIES</p>
                            </div>
                            </div>
            
                        <div className="navbar_mid navbar__signin__mid">
                            <div className="navbar__items navbar__signin__items">
                                    <img src={SigninIcon} className="dashboard__icon" alt="navbar__icon" style={{color: "#2D3748"}}/>
                                    <p className="navbar__text navbar__signin__text">DASHBOARD</p>
                            </div>
                            <div className="navbar__items  navbar__signin__items">
                                <FaUser className="dashboard__icon dashboard__signin__icon" alt="navbar__icon" />
                                <p className="navbar__text navbar__signin__text">PROFILE</p>
                            </div>
                            <div className="navbar__items  navbar__signin__items">
                                <HiUserCircle className="dashboard__icon dashboard__signin__icon" alt="navbar__icon" />
                                <p className="navbar__text  navbar__signin__text">SIGN UP</p>
                            </div>
                            <div className="navbar__items  navbar__signin__items">
                                <FaKey className="dashboard__icon dashboard__signin__icon" alt="navbar__icon" />
                                <p className="navbar__text  navbar__signin__text">SIGN IN</p>
                            </div>
                        </div>
                            
                            <div className="navbar__end navbar__signin__end">
                            <button className="navbar__button navbar__signin__button">
                                Free Download
                            </button>
                            </div>
                        </div>
        </div>
        <div className="siginin__footer">
        <div className="signin__footer__content">
              <p className="footer__copywrite">© 2022, Made with Lorem for a better web</p>
          </div>

          <div className="footer__second__content">
              <p className="footer__socials">About us</p>
              <p className="footer__socials">Privacy</p>
              <p className="footer__socials">Blog</p>
              <p className="footer__socials">License</p>
          </div>
        </div>
    </div>
  )
}