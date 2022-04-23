import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center">
          <div>
            <h1 class="font-weight-light text-center">About</h1>
            <h2 class="font-weight-light">Education</h2>
            <table class="table">
              <tbody>
                <tr>
                  <td>Web Development</td>
                  <td>Current Standing: Honors</td>
                  <td>Humber College, Toronto</td>
                  <td>Present</td>
                </tr>
                <tr>
                  <td>Bachelor of Engineering - Computer Engineering</td>
                  <td>CGPI : 8.11</td>
                  <td>St. Francis Institute of Technology, Mumbai</td>
                  <td>2017 - 2021</td>
                </tr>
              </tbody>
            </table>
            
            <div class="col-lg-4 aboutStyle">
              <h2 class="font-weight-light">Skills</h2>
              <ul>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node JS</li>
                <li>Wordpress</li>
                <li>PHP</li>
                <li>C</li>
                <li>C++</li>
                <li>Blender</li>
                <li>Adobe Photoshop</li>
                <li>Microsoft Office</li>
              </ul>
            </div>
            <div class="col-lg-4 aboutStyle">
              <h2 class="font-weight-light">Languages</h2>
              <ul>
                <li>English</li>
                <li>Hindi</li>
                <li>Konkani</li>
                <li>Marathi</li>
                <li>French</li>
              </ul>
            </div>
                
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;