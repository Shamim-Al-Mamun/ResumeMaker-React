import React from "react";
import { Link } from "react-router-dom";

import modern_resume_sample_1 from "../Templates/Images/modern_resume_sample_1.jpg";
import modern_resume_sample_2 from "../Templates/Images/modern_resume_sample_2.png";
import modern_resume_sample_3 from "../Templates/Images/modern_resume_sample_3.jpg";
function ResumeTemplates() {
  return (
    <div className="container my-3 overflow-hidden">
      <h2 className="mt-4 mb-5">
        Choose Format from these Mordern Resume samples
      </h2>
      <div className="container bg-light">
        <div className="row">
          <div className="col-sm-10 col-md-6 col-lg-4 singlecard">
            <div className="card my-3">
              <img
                className="card-img-top cardImage"
                src={modern_resume_sample_1}
                alt="mordern_resume_sample1"
              />
              <h6 className="card-title text-center">Sample 1</h6>
              <Link
                className="card-link stretched-link"
                to="/resume_sample1"
              ></Link>
              <button className="btn btn-info text-white">Build Now</button>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4 singlecard">
            <div className="card my-3">
              <img
                className="card-img-top cardImage"
                src={modern_resume_sample_2}
                alt="mordern_resume_sample1"
              />
              <h6 className="card-title text-center">Sample 2</h6>
              <Link
                className="card-link stretched-link"
                to="/resume_sample2"
              ></Link>
              <button className="btn btn-info text-white">Build Now</button>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4 singlecard">
            <div className="card my-3">
              <div className="bg-warning text-center text-white newTemplate">
                Coming Soon
              </div>
              <img
                className="card-img-top cardImage low"
                src={modern_resume_sample_3}
                alt="mordern_resume_sample1"
              />
              <h6 className="card-title text-center">Sample 3</h6>
              <Link
                className="card-link stretched-link"
                to="/resume_templates"
              ></Link>
              <button className="btn btn-info text-white">Build Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeTemplates;
