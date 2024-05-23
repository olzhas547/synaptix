import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import './signin.css';
import Cookies from "js-cookie";
import { Link, useHistory } from 'react-router-dom';

function Signin() {
  
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const form_data = new FormData()
      form_data.append("username", formData['email'])
      form_data.append("password", formData['password'])
      const response = await axios.post('http://localhost:8000/api/login', form_data);
      Cookies.set("token", response.data.access_token);
      console.log(response.data.access_token)
      console.log(response.data.role)
      if (response.data.role === 'teacher') {
      
          history.push('/mycourse');
      } else if (response.data.role === 'student') {
        history.push('/mycoursestud');
      } else {

      }
    } catch (error) {
      console.error(error);
    }
  };




  return (
      <div className="signin-container">

        <Helmet>
          <title>Sign In</title>
          <meta property="og:title" content="Sign In"/>

        </Helmet>

        <div className="signin-signin">

          {/* ... */}

          <div className="signin-form" role="form" aria-label="Sign in form">
            <h1 className="signin-text04 Heading02">
              Sign in to your account
            </h1>
            <form className="signin-from" onSubmit={handleSubmit}>
              <div className="signin-from1">
                <div className="signin-input-field">
                  <label className="signin-text06 BodyMedium400" htmlFor="signin-input-email">
                    Email
                  </label>
                  <input
                      type="text"
                      placeholder="Username or email address..."
                      className="signin-input-field1"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      id="signin-input-email"
                      tabIndex="0"
                  />
                </div>
                <div className="signin-input-field2">
                  <label className="signin-text08 BodyMedium400" htmlFor="signin-input-password">
                    Password
                  </label>
                  <input
                      type="password"
                      placeholder="Password..."
                      className="signin-input-field1"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      id="signin-input-password"
                      tabIndex="0"
                  />
                </div>
              </div>

              <div className="signin-btn">

                <Link to='/mycourse'><button onClick={handleSubmit} style={{ cursor: 'pointer', width:'150px', height:'40px', border:'1px solid silver', borderRadius:'5px', backgroundColor:'#1677FF', color:'white'}}><span>Sign in</span></button></Link>

              </div>
            </form>
          </div>
          {/* ... */}
          <img
              src="/external/rectangle66345718-3df8-700w.png" style={{width:'30%', height:'100%'}}
              alt="Rectangle66345718"
              className="signup-rectangle6634"
          />
          <span className="signup-text24 btnText">
                <span>Login</span>
            </span>
          <div className="signup-group1000002793">
            <img
                src="/external/rectangle14085718-7zw-400h.png"
                alt="Rectangle14085718"
                className="signup-rectangle1408"
            />

            <img
                src="/external/pexelscottonbrostudio406514315718-sgn-200w.png"
                alt="pexelscottonbrostudio406514315718"
                className="signup-pexelscottonbrostudio40651431"
            />
          </div>
          <div className="signup-group1000002792">
            <img
                src="/external/pexelscottonbrostudio406514315718-htf-300w.png"
                alt="pexelscottonbrostudio406514315718"
                className="signup-pexelscottonbrostudio406514311"
            />
          </div>


          <div className="signin-signup" role="navigation" aria-label="Sign up navigation">
            <p className="signin-text BodyMedium400">
              Don’t have account?
            </p>
            <Link to="/signup" className="signin-buttons" tabIndex="0">
                        <span className="signin-text02 ButtonM">
                            Create Account
                        </span>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Signin;
