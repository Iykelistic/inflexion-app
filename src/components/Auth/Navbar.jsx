import React from 'react';
import BackgroundImage from '../../assets/images/Image.svg';
import Logo from "../../assets/images/Logo.svg";
import DashboardIcon from "../../assets/images/DashboardIcon.svg";
import { FaUser } from "react-icons/fa6";
import { HiUserCircle } from "react-icons/hi2";
import { FaKey } from "react-icons/fa6";
import SignupForm from "./SignupForm";
import Footer from './Footer';


export default function NavBar() {
  return (
    <div>
         <div className="navbar__container">
            <div className="navbar__context">
                <img src={BackgroundImage} className="navbar__background" />
            </div>
            
            <div className="navbar__content">

                <div className="navbar__content_i">
                <div className="navbar__logo__text">
                    <img src={Logo} className="logo__icon" alt="navbar__icon" />
                    <p className="logo__text">VANDELAY INDUSTRIES</p>
                </div>
                </div>

            <div className="navbar_mid">
                <div className="navbar__items">
                        <img src={DashboardIcon} className="dashboard__icon" alt="navbar__icon" />
                        <p className="navbar__text">DASHBOARD</p>
                </div>
                <div className="navbar__items">
                    <FaUser className="dashboard__icon" alt="navbar__icon" />
                    <p className="navbar__text">PROFILE</p>
                </div>
                <div className="navbar__items">
                    <HiUserCircle className="dashboard__icon" alt="navbar__icon" />
                    <p className="navbar__text">SIGN UP</p>
                </div>
                <div className="navbar__items">
                    <FaKey className="dashboard__icon" alt="navbar__icon" />
                    <p className="navbar__text">SIGN IN</p>
                </div>
            </div>
                
                <div className="navbar__end">
                <button className="navbar__button">
                    Free Download
                </button>
                </div>
            </div>

            <div className="navbar__welcome">
                <h2 className="welcome__text">Welcome!</h2>
                <p className="navbar__welcome__text">Use these awesome forms to login or create new<br></br>account in your project for free.</p>
            </div>

            <SignupForm />
            <Footer />
         </div>
    </div>
  )
}
