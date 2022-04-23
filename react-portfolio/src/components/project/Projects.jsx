import React from "react";
import { Outlet } from "react-router-dom";

function Projects() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="font-weight-light text-center mt-5">Projects page</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Projects;