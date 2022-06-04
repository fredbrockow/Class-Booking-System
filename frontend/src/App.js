import styled from "styled-components";

import { 
  BrowserRouter as Router, 
  Routes,
  Route, 
} from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Page404 from "./Components/Page404/Page404";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="about" element={<AboutUs/>}/>
              <Route path="*" element={<Page404/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

const Main = styled.div``;

export default App;
