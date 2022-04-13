import React, { useState, useContext, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

//Context
import UserContext from "../../../Context/UserContext";

function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState({
    fullname: "",
    phone: "",
    email: "",
    linkedin: "",
    address: "",
    img: "",
  });
  const [error, setError] = useState(true);
  const [shake, setShake] = useState(false);
  const { setResumeFormInfo, resumeSample } = useContext(UserContext);
  console.log(resumeSample);
  const handlePersonalInfo = () => {
    setResumeFormInfo(personalInfo);
    setShake(true);
  };
  const { fullname, phone, email, address, img } = personalInfo;
  useEffect(() => {
    if (fullname && phone && email && address && img) {
      setError(false);
    } else {
      setError(true);
    }
  }, [fullname, phone, email, address, img]);
  return (
    <div className="container bg-light p-2 my-3">
      <h1 className="text-center mb-2">Resume Form</h1>
      <ProgressBar variant="success" now={0} label={`25%`} />
      <form className="p-3 text-black">
        <h4>Basic Information</h4>
        {error && (
          <p className={shake ? "text-danger error" : "text-danger"}>
            please fill up the form completely{" "}
          </p>
        )}
        <label className="form-label" htmlFor="Full_Name">
          Full Name:
        </label>
        <input
          className="form-control mb-2"
          maxlength="30"
          type="text"
          onChange={(event) => {
            setPersonalInfo({ ...personalInfo, fullname: event.target.value });
            setShake(false);
          }}
        />
        <label className="form-label" htmlFor="Phone">
          Phone:
        </label>
        <input
          className="form-control mb-2"
          maxlength="15"
          type="number"
          onChange={(event) => {
            setPersonalInfo({ ...personalInfo, phone: event.target.value });
            setShake(false);
          }}
        />
        <label className="form-label" htmlFor="Email">
          Email:
        </label>
        <input
          className="form-control mb-2"
          maxlength="20"
          type="email"
          onChange={(event) => {
            setPersonalInfo({ ...personalInfo, email: event.target.value });
            setShake(false);
          }}
        />
        <label className="form-label" htmlFor="text">
          LinkedIn:
        </label>
        <input
          className="form-control mb-2"
          placeholder="optional"
          maxlength="20"
          type="text"
          onChange={(event) => {
            setPersonalInfo({ ...personalInfo, linkedin: event.target.value });
            setShake(false);
          }}
        />
        <label className="form-label" htmlFor="text">
          Address:
        </label>
        <textarea
          className="form-control"
          name="text"
          maxlength="60"
          rows="2"
          onChange={(event) => {
            setPersonalInfo({ ...personalInfo, address: event.target.value });
            setShake(false);
          }}
        ></textarea>
        <div className="form-label">Picture</div>
        <input
          type="file"
          className="input-image"
          accept="image/*"
          onChange={(event) => {
            if (event.target.files.length > 0) {
              var src = URL.createObjectURL(event.target.files[0]);
              setPersonalInfo({ ...personalInfo, img: src });
              setShake(false);
            }
          }}
        />
        <div className="text-center">
          {false && (
            <button
              className="btn btn-info text-white my-3 w-25"
              onClick={handlePersonalInfo}
            >
              Next
            </button>
          )}
          {true && (
            <Link to={error ? "/personal_info" : "/experiance_info"}>
              <button
                className="btn btn-info text-white my-3 w-25 text-dark"
                onClick={handlePersonalInfo}
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

export default PersonalInfo;
