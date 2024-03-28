import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './signup.css'

const Signup = (props) => {
  return (
    <div className="signup-container">
      <Helmet>
        <title>signup</title>
        <meta property="og:title" content="signup" />
      </Helmet>
      <div className="signup-signup">
        <div className="signup-loan1"></div>
        <div className="signup-form">
          <span className="signup-text Heading02">
            <span>Create your account</span>
          </span>
          <div className="signup-from">
            <div className="signup-fullname">
              <div className="signup-input-field">
                <span className="signup-text02 BodyMedium400">
                  <span>Full Name</span>
                </span>
                <input
                  type="text"
                  placeholder="First name..."
                  className="signup-input-field01"
                />
              </div>
              <input
                type="text"
                placeholder="Last name"
                className="signup-input-field02"
              />
            </div>
            <div className="signup-input-field03">
              <span className="signup-text04 BodyMedium400">
                <span>Username</span>
              </span>
              <input
                type="text"
                placeholder="Username..."
                className="signup-input-field04"
              />
            </div>
            <div className="signup-input-field05">
              <span className="signup-text06 BodyMedium400">
                <span>E-mail</span>
              </span>
              <input
                type="text"
                placeholder="E-mail address..."
                className="signup-input-field06"
              />
            </div>
            <div className="signup-input-field07">
              <span className="signup-text08 BodyMedium400">
                <span>Choose your role:</span>
              </span>
              <div className="signup-input-field08">
                <span className="signup-text10 BodyLarge400">
                  <span>Teacher</span>
                </span>
                <div className="signup-frame377">
                  <div className="signup-chevron-down">
                    <div className="signup-caret-down">
                      <img
                        src="/external/vectori571-4vqq.svg"
                        alt="VectorI571"
                        className="signup-vector"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="signup-password">
              <div className="signup-input-field09">
                <span className="signup-text12 BodyMedium400">
                  <span>Password</span>
                </span>
                <div className="signup-input-field10">
                  <span className="signup-text14 BodyLarge400">
                    <span>Create password</span>
                  </span>
                  <div className="signup-eye">
                    <div className="signup-eye1">
                      <img
                        src="/external/vectori571-e7pk.svg"
                        alt="VectorI571"
                        className="signup-vector1"
                      />
                      <img
                        src="/external/vectori571-fwkne.svg"
                        alt="VectorI571"
                        className="signup-vector2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="signup-input-field11">
                <span className="signup-text16 BodyMedium400">
                  <span>Confirm Password</span>
                </span>
                <div className="signup-input-field12">
                  <span className="signup-text18 BodyLarge400">
                    <span>Confirm password</span>
                  </span>
                  <div className="signup-eye2">
                    <div className="signup-eye3">
                      <img
                        src="/external/vectori571-07id.svg"
                        alt="VectorI571"
                        className="signup-vector3"
                      />
                      <img
                        src="/external/vectori571-xkgt.svg"
                        alt="VectorI571"
                        className="signup-vector4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/signin" className="signup-buttons">
            <span className="signup-text20 ButtonM">
              <span>Create account</span>
            </span>
            <div className="signup-arrow-right">
              <div className="signup-arrow-right1">
                <img
                  src="/external/vectori571-bctb.svg"
                  alt="VectorI571"
                  className="signup-vector5"
                />
                <img
                  src="/external/vectori571-scpb.svg"
                  alt="VectorI571"
                  className="signup-vector6"
                />
              </div>
            </div>
          </Link>
        </div>
        <Link to="/dashboard" className="signup-buttons1">
          <span className="signup-text22 ButtonM">
            <span>Log in</span>
          </span>
        </Link>
        <img
          src="/external/rectangle66345718-3df8-700w.png"
          alt="Rectangle66345718"
          className="signup-rectangle6634"
        />
        <span className="signup-text24 btnText">
          <span>Login</span>
        </span>
        <div className="signup-group1000002793">
          <span className="signup-text26">
            <span>Центр событий</span>
          </span>
          <img
            src="/external/rectangle14085718-7zw-400h.png"
            alt="Rectangle14085718"
            className="signup-rectangle1408"
          />
          <img
            src="/external/rectangle14095718-brb74n-300w.png"
            alt="Rectangle14095718"
            className="signup-rectangle1409"
          />
          <img
            src="/external/pexelscottonbrostudio406514315718-sgn-200w.png"
            alt="pexelscottonbrostudio406514315718"
            className="signup-pexelscottonbrostudio40651431"
          />
        </div>
        <div className="signup-group1000002792">
          <span className="signup-text28">
            <span>Центр событий</span>
          </span>
          <img
            src="/external/pexelscottonbrostudio406514315718-htf-300w.png"
            alt="pexelscottonbrostudio406514315718"
            className="signup-pexelscottonbrostudio406514311"
          />
        </div>
        <span className="signup-text30 h3">
          <span>Synaptix</span>
        </span>
      </div>
    </div>
  )
}

export default Signup
