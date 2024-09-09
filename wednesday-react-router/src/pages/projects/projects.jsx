import React from "react";
import "./Projects.scss";
import img1 from "../../assets/img/project-1.jpg";
import img2 from "../../assets/img/project-2.jpg";
import img3 from "../../assets/img/project-3.jpg";
import img4 from "../../assets/img/project-4.jpg";
import img5 from "../../assets/img/project-5.jpg";
import img6 from "../../assets/img/project-6.jpg";

const Projects = () => {
  return (
    <div>
      <main className="projects">
          <div className="projects__items">
            <div className="projects__item">
              <img src={img1} alt="My Project 1" />
            </div>

            <div className="projects__item">
              <img src={img2} alt="My Project 2" />
            </div>

            <div className="projects__item">
              <img src={img3} alt="My Project 3" />
            </div>
          </div>
          <div className="projects__items">
            <div className="projects__item">
              <img src={img4} alt="My Project 4" />
            </div>

            <div className="projects__item">
              <img src={img5} alt="My Project 5" />
            </div>

            <div className="projects__item">
              <img src={img6} alt="My Project 6" />
            </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
