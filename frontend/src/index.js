import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'

import './style.css'
// import Explore from './views/explore/explore'
// import uxui from './views/explore/uxui'
import Dashboard from "./views/teacher/mycourses/Dashboard";
// import mycourses from "./views/mycourses/mycourses";
// import cinema4d from "./views/mycourses/cinema4d";
// import discussions from "./views/mycourses/discussions";
// import resources from "./views/mycourses/resources";
// import transcripts from "./views/mycourses/transcripts";
// import About from "./views/mycourses/about";
// import homework3 from "./views/homework/homework3";
// import testResult from "./views/homework/test-result";
// import Test from "./views/homework/test";
// import Addhomework from './views/teacher/mycourses/addhomework'
// import Coursemodules from './views/teacher/mycourses/coursemodules'
// import Upload from './views/teacher/mycourses/upload'
// import Mycourse from './views/teacher/mycourses/mycourse'
// import Previewtest from './views/addtest/previewtest'
// import Addtest from './views/addtest/addtest'
// import Calendar from './views/teacher/dashboard/calendar'
// import DashboardTeacher from './views/teacher/dashboard/dashboard-teacher'
// import Webinar from './views//teacher/webinar/webinar'
// import Createwebinar from './views//teacher/webinar/createwebinar'
import MAINPAGE from "./views/main/mainpage";
import Signup from './views//signin-up/signup'
import Signin from './views/signin-up/signin'
import NotFound from "./views/main/not-found.js";
// import chat from "./views/chat/chat";
// import certificate from "./views/certificate/certificate";
// import upcomingwebinars from "./views/webinarst/upcomingwebinars";
import CreateCourse from "./views/teacher/mycourses/CreateCourse";
import Sidebar from "./views/teacher/Sidebar/Sidebar";
import MyCourse from "./views/teacher/mycourses/MyCourse";
import main from "./views/main/Main";
import Main from "./views/main/Main";
import AddTest from "./views/teacher/mycourses/AddTest";
import AddHomework from "./views/teacher/mycourses/AddHomework";
import PreviewTest from "./views/teacher/mycourses/PreviewTest";
import SidebarStud from "./views/student/StudentSidebar/SidebarStud";
import DashboardStud from "./views/student/DashStud/DashboardStud";
import MyCourseStud from "./views/student/MyCourseStud/MyCourseStud";
import WebinarStud from "./views/student/WebinarStud/WebinarStud";
import AddLecture from "./views/teacher/mycourses/AddLecture";
import Explore from "./views/teacher/mycourses/Explore";
import Pagination from "./views/teacher/NumberOfPages/Pagination";

const App = () => {
    return (
        // <Router>
        //   <Switch>
        //     <Route component={MAINPAGE} exact path="/" />
        //     <Route component={Main} exact path="/Main" />
        //     <Route component={Signup} exact path="/signup" />
        //     <Route component={Signin} exact path="/signin" />
        //     <Route component={Sidebar} exact path="/Sidebar" />
        //     <Route component={CreateCourse} exact path="/CreateCourse" />
        //     <Route component={Dashboard} exact path="/Dashboard" />
        //     {/*<Route component={Explore} exact path="/explore" />*/}
        //     {/*<Route component={uxui} exact path="/uxui" />*/}
        //     {/*<Route component={About} exact path="/about" />*/}
        //     {/*<Route component={mycourses} exact path="/mycourses" />*/}
        //     {/*<Route component={cinema4d} exact path="/cinema4d" />*/}
        //     {/*<Route component={discussions} exact path="/discussions" />*/}
        //     {/*<Route component={resources} exact path="/resources" />*/}
        //     {/*<Route component={transcripts} exact path="/transcripts" />*/}
        //     {/*<Route component={homework3} exact path="/homework" />*/}
        //     {/*<Route component={Test} exact path="/test" />*/}
        //     {/*<Route component={testResult} exact path="/testresult" />*/}
        //     {/*<Route component={Coursemodules} exact path="/coursemodules" />*/}
        //     {/*<Route component={Upload} exact path="/upload" />*/}
        //     {/*<Route component={Mycourse} exact path="/mycourse" />*/}
        //     {/*<Route component={Previewtest} exact path="/preview" />*/}
        //     {/*<Route component={Addtest} exact path="/addtest" />*/}
        //     {/*<Route component={Calendar} exact path="/Calendar" />*/}
        //     {/*<Route component={DashboardTeacher} exact path="/dashboard-teacher" />*/}
        //     {/*<Route component={Webinar} exact path="/Webinar" />*/}
        //     {/*<Route component={Createwebinar} exact path="/createwebinar" />*/}
        //     {/*<Route component={chat} exact path="/chat" />*/}
        //     {/*<Route component={certificate} exact path="/certificate" />*/}
        //     {/*<Route component={upcomingwebinars} exact path="/upcomingwebinars" />*/}
        //     <Route component={howto} exact path="/howto" />
        //     <Route component={NotFound} path="**" />
        //     <Redirect to="**" />
        //   </Switch>
        // </Router>
        <Router>
            <Switch>
                <Route component={Main} exact path="/"/>
                <Route component={Signup} exact path="/signup"/>
                <Route component={Signin} exact path="/signin"/>
                <Route component={Sidebar} exact path={"/sidebar"}/>
                <Route component={SidebarStud} exact path={"/sidebarstud"}/>
                <Route component={Pagination} exact path={"/pagination"}/>



                <Route path="/dashboard">
                    <Sidebar>
                        <Dashboard/>
                    </Sidebar>
                </Route>

                <Route path="/createcourse">
                    <Sidebar>
                        <CreateCourse/>
                    </Sidebar>
                </Route>

                <Route path="/mycourse">
                    <Sidebar>
                        <MyCourse/>
                    </Sidebar>
                </Route>

                <Route path="/addhomework">
                    <Sidebar>
                        <AddHomework/>
                    </Sidebar>
                </Route>

                <Route path="/addlecture">
                    <Sidebar>
                        <AddLecture/>
                    </Sidebar>
                </Route>

                <Route path="/addtest">
                    <Sidebar>
                        <AddTest/>
                    </Sidebar>
                </Route>

                <Route path="/explore">
                    <Sidebar>
                        <Explore/>
                    </Sidebar>
                </Route>

                <Route path="/previewtest">
                    <Sidebar>
                        <PreviewTest/>
                    </Sidebar>
                </Route>

                <Route path="/dashboardstud">
                    <SidebarStud>
                        <DashboardStud/>
                    </SidebarStud>
                </Route>

                <Route path="/mycoursestud">
                    <SidebarStud>
                        <MyCourseStud/>
                    </SidebarStud>
                </Route>

                <Route path="/webianerstud">
                    <SidebarStud>
                        <WebinarStud/>
                    </SidebarStud>
                </Route>




                <Route component={NotFound} path="**"/>
                <Redirect to="**"/>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))
