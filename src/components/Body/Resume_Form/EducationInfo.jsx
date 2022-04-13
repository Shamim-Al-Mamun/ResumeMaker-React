import React, { useState, useContext, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

//Context
import UserContext from "../../../Context/UserContext";

function EducationInfo() {
  const [educationInfo, setEducationInfo] = useState({
    degree: "",
    institute: "",
    passing_year: "",
    result: "",
  });
  const [error, setError] = useState(true);
  const [shake, setShake] = useState(false);
  const { resumeFormInfo, setResumeFormInfo } = useContext(UserContext);
  console.log(resumeFormInfo);
  const handleEducationInfo = (e) => {
    error && e.preventDefault();
    setResumeFormInfo({ ...resumeFormInfo, educationInfo });
    setShake(true);
  };
  console.log(resumeFormInfo);
  console.log(error);
  const { degree, institute, passing_year } = educationInfo;
  useEffect(() => {
    if (degree && institute && passing_year) {
      setError(false);
    } else {
      setError(true);
    }
  }, [degree, institute, passing_year]);
  return (
    <div className="container bg-light p-2 my-3">
      <h1 className="text-center mb-2">Resume Form</h1>
      <ProgressBar variant="success" now={50} label={`50%`} />
      <form className="p-3 text-black">
        <h4>Educational Information</h4>
        {error && (
          <p className={shake ? "text-danger error" : "text-danger"}>
            please fill up the form completely{" "}
          </p>
        )}
        <label className="form-label" htmlFor="Full_Name">
          Degree
        </label>
        <input
          className="form-control mb-2"
          maxlength="100"
          type="text"
          onChange={(event) => {
            setEducationInfo({ ...educationInfo, degree: event.target.value });
            setShake(false);
          }}
        />
        <label className="form-label" htmlFor="text">
          Institution:
        </label>
        <input
          className="form-control mb-2"
          maxlength="100"
          type="text"
          onChange={(event) => {
            setEducationInfo({
              ...educationInfo,
              institute: event.target.value,
            });
            setShake(false);
          }}
        />
        <label className="form-label" htmlFor="number">
          Passing Year:
        </label>
        <input
          className="form-control mb-2"
          maxlength="10"
          type="number"
          onChange={(event) => {
            setEducationInfo({
              ...educationInfo,
              passing_year: event.target.value,
            });
            setShake(false);
          }}
        />
        <label className="form-label" htmlFor="number">
          Result:
        </label>
        <input
          className="form-control mb-2"
          maxlength="10"
          placeholder="optional"
          type="number"
          onChange={(event) => {
            setEducationInfo({
              ...educationInfo,
              result: event.target.value,
            });
          }}
        />
        <div className="text-center">
          {error && (
            <button
              className="btn btn-info text-white my-3 w-25"
              onClick={handleEducationInfo}
            >
              Next
            </button>
          )}
          {!error && (
            <Link to="/summary">
              <button
                className="btn btn-info text-white my-3 w-25"
                onClick={handleEducationInfo}
              >
                Next
              </button>
            </Link>
          )}
        </div>
      </form>
    </div>
  );
}

export default EducationInfo;
