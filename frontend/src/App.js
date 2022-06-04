import styled from "styled-components";

import { 
  BrowserRouter as Router, 
  Routes,
  Route, 
} from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login-SignUp/Login";
import AboutUs from "./Components/AboutUs/AboutUs";
import Page404 from "./Components/Page404/Page404";

/* To ping the server DELETE ME */
import ServerTest from "./ServerTest";


function App() {

  return (
    <Router>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="about" element={<AboutUs/>}/>
              <Route path="*" element={<Page404/>}/>

              {/* To ping the server DELETE ME */}
              <Route path="serverTest" element={<ServerTest/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

const Main = styled.div``;

export default App;
