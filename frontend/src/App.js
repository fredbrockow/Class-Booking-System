import styled from "styled-components";

import { 
  BrowserRouter as Router, 
  Routes,
  Route, 
} from "react-router-dom";
import RequireAuth from "./Components/RequireAuth";

import GlobalStyles from "./GlobalStyles";
import Layout from "./Components/Layout/Layout";

/* public*/
import Home from "./Components/Home/Home";
import Login from "./Components/Login-SignUp/Login";
import AboutUs from "./Components/AboutUs/AboutUs";
import Schedule from "./Components/Schedule/Schedule";
import Page404 from "./Components/Page404/Page404";

/*User*/
import UserPanel from "./Components/UserPanel/UserPanel";
import UserSidePanel from "./Components/UserPanel/UserSidePanel";
import UserProfile from "./Components/UserPanel/UserProfile";
import UserClass from "./Components/UserPanel/UserClass";

/*Admin*/
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import UsersPerWeek from "./Components/AdminPanel/BarCharts/UsersPerWeek";
import UsersPerClass from "./Components/AdminPanel/BarCharts/UsersPerClass";
import EditTeachers from "./Components/AdminPanel/Edits/EditTeachers";
import EditClasses from "./Components/AdminPanel/Edits/EditClasses";
import EditCalendar from "./Components/AdminPanel/Edits/EditCalendar";


/**
 *  Obviously note secure. Will change it if I have time to go 
 *  full JSON Web Token
 */
const ROLES = {
  admin: 147852369,
  user : 123456789
}

function App() {

  return (
     <Main>
      <Router>
        <GlobalStyles/>
        <Routes>
          <Route path="/" element={<Layout/>} >
                
                {/* Public Routes */}
                <Route index element={<Home/>} />
                <Route path="schedule" element={<Schedule/>} />
                <Route path="login" element={<Login/>} />
                <Route path="about" element={<AboutUs/>} />

                {/* protected users Routes */}
                <Route element={<RequireAuth allowedRoles = {[ROLES.user, ROLES.admin]}/>} >
                  <Route path="user" element={<UserPanel/>} >
                    <Route index element={<UserProfile/>} />
                    <Route path="userProfile" element={<UserProfile/>} />
                    <Route path="userClass" element={<UserClass/>} />
                  </Route>
                </Route>

                {/* protected admin Routes */}
                <Route element={<RequireAuth allowedRoles = {[ROLES.admin]}/> } >
                  <Route path="admin//*" element={<AdminPanel/>} >
                    <Route path= "editTeachers" element = {<EditTeachers/>} /> 
                    <Route path= "editClasses" element = {<EditClasses/>} /> 
                    <Route path= "editCalendar" element = {<EditCalendar/>} /> 
                    <Route path= "usersPerWeek" element = {<UsersPerWeek/>} /> 
                    <Route path= "usersPerClass" element = {<UsersPerClass/>} />
                  </Route>
                </Route>
                  
                <Route path="*" element={<Page404/>} />
          </Route>
        </Routes>
      </Router>
     </Main>
  );
}

const Main = styled.div`
  height: 100vh;
  
`;

export default App;
