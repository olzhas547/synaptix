import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {SiD} from "react-icons/si";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
    const [courses, setCourses] = useState([]);
    const [coursePrice, setCoursePrice] = useState("Free");
    const [courseName, setCourseName] = useState("");
    const [courseLevel, setCourseLevel] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const courseNameInput = useRef(null);
    const courseLevelInput = useRef(null);

    const handleRadioChange = (e) => {
        setCoursePrice(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (courseNameInput.current.value === "") {
            alert("Please enter course name.");
            return;
        }

        const course = {
            name: courseName,
            description: courseDescription,
        };

        try {
            const response = await axios.post("https://example.com/api/courses", course);
            console.log("Course created:", response.data);
            fetchData(); // Reload courses
        } catch (error) {
            console.error("Error creating course:", error);
        }
    };

    // Fetch Data
    const fetchData = async () => {
        try {
            const response = await axios.get("https://example.com/api/courses");
            setCourses(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1 id="dashboard-heading">Courses Dashboard</h1>
            {courses.length > 0
                ? <ul aria-labelledby="dashboard-heading">
                    {courses.map((course) => (
                        <li key={course.id}>{course.name}</li>
                    ))}
                </ul>
                : <p>No courses available.</p>
            }

            <form onSubmit={handleSubmit}>
                <h2>Create a new Course</h2>
            </form>
        </div>
    );
};

export default Dashboard;