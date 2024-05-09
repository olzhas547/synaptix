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
            const response = await axios.post("", course);
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
ррр
        </div>
    );
};

export default Dashboard;