import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import './Sidebar.css';
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { BsCameraVideo } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { AiOutlineDatabase } from "react-icons/ai";
import {GrLanguage} from "react-icons/gr";
import {CiSearch} from "react-icons/ci";
import {AiOutlineMenuFold} from "react-icons/ai";
import {IoMdContact} from "react-icons/io";
import {IoIosNotificationsOutline} from "react-icons/io";
import img from './img/Frame 1000002598@2x.png'
import CreateCourse from "../mycourses/CreateCourse";
import Dashboard from "../mycourses/Dashboard";
import axios from "axios";
import MyCourse from "../mycourses/MyCourse";
import main from "../../main/Main";
import Footer from "../../main/Footer";
import Main from "../../main/Main";
import AddTest from "../mycourses/AddTest";
import AddHomework from "../mycourses/AddHomework";
import PreviewTest from "../mycourses/PreviewTest";

function Header(props) {
    const [currentLanguage, setCurrentLanguage] = useState('English');

    const switchLanguage = () => {
        const newLanguage = currentLanguage === 'English' ? 'French' : 'Kazakh';
        setCurrentLanguage(newLanguage);
        alert(`Switched language to ${newLanguage.toUpperCase()}`);
    };

    const [searchText, setSearchText] = useState('');

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
        <header role="banner" className={props.isSidebarOpen ? "header-open" : ""} style={{margin:'0',padding:'0'}}>
            <button
                id="burgerMenuButton"
                aria-controls="sidebar"
                aria-expanded={props.isSidebarOpen}
                onClick={props.toggleSidebar}>
                <AiOutlineMenuFold style={{marginLeft: '200px'}}/>
            </button>


            <div role="search" aria-label="Search field"
                 style={{
                     border: "1px solid silver",
                     borderRadius: "5px",
                     width: '30%'
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


            <div className="button-container">
                <button onClick={switchLanguage} aria-label="Change language">
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


function Sidebar(props) {
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
                <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
                <nav
                    id="sidebar"
                    className={isSidebarOpen ? "open" : ""}
                    role="navigation"
                    aria-hidden={!isSidebarOpen}
                    tabIndex="0">

                    <div className="Logo" style={{display: 'flex'}}>
                       <Link to="/" style={{display:"flex"}}><img src={img} width={30} height={30} style={{backgroundColor: "#F7F7FC", borderRadius:'4.8px'}}
                             alt="Synaptix logo"/><h1 style={{marginLeft: '0.5rem'}}>Synaptix</h1></Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/Dashboard" onClick={toggleSidebar} style={{fontFamily:'SF Pro Text'}}><IoSpeedometerOutline size={20} /> Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/MyCourse" onClick={toggleSidebar} style={{fontFamily:'SF Pro Text'}}><AiOutlineDatabase size={20}/> My Courses</Link>
                        </li>
                        <li>
                            <Link to="/statistics" onClick={toggleSidebar} style={{fontFamily:'SF Pro Text'}}><BsGraphUp size={20}/> Statistics</Link>
                        </li>
                        <li>
                            <Link to="/calendar" onClick={toggleSidebar} style={{fontFamily:'SF Pro Text'}}><CiCalendar size={20}/> Calendar</Link>
                        </li>
                        <li>
                            <Link to="/webinar" onClick={toggleSidebar} style={{fontFamily:'SF Pro Text'}}><BsCameraVideo size={20}/> Webinar</Link>
                        </li>
                        <li>
                            <Link to="/settings" onClick={toggleSidebar} style={{fontFamily:'SF Pro Text'}}><CiSettings size={20}/> Settings</Link>
                        </li>

                    </ul>
                </nav>

                <main id="mainContent">
                    <Switch>
                        <Route path="/CreateCourse" component={CreateCourse}/>
                        <Route path="/Dashboard" component={Dashboard}/>
                        <Route path="/MyCourse" component={MyCourse}/>
                        <Route path="/AddHomework" component={AddHomework}/>
                        <Route path="/AddTest" component={AddTest}/>
                        <Route path="/PreviewTest" component={PreviewTest}/>

                    </Switch>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default Sidebar;