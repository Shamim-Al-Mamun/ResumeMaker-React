import React, { useState, useContext, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

//Context
import UserContext from "../../../Context/UserContext";

function Summary() {
  const [hobby2, setHobby2] = useState(false);
  const [hobby3, setHobby3] = useState(false);

  //clear add button hooks
  const [add1, setAdd1] = useState(true);
  const [add2, setAdd2] = useState(true);
  const [add3, setAdd3] = useState(true);
  const [add4, setAdd4] = useState(true);
  const [add5, setAdd5] = useState(true);
  const [add6, setAdd6] = useState(true);
  const [add7, setAdd7] = useState(true);
  const [add8, setAdd8] = useState(true);

  const [high2, setHigh2] = useState(false);
  const [high3, setHigh3] = useState(false);
  const [high4, setHigh4] = useState(false);
  const [high5, setHigh5] = useState(false);

  const [error, setError] = useState(true);
  const [shake, setShake] = useState(false);
  const [summaryInfo, setSummaryInfo] = useState({
    objective: "",
    h_lights1: "",
    h_lights2: "",
    h_lights3: "",
    h_lights4: "",
    h_lights5: "",
    e_hobby1: "",
    e_hobby2: "",
    e_hobby3: "",
  });
  const { resumeFormInfo, resumeSample, setResumeFormInfo } =
    useContext(UserContext);
  const { sample1, sample2 } = resumeSample;
  const handleSummaryInfo = () => {
    setResumeFormInfo({ ...resumeFormInfo, summaryInfo });
    setShake(true);
  };
  const { objective, h_lights1, h_lights2, h_lights3, e_hobby1, e_hobby2 } =
    summaryInfo;
  useEffect(() => {
    if (
      objective &&
      h_lights1 &&
      h_lights2 &&
      h_lights3 &&
      e_hobby1 &&
      e_hobby2
    ) {
      setError(false);
    } else {
      setError(true);
    }
  }, [objective, h_lights1, h_lights2, h_lights3, e_hobby1, e_hobby2]);
  return (
    <div className="container bg-light p-2 my-3 mb-5">
      <h1 className="text-center mb-2">Resume Form</h1>
      <ProgressBar variant="success" now={75} label={`75%`} />
      <form className="p-3 text-black">
        <h4>Objective:</h4>
        {error && (
          <p className={shake ? "text-danger error" : "text-danger"}>
            please fill up the form completely{" "}
          </p>
        )}
        <label className="form-label" htmlFor="text">
          your goal:
        </label>
        <textarea
          className="form-control mb-2"
          name="text"
          maxlength="200"
          rows="2"
          onChange={(event) => {
            setSummaryInfo({
              ...summaryInfo,
              objective: event.target.value,
            });
            setShake(false);
          }}
        ></textarea>
        <div className="row my-3">
          <div className="col-6">
            <h4>Highlights:</h4>
            <label className="form-label" htmlFor="text">
              your expertise:
            </label>
            <div className="d-flex">
              <input
                className="form-control mb-2 w-50"
                placeholder="JavaScript"
                type="text"
                maxlength="15"
                onChange={(event) => {
                  setSummaryInfo({
                    ...summaryInfo,
                    h_lights1: event.target.value,
                  });
                  setShake(false);
                }}
              />
              {add1 && (
                <button
                  className={
                    shake
                      ? "btn btn-info h-75 ms-2 error"
                      : "btn btn-info h-75 ms-2"
                  }
                  onClick={(event) => {
                    event.preventDefault();
                    !h_lights1 && setShake(true);
                    h_lights1 && setHigh2(true);
                    h_lights1 && setAdd1(false);
                    h_lights1 && setShake(false);
                  }}
                >
                  Add
                </button>
              )}
            </div>
            {high2 && (
              <div className="d-flex">
                <input
                  className="form-control mb-2 w-50"
                  placeholder="React"
                  type="text"
                  maxlength="15"
                  onChange={(event) => {
                    setSummaryInfo({
                      ...summaryInfo,
                      h_lights2: event.target.value,
                    });
                    setShake(false);
                  }}
                />
                {add2 && (
                  <button
                    className={
                      shake
                        ? "btn btn-info h-75 ms-2 error"
                        : "btn btn-info h-75 ms-2"
                    }
                    onClick={(event) => {
                      event.preventDefault();
                      !h_lights2 && setShake(true);
                      h_lights2 && setHigh3(true);
                      h_lights2 && setAdd2(false);
                      h_lights2 && setShake(false);
                    }}
                  >
                    Add
                  </button>
                )}
              </div>
            )}
            {high3 && (
              <div className="d-flex">
                <input
                  className="form-control mb-2 w-50"
                  type="text"
                  maxlength="15"
                  placeholder="Bootstrap"
                  onChange={(event) => {
                    setSummaryInfo({
                      ...summaryInfo,
                      h_lights3: event.target.value,
                    });
                    setShake(false);
                  }}
                />
                {add3 && (
                  <button
                    className={
                      shake
                        ? "btn btn-info h-75 ms-2 error"
                        : "btn btn-info h-75 ms-2"
                    }
                    onClick={(event) => {
                      !h_lights3 && setShake(true);
                      event.preventDefault();
                      h_lights3 && setHigh4(true);
                      h_lights3 && setAdd3(false);
                      h_lights3 && setShake(false);
                    }}
                  >
                    Add
                  </button>
                )}
              </div>
            )}
            {high4 && (
              <div className="d-flex">
                <input
                  className="form-control mb-2 w-50"
                  type="text"
                  maxlength="15"
                  placeholder="optional"
                  onChange={(event) =>
                    setSummaryInfo({
                      ...summaryInfo,
                      h_lights4: event.target.value,
                    })
                  }
                />
                {add4 && (
                  <button
                    className="btn btn-info h-75 ms-2"
                    onClick={(event) => {
                      event.preventDefault();
                      setHigh5(true);
                      setAdd4(false);
                    }}
                  >
                    Add
                  </button>
                )}
              </div>
            )}
            {high5 && (
              <div className="d-flex">
                <input
                  className="form-control mb-2 w-50"
                  type="text"
                  maxlength="15"
                  placeholder="optional"
                  onChange={(event) =>
                    setSummaryInfo({
                      ...summaryInfo,
                      h_lights5: event.target.value,
                    })
                  }
                />
                {add5 && (
                  <button
                    className="btn btn-info h-75 ms-2"
                    onClick={(event) => {
                      event.preventDefault();
                      setAdd5(false);
                    }}
                  >
                    Add
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="col-6">
            <h4>Extra Curricuram:</h4>
            <label className="form-label" htmlFor="text">
              Hobbies:
            </label>
            <div className="d-flex">
              <input
                className="form-control mb-2 w-50"
                placeholder="Football"
                type="text"
                maxlength="15"
                onChange={(event) => {
                  setSummaryInfo({
                    ...summaryInfo,
                    e_hobby1: event.target.value,
                  });
                  setShake(false);
                }}
              />
              {add6 && (
                <button
                  className={
                    shake
                      ? "btn btn-info h-75 ms-2 error"
                      : "btn btn-info h-75 ms-2"
                  }
                  onClick={(event) => {
                    event.preventDefault();
                    !e_hobby1 && setShake(true);
                    e_hobby1 && setHobby2(true);
                    e_hobby1 && setAdd6(false);
                    e_hobby1 && setShake(false);
                  }}
                >
                  Add
                </button>
              )}
            </div>
            {hobby2 && (
              <div className="d-flex">
                <input
                  className="form-control mb-2 w-50"
                  type="text"
                  maxlength="15"
                  placeholder="Cricket"
                  onChange={(event) => {
                    setSummaryInfo({
                      ...summaryInfo,
                      e_hobby2: event.target.value,
                    });
                    setShake(false);
                  }}
                />
                {add7 && (
                  <button
                    className={
                      shake
                        ? "btn btn-info h-75 ms-2 error"
                        : "btn btn-info h-75 ms-2"
                    }
                    onClick={(event) => {
                      event.preventDefault();
                      !e_hobby2 && setShake(true);
                      e_hobby2 && setHobby3(true);
                      e_hobby2 && setAdd7(false);
                      e_hobby2 && setShake(false);
                    }}
                  >
                    Add
                  </button>
                )}
              </div>
            )}
            {hobby3 && (
              <div className="d-flex">
                <input
                  className="form-control mb-2 w-50"
                  placeholder="optional"
                  type="text"
                  maxlength="15"
                  onChange={(event) =>
                    setSummaryInfo({
                      ...summaryInfo,
                      e_hobby3: event.target.value,
                    })
                  }
                />
                {add8 && (
                  <button
                    className="btn btn-info h-75 ms-2"
                    onClick={(event) => {
                      event.preventDefault();
                      setAdd8(false);
                    }}
                  >
                    Add
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="text-center mb-5">
          <Link
            to={
              error
                ? "/summary"
                : sample1
                ? "/resume_sample1"
                : sample2
                ? "/resume_sample2"
                : "/resume_templates"
            }
          >
            <button
              className="btn btn-info text-white my-3 w-25"
              onClick={handleSummaryInfo}
            >
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Summary;
