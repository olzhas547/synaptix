import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import {IoSpeedometerOutline} from "react-icons/io5";
import {AiOutlineDatabase} from "react-icons/ai";
import {GrLanguage} from "react-icons/gr";
import {CiCalendar, CiSearch, CiSettings} from "react-icons/ci";
import {AiOutlineMenuFold} from "react-icons/ai";
import {IoMdContact} from "react-icons/io";
import {IoIosNotificationsOutline} from "react-icons/io";
import img from './img/Frame 1000002598@2x.png'
import axios from "axios";
import main from "../../main/Main";
import Footer from "../../teacher/Footer/Footer";
import DashboardStud from "../DashStud/DashboardStud";
import MyCourseStud from "../MyCourseStud/MyCourseStud";
import {BsCameraVideo, BsGraphUp} from "react-icons/bs";
import {TbFileInvoice} from "react-icons/tb";
import webinarStud from "../WebinarStud/WebinarStud";
import WebinarStud from "../WebinarStud/WebinarStud";


function HeaderStud(props) {
    const [currentLanguage, setCurrentLanguage] = useState('English');
    const [searchText, setSearchText] = useState('');

    const switchLanguage = () => {
        const newLanguage = currentLanguage === 'English' ? 'French' : 'Kazakh';
        setCurrentLanguage(newLanguage);
        alert(`Switched language to ${newLanguage.toUpperCase()}`);
    };

    const searchHandler = async () => {
        try {
            const response = await axios.post('YOUR_URL', {
                search: searchText
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <header role="banner" className={props.isSidebarOpen ? "header-open" : ""} style={{margin: '0', padding: '0'}}>
            <button
                id="burgerMenuButton"
                aria-controls="sidebar"
                aria-expanded={props.isSidebarOpen}
                onClick={props.toggleSidebar}>
                <AiOutlineMenuFold style={{marginLeft: '250px'}}/>
            </button>

            <div role="search" aria-label="Search field"
                 style={{
                     border: "1px solid silver",
                     borderRadius: "5px",
                     width: '30%',
                     display: 'inline-block',
                     alignItems: 'center'
                 }}>
                <input type="search" id="searchBar" placeholder="Search..." aria-label="Search input" value={searchText}
                       onChange={(e) => setSearchText(e.target.value)}/>
                <button aria-label="Search" onClick={searchHandler}>
                    <CiSearch style={{
                        backgroundColor: 'white',
                        color: 'black',
                        padding: '0, 10px'
                    }}/>
                </button>
            </div>

            <div className="button-container"
                 style={{fontFamily: 'SF Pro Text', display: 'inline-flex', alignItems: 'center'}}>
                <button onClick={switchLanguage} aria-label="Change language"
                        style={{fontFamily: 'SF Pro Text', display: 'inline-flex', alignItems: 'center'}}>
                    <GrLanguage/>
                    {currentLanguage === 'English' ? 'French' : 'Kazakh'}
                </button>

                <button onClick={() => alert("Notifications feature isn't implemented yet.")}
                        aria-label="Notifications">
                    <IoIosNotificationsOutline size={30} style={{marginRight: '5px'}}/>
                </button>

                <button onClick={() => alert("Viewing account isn't implemented yet.")} aria-label="Account">
                    <IoMdContact size={30} style={{marginRight: '20px'}}/>
                </button>
            </div>

        </header>
    );
}

function SidebarStud() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        let showHide = !isSidebarOpen;
        setSidebarOpen(showHide);

        if (showHide) setTimeout(() => {
            document.querySelector('nav[aria-hidden="false"]').focus();
        }, 0);
    };

    return (
        <Router>
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <HeaderStud isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>

                <nav
                    id="sidebar"
                    className={isSidebarOpen ? "open" : ""}
                    role="navigation"
                    aria-hidden={!isSidebarOpen}
                    tabIndex="0">

                    <div className="Logo" style={{display: 'flex', marginTop: '5px'}}>
                        <button onClick={() => window.location.href = '/'}
                                style={{
                                    display: "flex",
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    outline: 'none'
                                }}>
                            <img src={img} width={30} height={30}
                                 style={{backgroundColor: "initial", borderRadius: '4.8px'}}
                                 alt="Synaptix logo"/>
                            <h1 style={{marginLeft: '0.5rem'}}>Synaptix</h1>
                        </button>
                    </div>
                    <ul>
                        <li style={{display: "flex", marginTop: '40px'}}>
                            <Link to="/DashboardStud" onClick={toggleSidebar} style={{
                                fontFamily: 'SF Pro Text',
                                display: 'inline-flex',
                                alignItems: 'center'
                            }}><IoSpeedometerOutline size={20} style={{marginRight: '10px'}}/> Dashboard</Link>
                        </li>

                        <li>
                            <Link to="/MyCourseStud" onClick={toggleSidebar} style={{
                                fontFamily: 'SF Pro Text',
                                display: 'inline-flex',
                                alignItems: 'center'
                            }}><AiOutlineDatabase size={20} style={{marginRight: '10px'}}/> My Courses</Link>
                        </li>

                        <li>
                            <Link to="/MyCourseStud" onClick={toggleSidebar} style={{
                                fontFamily: 'SF Pro Text',
                                display: 'inline-flex',
                                alignItems: 'center'
                            }}><BsGraphUp size={20} style={{marginRight: '10px'}}/> Statistics</Link>
                        </li>

                        <li>
                            <Link to="/MyCourseStud" onClick={toggleSidebar} style={{
                                fontFamily: 'SF Pro Text',
                                display: 'inline-flex',
                                alignItems: 'center'
                            }}><CiCalendar size={20} style={{marginRight: '10px'}}/> Calendar</Link>
                        </li>
                        <li>
                            <Link to="/webianerstud" onClick={toggleSidebar} style={{
                                fontFamily: 'SF Pro Text',
                                display: 'inline-flex',
                                alignItems: 'center'
                            }}><BsCameraVideo  size={20} style={{marginRight: '10px'}}/> Webinar</Link>
                        </li>
                        <li>
                            <Link to="/MyCourseStud" onClick={toggleSidebar} style={{
                                fontFamily: 'SF Pro Text',
                                display: 'inline-flex',
                                alignItems: 'center'
                            }}><CiSettings size={20} style={{marginRight: '10px'}}/> Settings</Link>
                        </li>

                        {/* Other links */}
                    </ul>
                </nav>

                <main id="mainContent">
                    <Switch>
                        <Route path="/dashboardStud" component={DashboardStud}/>
                        <Route path="/myCourseStud" component={MyCourseStud}/>
                        <Route path="/webianerstud" component={WebinarStud}/>
                        <Route path=""/>
                        <Route path=""/>
                        <Route path=""/>
                    </Switch>
                </main>

                <Footer/>
            </div>
        </Router>
    );
}

export default SidebarStud;