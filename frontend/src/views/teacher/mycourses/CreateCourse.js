import React, {useCallback, useState, useEffect} from 'react';
import {useSpring} from 'react-spring';
import {Stepper, Step, StepLabel} from '@material-ui/core';
import {useDropzone} from 'react-dropzone';
import {animated} from 'react-spring';
import {RiInbox2Line} from "react-icons/ri";
import './CreateCourse.css';
import ImageUse from "./ImageUse";
import {Link} from "react-router-dom";
import {DropzoneComponent1, DropzoneComponent2} from "./DropzoneComponent";
import axios from "axios";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const CreateCourse = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPaid, setIsPaid] = useState(true);
    const [price, setPrice] = useState(1000);
    const [currency, setCurrency] = useState('USD');
    const [isMentor, setIsMentor] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [files, setFiles] = useState([]);

    const handleMentorToggle = () => {
        setIsMentor(current => !current);
    };


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: useCallback((acceptedFiles) => {
            setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
            acceptedFiles.forEach(file => {
                console.log(file);
            });
        }, []),
        noKeyboard: true
    });

    const steps = [
        { title: 'Tab 1: Course Info', content: 'Course Info' },
        { title: 'Tab 2: Course module', content: 'Course Module' },
        { title: 'Tab 3: Finish', content: 'Finish' },
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'thumbnail') {
            setSelectedImage(URL.createObjectURL(files[0]));
        } else if (files) {
            setForm({ ...form, certificate: files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleNext = () => {
        if (activeStep < steps.length - 1) setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const progress = useSpring({
        from: { width: '0%' },
        to: { width: `${((activeStep + 1) / steps.length) * 100}%` },
    });

    useEffect(() => {
        document.title = steps[activeStep].title;
    }, [activeStep]);




    const handleClick = () => {
        setIsOpen(!isOpen);
    };


    const onDrop = useCallback((acceptedFiles) => {
        setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
        acceptedFiles.forEach(file => {
            console.log(file)
        });
    }, []);

    const [form, setForm] = useState({
        courseName: '',
        description: '',
        thumbnail: '',
        studentLearning: '',
        courseRequirements: '',
        courseLevel: '',
        courseLanguage: '',
        coursePrice: 'free',
        certificate: null,

    });
    const validateForm = () => {
        let errors = {};
        if (!form.courseName) {
            errors.courseName = 'Course name is required';
        }
        return errors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        const formData = new FormData();
        Object.keys(form).forEach(key => {
            formData.append(key, form[key]);

        });

        try {
            console.log(formData)
            const response = await axios.post('http://localhost:8000/api/create_course', formData);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('There was an error!', error);
        } finally {
            setSubmitting(false);
        }
    };


    useEffect(() => {
        document.title = steps[activeStep].title;
    }, [activeStep]);


    return (
        <div className="Form-All">
            <Stepper activeStep={activeStep} style={{backgroundColor: "#F5F5F5", color: '#1677FF'}}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel aria-label={`Step ${index + 1}: ${step.content}`}>{step.content}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {activeStep === 0 && (
                <form onClick={handleSubmit}>
                    <div className='first_form'>
                        <h2>Course Info</h2>
                        <div className="form-group">
                            <label htmlFor="courseName">Course Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Introduction to Cinema 4d"
                                id="courseName"
                                name="courseName"
                                value={form.courseName}
                                onChange={handleChange}
                                required
                                aria-label="Course Name"
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                className="form-control"
                                id="description"
                                placeholder="Text"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                required
                                aria-label="Description"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="studentLearning">What students will learn (optional):</label>
                            <textarea
                                className="form-control"
                                id="studentLearning"
                                placeholder="Textarea"
                                name="studentLearning"
                                value={form.studentLearning}
                                onChange={handleChange}
                                required
                                aria-label="What students will learn"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="courseRequirements">Course Requirements:</label>
                            <textarea
                                className="form-control"
                                id="courseRequirements"
                                placeholder="Textarea"
                                name="courseRequirements"
                                value={form.courseRequirements}
                                onChange={handleChange}
                                required
                                aria-label="Course Requirements"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="courseLevel">Level of course:</label>
                            <select id="courseLanguage" name="courseLanguage">
                                <option value="Beginner">Beginner</option>
                                <option value="Elementary">Elementary</option>
                                <option value="PreIntermediate">Pre Intermediate</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="UpperIntermediate">Upper Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="courseLanguage">Language of course:</label>
                            <select id="courseLanguage" name="courseLanguage">
                                <option value="English">English</option>
                                <option value="Spanish">Spanish</option>
                                <option value="French">French</option>
                            </select>
                        </div>

                        <h5 style={{paddingTop: "10px", fontSize: '20px', fontWeight: 'normal'}}>Mentor</h5>
                        <div className={"toggle-switch " + (isMentor ? 'mentor-active' : '')}>
                            <input
                                type="checkbox"
                                id="mentor"
                                name="isMentor"
                                checked={isMentor}
                                onChange={handleMentorToggle}
                                className="toggle-switch-checkbox"
                                aria-checked={isMentor}
                                aria-labelledby='mentorHeader'
                                role='switch'
                            />
                            <label className="toggle-switch-label" htmlFor="mentor">
                                <span className="toggle-switch-inner"></span>
                                <span className="toggle-switch-switch"></span>
                            </label>
                            <h6 style={{marginTop: '50px', width: '200px', display: 'flex', color: 'silver'}}>
                                Is this course will be with mentor?
                            </h6>
                        </div>

                        <div className="course-pricing">
                            <label>Choose your course option:</label>
                            <div className="options">
                                <label>
                                    <input
                                        type="radio"
                                        name="pricing"
                                        checked={!isPaid}
                                        onChange={() => {
                                            setIsPaid(false);
                                            setPrice('');
                                        }}
                                    />
                                    Free
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="pricing"
                                        checked={isPaid}
                                        onChange={() => setIsPaid(true)}
                                    />
                                    Paid
                                </label>
                            </div>
                        </div>

                        <div className="course-price-input">
                            <label>Course price:</label>
                            <div className="input-group">
                                <input
                                    type="number"
                                    id="course-price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    disabled={!isPaid} // disable the input field when "Free" is selected
                                />
                                <select
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                    disabled={!isPaid} // disable the select field when "Free" is selected
                                >
                                    <option value="USD">$</option>
                                    <option value="EUR">€</option>
                                    <option value="JPY">¥</option>
                                    <option value="ТГ">Т</option>
                                    {/* Add more currencies as needed */}
                                </select>
                            </div>
                        </div>

                        <div className="Creating-button">
                            {activeStep === steps.length - 1 ? (
                                <button type="submit" disabled={submitting}>
                                    {submitting ? 'Submitting...' : 'Submit'}
                                </button>
                            ) : (<button aria-label="Next Step" onClick={handleNext}>Next</button>)}
                        </div>
                    </div>
                </form>
            )}

            {activeStep === 1 && (
                <form>
                    <div className="second_form">
                        {/*<ImageUse/>*/}
                        <div className="CourseModule-title">
                            <h2 style={{textAlign: 'center', marginTop: '10px', fontSize: '30px'}}>Course modules</h2>
                        </div>


                        <div className="Lecture-container">

                            <div className="Lecture-up">
                                <h1 className="Lecture-title" style={{fontSize: "20px"}}>Lectures</h1>
                                <Link to='/addlecture'>
                                    <button>Add Lecture</button>
                                </Link>
                            </div>
                            {/*<div className="Lecture-image">*/}
                            {/*    <ImageUse/>*/}
                            {/*</div>*/}

                        </div>

                        <div className="Homework-container">
                            <div className="Homework-up">
                                <h1 className="Homework-title" style={{fontSize: "20px"}}>Homeworks</h1>
                                <Link to="/addhomework">
                                    <button>Add Homework</button>
                                </Link>
                            </div>

                            {/*<div className="Homework-image">*/}
                            {/*    <ImageUse/>*/}
                            {/*</div>*/}

                        </div>


                        <div className="Creating-button">
                            <animated.div style={{...progress, backgroundColor: '#007BFF'}} aria-label="form progress"/>
                            {activeStep === steps.length - 1 ?
                                <button type="submit" aria-label="Submit the Form">Submit</button> :
                                <button aria-label="Next Step" onClick={handleNext}>Next</button>
                            }
                        </div>
                    </div>
                </form>

            )}
            {activeStep === 2 && (
                <form>
                    <div className="third_form">
                        <div className="steps">
                            <IoIosCheckmarkCircleOutline size={90} style={{backgroundColor:'green', color:'white', borderRadius:'50%', border:''}}/>
                            <div className="steps-title">
                                <h2>You just created the course!</h2>
                            </div>
                            <div className="steps-text">
                                <p style={{color:'silver'}}>Objectively scale orthogonal collaboration and idea-sharing after enterprise-wide manufactured products.
                                    Compellingly strategize high-quality niche markets through sustainable.</p>
                            </div>
                            <Link to="/dashboard">
                                <button style={{marginTop:'50px',width:'200px', height:'50px',borderRadius:'10px', border:'#0056b3 1px solid', backgroundColor:'#0056b3', color:'white', cursor:'pointer'}}>To the Dashboards</button>
                            </Link>
                        </div>
                    </div>
                </form>

            )}
        </div>
    );
};

export default CreateCourse;
