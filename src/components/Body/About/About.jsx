import React from "react";

function About() {
  return (
    <div className="container my-4">
      <h2 className="text-center mt-3 mb-5">
        Why build my resume with Resume<span className="text-info">Maker</span>?
      </h2>
      <img
        className="img-fluid aboutImage"
        src="http://trumpwallpapers.com/wp-content/uploads/Business-Wallpaper-29-1600x900-1.jpg"
        alt="mordern_resume_sample1"
      />
      <div className="row my-2">
        <div className="col-sm-10 col-md-6 col-lg-6">
          <div className="card my-3 aboutcard">
            <i class="fa-2x fas fa-donate text-center text-info my-2"></i>
            <h6 className="card-title text-center fw-bold">
              We’re actually free
            </h6>
            <p className="text-muted">
              No gimmicks, no freemium features, no joke. Get everything you
              need to build a professional resume that shows off your best
              qualities to help you land your next job.
            </p>
          </div>
        </div>
        <div className="col-sm-10 col-md-6 col-lg-6">
          <div className="card my-3 aboutcard">
            <i class="fa-2x fas fa-edit text-center text-info my-2"></i>
            <h className="card-title text-center fw-bold">Mordern Format</h>
            <p className="text-muted">
              We follow the Modern resume style where are a blend of
              contemporary style, optimal text placement, and readability for
              both humans and the ATS. Meet Modern Needs - A modern resume
              should list achievements, tailored skills, and a personalized
              resume summary or objective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
