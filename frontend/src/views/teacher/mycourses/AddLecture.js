import React, {useRef, useState} from 'react';
import './AddLecture.css'
import axios from "axios";
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import {Link} from "react-router-dom";

function AddLecture(props) {
    const handleDateChange = (event) => {
        setDate(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('courseName1', form.courseName1);
        formData.append('courseName2', form.courseName2);
        formData.append('description', form.editorState.getCurrentContent().getPlainText(''));
        formData.append('video', video);
        formData.append('date', date);


        try {
            const response = await axios.post('http://localhost:5000/api/addhomework', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const [form, setForm] = useState({
        courseName1: '',
        courseName2: '',
        editorState: EditorState.createEmpty()
    });

    const [date, setDate] = useState('');
    const [video, setVideo] = useState(null);
    const [videoUrl, setVideoUrl] = useState(null);
    const [isToolbarOpen, setIsToolbarOpen] = useState(false);

    const videoInputRef = useRef(); // Declare videoInputRef


    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    };

    const handleVideoChange = (event) => {
        let videoFile = event.target.files[0];
        setVideo(videoFile);

        let videoFileUrl = URL.createObjectURL(videoFile);
        setVideoUrl(videoFileUrl);
    }
    const removeVideo = () => {
        setVideo(null);
        setVideoUrl(null);
        videoInputRef.current.value = '';
    }
    const handleClick = () => {
        videoInputRef.current.click();
    }


    const toggleToolbar = () => {
        setIsToolbarOpen(prevState => !prevState);
    }

    const handleEditorChange = (editorState) => {
        setForm({...form, editorState});
    };

    return (
        <div className="Addlecture-container">
            <div className="Addlecture-inside">
                <div className="Addlecture-title">
                    <h1>Add Lecture</h1>
                </div>

                <div className="Addlecture-inside-container">
                    <div className="Addlecture-form">
                        <div className="form-group-up" style={{borderRadius: '12.09px'}}>
                            <div className="form-group">
                                <label htmlFor="courseName1">Name Lecture</label>
                                <input
                                    type="text"
                                    placeholder="Name"
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
                                <label htmlFor="courseName2">Full Text</label>
                                <Editor
                                    editorState={form.editorState}
                                    toolbarClassName={`toolbarClassName$ { isToolbarOpen ? 'open' : ''}`}
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    onEditorStateChange={handleEditorChange}
                                    role="toolbar"
                                    aria-expanded={isToolbarOpen}
                                    aria-label="Content editing toolbar"
                                    aria-roledescription="toolbar"
                                    onClick={toggleToolbar}
                                />
                            </div>

                            <div className="add-video">
                                <button onClick={handleClick} className="custom-file-upload">
                                    Video
                                </button>
                                <input
                                    ref={videoInputRef}
                                    type="file"
                                    accept="video/*"
                                    onChange={handleVideoChange}
                                    aria-label="Video Input"
                                    style={{display: 'none'}}
                                />
                                {videoUrl &&
                                    <div className="video-container">
                                        <video width="320" height="240" controls>
                                            <source src={videoUrl} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                        <button onClick={removeVideo} className="close-btn">X</button>
                                    </div>
                                }
                            </div>

                            <div className="date-input-container" style={{marginLeft: '-20px'}}>
                                <label htmlFor="dateOfOpen">Date of Open</label>
                                <input
                                    type="date"
                                    id="dateOfOpen"
                                    name="dateOfOpen"
                                    value={date}
                                    onChange={handleDateChange}
                                />
                            </div>

                            <div className="button-publish">
                                <button onClick={handleSubmit}>Publish</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddLecture;