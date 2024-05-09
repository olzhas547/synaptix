import React,{useState} from 'react';
import './MyCourseStud.css'
import {Link} from "react-router-dom";
import {CiCirclePlus} from "react-icons/ci";
import { CiSearch } from "react-icons/ci";


function MyCourseStud(props) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Search term submitted:', searchTerm);
    };

    return (
        <div className="MyCourseStud">
            <div className="MyCourseStud-Title">
                <h1>My courses</h1>
            </div>
            <div className="MyCourseStud-inside">
                <div className="MyCourseStud-inside-in">
                    <form className="search-mycoursestud" onSubmit={handleSearchSubmit} role="search" >
                        <label htmlFor="search-input" className="visually-hidden">
                            Search the site:
                        </label>
                        <input
                            type="search"
                            id="search-input"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            aria-label="Search through site content"
                        />
                        <button type="submit" aria-label="Submit search" >
                            <CiSearch size="20px"/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MyCourseStud;