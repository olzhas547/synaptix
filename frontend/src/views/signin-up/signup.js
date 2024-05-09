import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import './signup.css';

function Signup() {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        console.log(formData)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const form_data = new FormData()
            form_data.append("username", formData['email'])
            form_data.append("password", formData['password'])
            const response = await axios.post('http://localhost:8000/api/sign-up', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="signup-container">
            <Helmet>
                <title>Sign Up</title>
                <meta property="og:title" content="Sign Up" />
            </Helmet>
            <div className="signup-signup">
                <div className="signup-loan1"></div>
                <div className="signup-form">
                    <span className="signup-text Heading02">
                        <button style={{ width: '50%', backgroundColor:'initial' }}>Create your account</button>
                    </span>
                    <form onSubmit={handleSubmit}>
                        <div className="signup-fullname">
                            <div className="signup-input-field">
                                <span className="signup-text02 BodyMedium400">
                                    <span>Full Name</span>
                                </span>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full name..."
                                    className="signup-input-field01"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>

                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                className="signup-input-field02"
                                value={formData.lastName}
                                onChange={handleChange}
                            style={{width:"48%"}}/>
                        </div>
                        <div className="signup-input-field03">
                            <span className="signup-text04 BodyMedium400">
                                <span>Username</span>
                            </span>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username..."
                                className="signup-input-field04"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="signup-input-field05">
                            <span className="signup-text06 BodyMedium400">
                                <span>E-mail</span>
                            </span>
                            <input
                                type="text"
                                name="email"
                                placeholder="E-mail address..."
                                className="signup-input-field06"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="signup-input-field07">
                            <span className="signup-text08 BodyMedium400" style={{borderRadius:'6px'}}>
                                <span>Choose your role:</span>
                            </span>
                            <div className="signup-input-field08" style={{borderRadius:'6px'}}>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="signup-text10 BodyLarge400"
                                    style={{ width: '100%'}}>
                                    <option value="teacher" >Teacher</option>
                                    <option value="student">Student</option>
                                </select>
                            </div>
                        </div>
                        <div className="signup-password">
                            <div className="signup-input-field09">
                                <label className="signup-text12 BodyMedium400" style={{borderRadius:'6px'}}>
                                    Password
                                    <div className="signup-input-field10" style={{borderRadius:'6px'}}>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password..."
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="signup-text14 BodyLarge400"
                                            aria-label="Create password"
                                       style={{borderRadius:'6px'}} />
                                    </div>
                                </label>
                            </div>
                            <div className="signup-input-field11">
                                <label className="signup-text16 BodyMedium400" style={{borderRadius:'6px'}}>
                                    Confirm Password
                                    <div className="signup-input-field12" style={{borderRadius:'6px'}}>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm Password..."
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="signup-text18 BodyLarge400"
                                            aria-label="Confirm password"
                                            style={{borderRadius:'6px'}} />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <button type="submit" onClick={handleSubmit} className="signup-buttons">

                            <span className="signup-text20 ButtonM">
                                <Link to='/mycoursestud'><span style={{ cursor: 'pointer' }}>Create account →</span></Link>
                            </span>
                            <div className="signup-arrow-right"></div>

                        </button>
                    </form>
                </div>
            </div>

            <Link to="/signin" className="signup-buttons1">
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
            <span className="signup-text30 h3">
                <span style={{ color: 'white', fontSize: '20px' }}>Synaptix</span>
            </span>
        </div>
    );
}

export default Signup;
