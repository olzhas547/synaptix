import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

import './addhomework.css'

const Addhomework = (props) => {
    const [form, setForm] = useState({
        courseName1: '',
        courseName2: ''
    });

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    return (
        <div className="AddHomework-container">
            <div className="AddHomework-inside">

                <div className="AddHomework-title">
                    <h1>Add Homework</h1>
                </div>

                <div className="AddHomework-form">

                    <div className="form-group-up">

                        <div className="form-group">
                            <label htmlFor="courseName1">Name Homework</label>
                            <input
                                type="text"
                                className="form-control"
                                id="courseName1"
                                name="courseName1"
                                value={form.courseName1}
                                onChange={handleChange}
                                required
                                aria-label="Course Name 1"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="courseName2">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="courseName2"
                                name="courseName2"
                                value={form.courseName2}
                                onChange={handleChange}
                                required
                                aria-label="Course Name 2"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Addhomework;