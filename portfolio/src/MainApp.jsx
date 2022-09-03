import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import FallbackSpinner from "./components/FallbackSpinner";
// import NavBarWithRouter from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import endpoints from "./constants/EndPoint";

function MainApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.routes, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  console.log("===========>", data);
  
  return (
    <div className="MainApp">
      <main className="main">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About header="About" />} />
          <Route exact path="/skills" element={<Skills header="Skills" />} />
          <Route exact path="/education" element={<Education header="Education" />} />
          <Route exact path="/experience" element={<Experience header="Experience" />} />
          <Route exact path="/projects" element={<Projects header="Projects" />} />
          {/* {data &&
              data.sections.map((route) => {
                console.log("===========>", route)
                const SectionComponent = React.lazy(() => import("./components/" + route.component));
                
                return (
                  <Route
                    key={route.headerTitle}
                    path={route.path}
                    element={() => <SectionComponent header={route.headerTitle} />}
                  />
                );
              })} */}
        </Routes>
      </main>
    </div>
  );
}

export default MainApp;
