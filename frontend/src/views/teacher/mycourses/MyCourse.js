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
                    <Link to='/createcourse' style={{width: '180px', height: '32px', backgroundColor: '#007bff', color: 'white', borderRadius: '5px', fontFamily:'SF Pro Text', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}} aria-label="Create new course"><CiCirclePlus color={'white'} style={{fontFamily:'SF Pro Text', marginRight:'5px'}}/><span>Create new course</span></Link>                </div>

            </div>
        </div>
    );
}
export default MyCourse;