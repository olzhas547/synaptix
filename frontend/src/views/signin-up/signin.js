import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './signin.css'

const Signin = (props) => {
  return (
    <div className="signin-container">
      <Helmet>
        <title>signin</title>
        <meta property="og:title" content="signing" />
      </Helmet>
      <div className="signin-signin">
        <div className="signin-loan1"></div>
        <span className="signin-text BodyMedium400">
          <span>Don’t have account?</span>
        </span>
        <Link to="/signup" className="signin-buttons">
          <span className="signin-text02 ButtonM">
            <span>Create Account</span>
          </span>
        </Link>
        <div className="signin-form">
          <span className="signin-text04 Heading02">
            <span>Sign in to your account</span>
          </span>
          <div className="signin-from">
            <div className="signin-from1">
              <div className="signin-input-field">
                <span className="signin-text06 BodyMedium400">
                  <span>Email</span>
                </span>
                <input
                  type="text"
                  placeholder="Username or email address..."
                  className="signin-input-field1"
                />
              </div>
              <div className="signin-input-field2">
                <span className="signin-text08 BodyMedium400">
                  <span>Password</span>
                </span>
                <div className="signin-input-field3">
                  <span className="signin-text10 BodyLarge400">
                    <span>Password</span>
                  </span>
                  <div className="signin-eye">
                    <div className="signin-eye1">
                      <img
                        src="/external/vectori571-bmp3.svg"
                        alt="VectorI571"
                        className="signin-vector"
                      />
                      <img
                        src="/external/vectori571-ejef.svg"
                        alt="VectorI571"
                        className="signin-vector1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="signin-btn">
              <Link to="/dashboard" className="signin-buttons1">
                <span className="signin-text12 ButtonM">
                  <span>Sign In</span>
                </span>
                <div className="signin-arrow-right">
                  <div className="signin-arrow-right1">
                    <img
                      src="/external/vectori571-5ap8.svg"
                      alt="VectorI571"
                      className="signin-vector2"
                    />
                    <img
                      src="/external/vectori571-45yc.svg"
                      alt="VectorI571"
                      className="signin-vector3"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <img
          src="/external/rectangle66355718-kxwg-700w.png"
          alt="Rectangle66355718"
          className="signin-rectangle6635"
        />
        <div className="signin-loan2"></div>
        <div className="signin-group1000002794">
          <span className="signin-text14">
            <span>Центр событий</span>
          </span>
          <img
            src="/external/rectangle14085718-du8l-400h.png"
            alt="Rectangle14085718"
            className="signin-rectangle1408"
          />
          <img
            src="/external/rectangle14095718-hrqin-300w.png"
            alt="Rectangle14095718"
            className="signin-rectangle1409"
          />
          <img
            src="/external/pexelscottonbrostudio406514315718-emfg-200w.png"
            alt="pexelscottonbrostudio406514315718"
            className="signin-pexelscottonbrostudio40651431"
          />
        </div>
        <div className="signin-group1000002795">
          <span className="signin-text16">
            <span>Центр событий</span>
          </span>
          <img
            src="/external/pexelscottonbrostudio406514315718-aa6-300w.png"
            alt="pexelscottonbrostudio406514315718"
            className="signin-pexelscottonbrostudio406514311"
          />
        </div>
        <span className="signin-text18 h3">
          <span>Synaptix</span>
        </span>
      </div>
    </div>
  )
}

export default Signin
