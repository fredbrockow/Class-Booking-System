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

import Page404 from "./Components/Page404/Page404";

/* To ping the server DELETE ME */
import ServerTest from "./ServerTest";

/**
 *  Obviously note secure will change it if I have time to go 
 *  full JSON Web Token
 */
const ROLES = {
  admin: 147852369,
  user : 123456789
}

function App() {

  return (
    <Router>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Layout/>}>
              
              {/* Public Routes */}
              <Route index element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="about" element={<AboutUs/>}/>

              {/* protected users Routes */}
              <Route element={<RequireAuth allowedRoles = {[ROLES.user, ROLES.admin]}/> } >
                  <Route path="myClass" element={<UserClass/>}/>
              </Route>

              {/* protected admin Routes */}
              <Route element={<RequireAuth allowedRoles = {[ROLES.admin]}/> } >
                <Route path="admin" element={<AdminPanel/>}/>
              </Route>
              
              {/* To ping the server DELETE ME */}
              <Route path="serverTest" element={<ServerTest/>}/>

              <Route path="*" element={<Page404/>}/>
              
        </Route>
      </Routes>
    </Router>
  );
}

const Main = styled.div``;

export default App;
