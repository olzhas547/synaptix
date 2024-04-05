import React from 'react';
import './MyCourse.css'
import {CiCirclePlus} from "react-icons/ci";
import {Link} from "react-router-dom";

function MyCourse(props) {
    return (
        <div className="MyCourse">
            <div className="MyCourse-Up">
                <div className="MyCourse-Title">
                    <h1>My courses</h1>
                </div>

                <div className="MyCourse-button">
                    <Link to='/CreateCourse' ><button><CiCirclePlus color={'white'}/> Create new course</button></Link>
                </div>
            </div>

        </div>
    );
}

export default MyCourse;