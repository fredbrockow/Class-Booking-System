import styled from "styled-components";

import { 
  BrowserRouter as Router, 
  Routes,
  Route, 
} from "react-router-dom";
import RequireAuth from "./Components/RequireAuth";

import GlobalStyles from "./GlobalStyles";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login-SignUp/Login";
import AboutUs from "./Components/AboutUs/AboutUs";

import UserClass from "./Components/UserClass/UserClass";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import Schedule from "./Components/Schedule/Schedule";

import Page404 from "./Components/Page404/Page404";

/* To ping the server DELETE ME */
import ServerTest from "./ServerTest";
import UsersPerWeek from "./Components/AdminPanel/BarCharts/UsersPerWeek";
import UsersPerClass from "./Components/AdminPanel/BarCharts/UsersPerClass";

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
          <Route path="/" element={<Layout/>}>
                
                {/* Public Routes */}
                <Route index element={<Home/>}/>
                <Route path="schedule" element={<Schedule/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="about" element={<AboutUs/>}/>

                {/* protected users Routes */}
                <Route element={<RequireAuth allowedRoles = {[ROLES.user, ROLES.admin]}/> } >
                    <Route path="myClass" element={<UserClass/>}/>
                </Route>

                {/* protected admin Routes */}
                {/* <Route element={<RequireAuth allowedRoles = {[ROLES.admin]}/> } >
                  <Route path="admin" element={<AdminPanel/>}/>
                </Route> */}
                  
                  
                  {/* FOR TEST ONLY NEED TO BE BACK IN THE PROTECTED AREA ONCE DONE */}
                  <Route path="admin//*" element={<AdminPanel/>}>
                    <Route path= "usersPerWeek" element = {<UsersPerWeek/>}/> 
                    <Route path= "usersPerClass" element = {<UsersPerClass/>}/>
                  </Route>
                
                {/* To ping the server DELETE ME */}
                <Route path="serverTest" element={<ServerTest/>}/>

                <Route path="*" element={<Page404/>}/>
                
          </Route>
        </Routes>
      </Router>
     </Main>
  );
}

const Main = styled.div`
  background-color: cornsilk;
  height: 100vh;
`;

export default App;
