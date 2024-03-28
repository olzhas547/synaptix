import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Explore from './views/explore/explore'
import uxui from './views/explore/uxui'
import Dashboard from "./views/dashboard/dashboard";
import mycourses from "./views/mycourses/mycourses";
import cinema4d from "./views/mycourses/cinema4d";
import discussions from "./views/mycourses/discussions";
import resources from "./views/mycourses/resources";
import transcripts from "./views/mycourses/transcripts";
import About from "./views/mycourses/about";
import homework3 from "./views/homework/homework3";
import testResult from "./views/homework/test-result";
import Test from "./views/homework/test";
import Addhomework from './views/teacher/mycourses/addhomework'
import Coursemodules from './views/teacher/mycourses/coursemodules'
import Upload from './views/teacher/mycourses/upload'
import Mycourse from './views/teacher/mycourses/mycourse'
import Createcourse from './views/teacher/mycourses/createcourse'
import Previewtest from './views/addtest/previewtest'
import Addtest from './views/addtest/addtest'
import Calendar from './views/teacher/dashboard/calendar'
import DashboardTeacher from './views/teacher/dashboard/dashboard-teacher'
import Webinar from './views//teacher/webinar/webinar'
import Createwebinar from './views//teacher/webinar/createwebinar'
import MAINPAGE from "./views/main/mainpage";
import Main from "./views/main/main";
import Signup from './views//signin-up/signup'
import Signin from './views/signin-up/signin'
import NotFound from "./views/main/not-found.js";
import chat from "./views/chat/chat";
import certificate from "./views/certificate/certificate";
import upcomingwebinars from "./views/webinarst/upcomingwebinars";
import howto from "./views/webinarst/howto";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={MAINPAGE} exact path="/" />
        <Route component={Main} exact path="/Main" />
        <Route component={Signup} exact path="/signup" />
        <Route component={Signin} exact path="/signin" />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={Explore} exact path="/explore" />
        <Route component={uxui} exact path="/uxui" />
        <Route component={About} exact path="/about" />
        <Route component={mycourses} exact path="/mycourses" />
        <Route component={cinema4d} exact path="/cinema4d" />
        <Route component={discussions} exact path="/discussions" />
        <Route component={resources} exact path="/resources" />
        <Route component={transcripts} exact path="/transcripts" />
        <Route component={homework3} exact path="/homework" />
        <Route component={Test} exact path="/test" />
        <Route component={testResult} exact path="/testresult" />
        <Route component={Coursemodules} exact path="/coursemodules" />
        <Route component={Upload} exact path="/upload" />
        <Route component={Mycourse} exact path="/mycourse" />
        <Route component={Createcourse} exact path="/createcourse" />
        <Route component={Addhomework} exact path="/addhomework" />
        <Route component={Previewtest} exact path="/preview" />
        <Route component={Addtest} exact path="/addtest" />
        <Route component={Calendar} exact path="/Calendar" />
        <Route component={DashboardTeacher} exact path="/dashboard-teacher" />
        <Route component={Webinar} exact path="/Webinar" />
        <Route component={Createwebinar} exact path="/createwebinar" />
        <Route component={chat} exact path="/chat" />
        <Route component={certificate} exact path="/certificate" />
        <Route component={upcomingwebinars} exact path="/upcomingwebinars" />
        <Route component={howto} exact path="/howto" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
