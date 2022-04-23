import React from "react";

function Project() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <div class="projSection">
              <h2 class="font-weight-light">Blockbuster Movie Rentals</h2>
              <p>
                Passion project, also known as Blockbuster's admin system is an ASP.NET Web Application, developed using Entity Framework, that is used to manage the movies rented out by the store, as well as the list of rentals.
              </p>
              <a class="projLink" href="https://github.com/jendcruz22/PassionProject">Link to project</a>
            </div>
            <div class="projSection">
              <h2 class="font-weight-light">Mock Hotel Website</h2>
              <p>
                A mock hotel website developed using Node.js with Express and Pug.
              </p>
              <a class="projLink" href="https://github.com/jendcruz22/S2-JS/tree/main/JAssgn1-JennyDcruz">Link to project</a>
            </div>
            <div class="projSection">
              <h2 class="font-weight-light">RoboEats</h2>
              <p>
                A mock website developed for a robotic restaurant using HTML, CSS, and JavaScript.
              </p>
              <a class="projLink" href="https://roboeats.netlify.app/">Link to project</a>
            </div>
            <div class="projSection">
              <h2 class="font-weight-light">Symptom Search</h2>
              <p>
                A COVID-19 symptoms search website developed using HTML, CSS, and JavaScript.
              </p>
              <a class="projLink" href="https://symptomsearch.netlify.app/">Link to project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;