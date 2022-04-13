import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import UserContext from "../../../Context/UserContext";

import modern_resume_sample_1 from "./Images/modern_resume_sample_1.jpg";
import modern_resume_sample_2 from "./Images/modern_resume_sample_2.png";
import modern_resume_sample_3 from "./Images/modern_resume_sample_3.jpg";

function Templates() {
  const { resumeSample, setResumeSample } = useContext(UserContext);
  const { sample1, sample2 } = resumeSample;
  console.log(sample1);
  console.log(sample2);

  const handleSample1 = () => {
    setResumeSample({ ...resumeSample, sample1: true });
    console.log(resumeSample);
  };
  const handleSample2 = () => {
    setResumeSample({ ...resumeSample, sample2: true });
    console.log(resumeSample);
  };
  return (
    <>
      <div className="m-5">
        <h2>Modern Resume Template & Format</h2>
        <p>
          Each template is expertly designed and follows the exact “resume
          rules” hiring managers look for. Stand out and get hired faster with
          field-tested resume templates.
        </p>
        <div>
          <div>
            <div className="aboutFloatImage m-3">
              <img
                class="img-fluid homeImage"
                src="https://i0.wp.com/smashresume.com/wp-content/uploads/edd/2018/10/Free-Arabic-Resume-Template.jpg?fit=1000%2C750&ssl=1"
                alt="resume-pic"
              />
            </div>
          </div>
          <ul>
            <p>
              As a modern professional, you don’t want to waste hours of
              precious time fighting with word processors and graphic design
              programs. Resume.io is the modern way to get the job done. Choose
              your perfect template, then try out our easy-to-use builder tool
              to add your work experience, hard skills, soft skills and
              achievements. Our builder tool has already been tested by
              thousands of satisfied customers who have found their dream jobs
              hassle-free.
            </p>
            <p>
              Finish your application strong by choosing the right file format
              to keep your professional resume consistent no matter how you send
              it. Within our builder tool , you can download your resume as a MS
              Word or Google Doc version completely free. You can also download
              your resume as a PDF or DOCX file.
            </p>
          </ul>
        </div>
      </div>
      <div className="container pt-5">
        <p>
          Looking for a modern resume template to download for free? Give your
          application the best chance of success in 2022 with one of our modern
          resume templates (available for Word and Google Docs). For more
          options, browse all of our other free resume templates.
        </p>
      </div>{" "}
      <div className="container p-2 my-1 bg-light">
        <h1 className="text-center mb-2">Sample Resume </h1>
        <div className="row">
          <div className="col-sm-10 col-md-6 col-lg-4 singlecard">
            <div className="card my-3" onClick={handleSample1}>
              <img
                className="card-img-top cardImage"
                src={modern_resume_sample_1}
                alt="mordern_resume_sample1"
              />
              <h6 className="card-title text-center">Sample 1</h6>
              <Link
                className="card-link stretched-link"
                to="/personal_info"
              ></Link>

              <button className="btn btn-info text-white">Build Now</button>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4 singlecard">
            <div className="card my-3" onClick={handleSample2}>
              <img
                className="card-img-top cardImage"
                src={modern_resume_sample_2}
                alt="mordern_resume_sample1"
              />
              <h6 className="card-title text-center">Sample 2</h6>
              <Link
                className="card-link stretched-link"
                to="/personal_info"
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
              <Link className="card-link stretched-link" to="/templates"></Link>
              <button className="btn btn-info text-white">Build Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Templates;
