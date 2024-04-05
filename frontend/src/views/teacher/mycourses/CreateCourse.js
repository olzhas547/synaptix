import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { animated } from 'react-spring';
import './CreateCourse.css';

const CreateCourse = () => {
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

    const [selectedImage, setSelectedImage] = useState(null);

    const steps = ['Course Info', 'Course module', 'Finish'];

    const [activeStep, setActiveStep] = useState(0);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'thumbnail') {
            setSelectedImage(URL.createObjectURL(files[0]));
        } else if (files) {
            setForm({ ...form, certificate: files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    }

    const handleNext = () => {
        if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
    }

    const progress = useSpring({
        from: { width: '0%' },
        to: { width: `${((activeStep + 1) / steps.length) * 100}%` },
    });
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/create_course', form);
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="Form-All">
            <h1 tabIndex="0">Create Course</h1>
            <Stepper activeStep={activeStep} style={{backgroundColor:"#F5F5F5", color:'#1677FF'}}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {activeStep === 0 && (
                <form>
                    <h2>Course Info</h2>
                    <div className="form-group">
                        <label htmlFor="courseName">Course Name:</label>
                        <input
                            type="text"
                            className="form-control"
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
                            name="courseRequirements"
                            value={form.courseRequirements}
                            onChange={handleChange}
                            required
                            aria-label="Course Requirements"
                        />
                    </div>
                    {/* rest of your form fields... */}
                </form>
            )}

            {activeStep === 1 && (
                <form>
                    <h2>Choose Image</h2>
                    <input
                        type="file"
                        id="thumbnail"
                        name="thumbnail"
                        accept="image/*"
                        onChange={handleChange}
                        aria-label="Choose an Image"
                    />
                    {selectedImage && <img src={selectedImage} alt="Selected Image" />}
                </form>
            )}

            {/* rest of your steps... */}

            <div>
                <animated.div style={{...progress, backgroundColor: '#007BFF'}} aria-label="form progress" />
                {activeStep === steps.length - 1 ?
                    <button type="submit" aria-label="Submit the Form" onClick={handleSubmit}>Submit</button> :
                    <button aria-label="Next Step" onClick={handleNext}>Next</button>
                }
            </div>
        </div>
    );
};

export default CreateCourse;
