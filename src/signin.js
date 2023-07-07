import React, { useState } from 'react';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';
import backgroundImageNight from './assets/images/bg.jpg';
import backgroundImageDay from './assets/images/bgnv.jpg';
import EyDay from './assets/logo/eylight.png';
import Eynight from './assets/logo/eynight.jpeg';

function LoginForm() {
  const [isNightMode, setIsNightMode] = useState(true);

  const handleToggle = () => {
    setIsNightMode(!isNightMode);
  };

  const backgroundImage = isNightMode ? backgroundImageNight : backgroundImageDay;
  const logo = isNightMode ? Eynight : EyDay;

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className="w3layouts-main">
      <div className="">
        <h1> Login form</h1>
        <div className="header-main">
          <div className="main-icon">
            <img src={logo} alt="logo" width="30%" height="30%" />
          </div>
          <div className="header-left-bottom">
            <form action="#" method="post">
              <div className="icon1">
                <span className="fa fa-user"></span>
                <input type="email" placeholder="Email Address" required="" />
              </div>
              <div className="icon1">
                <span className="fa fa-lock"></span>
                <input type="password" placeholder="Password" required="" />
              </div>
              <div className="login-check">
                <label className="checkbox">
                  <input type="checkbox" name="checkbox" checked="" />
                  <i></i> Keep me logged in
                </label>
              </div>
              <div className="bottom">
                <button className="btn">Log In</button>
              </div>
              <div className="links">
                <p>
                  <a href="#">Forgot Password?</a>
                </p>
                <p className="right">
                  <a href="#">New User? Register</a>
                </p>
                <div className="clear"></div>
              </div>
            </form>
          </div>
          <div className="social">
            <ul>
              <li>or login using:</li>
              <li>
                <a href="#" className="facebook">
                  <span className="fa fa-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <span className="fa fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#" className="google">
                  <span className="fa fa-google-plus"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="toggle-button">
        <button onClick={handleToggle}>Toggle Mode</button>
      </div>
    </div>
  );
}

export default LoginForm;
