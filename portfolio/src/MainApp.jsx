import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import FallbackSpinner from "./components/FallbackSpinner";
// import NavBarWithRouter from "./components/NavBar";
import Home from "./components/Home";
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
        <Routes>
          <Route exact path="/" element={<Home />} />
          {data &&
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
              })}
        </Routes>
      </main>
    </div>
  );
}

export default MainApp;
