import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

//Context
import UserContext from "../../../Context/UserContext";

function Home() {
  const { resumeSample, setResumeSample } = useContext(UserContext);
  const { sample1, sample2 } = resumeSample;
  console.log(sample1);
  console.log(sample2);
  return (
    <div className="my-4">
      <div class="row">
        <div class="col-sm-12 col-md-11 m-auto">
          <div class="card border-none">
            <h2 class="get-started-text text-white card-title fw-bold">
              Create your resume 100% free
            </h2>
            <Link to="/personal_info">
              <button
                class="btn btn-info text-white get-started-button"
                onClick={() => {
                  setResumeSample({ ...resumeSample, sample1: false });
                  setResumeSample({ ...resumeSample, sample2: false });
                }}
              >
                Get Started Now
              </button>
            </Link>
            <img
              class="get-started-logo"
              src="https://foyr.com/learn/wp-content/uploads/2018/12/how-to-create-architecture-resume.png"
              alt="resume-pic"
            />
          </div>
        </div>
      </div>
      <div className="m-5">
        <h2>How to Build a Resume in 4 Easy Steps</h2>
        <p>
          Creating a resume can be challenging when you start thinking about all
          the information you need to share with prospective employers.
        </p>
        <div>
          <div>
            <div>
              What’s the easiest way to write a resume? If you look at resume
              building as a step-by-step process, it will be easier to do and
              much less overwhelming.To create a resume that will get noticed by
              employers, you can follow a few simple steps and best practices.
              The main goal to keep in mind is to make your resume relevant and
              readable. Let’s take a closer look at the best ways to write each
              of these resume sections. For more inspiration when writing or
              updating your resume, look at resume samples from your industry
              and job title.
            </div>
            <div className="homeFloatImage m-1">
              <img
                class="img-fluid homeImage"
                src="https://leverageedu.com/blog/wp-content/uploads/2020/03/Resume-Format-for-Freshers.png"
                alt="resume-pic"
              />
            </div>
          </div>
          <ul>
            <li>
              <h6>Career Objective</h6>
            </li>

            <p className="text-muted">
              Including an objective at the top of your resume is a great way to
              showcase your skills and talents that align with the requirements
              of their open position. It can also represent your professional
              goals, showing employers how the job aligns with your long-term
              career path. A well-written resume objective statement should be
              customized to the job for which you're applying and help set you
              apart from other applicants.
            </p>

            <li>
              <h6>Personal Information</h6>
            </li>
            <p className="text-muted">
              It may seem an obvious thing to say, but the 'Personal Details'
              section of your CV is your first opportunity to introduce yourself
              to a potential employer. Get the basics wrong at this stage and
              you can wave goodbye to the chances of getting an interview.
            </p>
            <li>
              <h6>Professional history History</h6>
            </li>
            <p className="text-muted">
              Your work history is the most important component of your resume.
              Employers will want to know where you have worked, when you worked
              there, and what responsibilities you held in each role that you
              had. They will be looking to see how your experience lines up with
              what they are looking for in prospective employees.
            </p>
            <li>
              <h6>Institutional Certification</h6>
            </li>
            <p className="text-muted">
              Getting certified in something normally involves completing an
              accredited institution’s course and passing its requirements. The
              types of certificates vary across industries, from technical jobs
              to healthcare jobs.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
