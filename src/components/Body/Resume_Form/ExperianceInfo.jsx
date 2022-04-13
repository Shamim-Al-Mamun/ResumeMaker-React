import React, { useState, useContext, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

//Context
import UserContext from "../../../Context/UserContext";

function ExperianceInfo() {
  const [resNumber2, setResNumber2] = useState(false);
  const [resNumber3, setResNumber3] = useState(false);
  const [resNumber4, setResNumber4] = useState(false);
  const [resNumber5, setResNumber5] = useState(false);
  //clear add button hooks
  const [add1, setAdd1] = useState(true);
  const [add2, setAdd2] = useState(true);
  const [add3, setAdd3] = useState(true);
  const [add4, setAdd4] = useState(true);
  const [add5, setAdd5] = useState(true);

  const [error, setError] = useState(true);
  const [shake, setShake] = useState(false);
  const [experianceInfo, setExperianceInfo] = useState({
    position: "",
    from: "",
    to: "",
    place: "",
    keyres1: "",
    keyres2: "",
    keyres3: "",
    keyres4: "",
    keyres5: "",
  });
  const { resumeFormInfo, setResumeFormInfo } = useContext(UserContext);
  console.log(resumeFormInfo);
  const handleExperianceInfo = () => {
    setResumeFormInfo({ ...resumeFormInfo, experianceInfo });
    setShake(true);
  };
  const { position, from, to, place, keyres1, keyres2 } = experianceInfo;
  useEffect(() => {
    if (position && from && to && place && keyres1 && keyres2) {
      setError(false);
    } else {
      setError(true);
    }
  }, [position, from, to, place, keyres1, keyres2]);
  console.log(resumeFormInfo);
  return (
    <div className="container bg-light p-2 mt-3 mb-5">
      <h1 className="text-center mb-2">Resume Form</h1>
      <ProgressBar variant="success" now={25} label={`25%`} />
      <form className="p-3 text-black">
        <h4>Experiance</h4>
        {error && (
          <p className={shake ? "text-danger error" : "text-danger"}>
            please fill up the form completely{" "}
          </p>
        )}
        <label className="form-label" htmlFor="text">
          Position:
        </label>
        <input
          className="form-control mb-2"
          maxlength="30"
          type="text"
          onChange={(event) => {
            setExperianceInfo({
              ...experianceInfo,
              position: event.target.value,
            });
            setShake(false);
          }}
        />
        <div className="d-flex align-items-center">
          <label className="form-label" htmlFor="text">
            From:
          </label>
          <input
            className="form-control w-25 m-2"
            type="date"
            onChange={(event) => {
              setExperianceInfo({
                ...experianceInfo,
                from: event.target.value,
              });
              setShake(false);
            }}
          />
          <label className="form-label" htmlFor="text">
            To:
          </label>
          <input
            className="form-control m-2 w-25"
            type="date"
            onChange={(event) => {
              setExperianceInfo({
                ...experianceInfo,
                to: event.target.value,
              });
              setShake(false);
            }}
          />
        </div>
        <label className="form-label" htmlFor="text">
          Place:
        </label>
        <input
          className="form-control mb-2"
          maxlength="50"
          type="text"
          onChange={(event) => {
            setExperianceInfo({
              ...experianceInfo,
              place: event.target.value,
            });
            setShake(false);
          }}
        />
        <label className="form-label" htmlFor="text">
          Key Responsibilites:
        </label>
        <div className="d-flex">
          <input
            className="form-control mb-2  w-75"
            maxlength="200"
            type="text"
            placeholder="Writing reusable react components and ...."
            onChange={(event) => {
              setExperianceInfo({
                ...experianceInfo,
                keyres1: event.target.value,
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
              onClick={(e) => {
                e.preventDefault();
                !keyres1 && setShake(true);
                keyres1 && setResNumber2(true);
                keyres1 && setAdd1(false);
              }}
            >
              Add
            </button>
          )}
        </div>
        {resNumber2 && (
          <div className="d-flex">
            <input
              className="form-control mb-2  w-75"
              maxlength="200"
              type="text"
              placeholder="Testing new software and fixing bugs..."
              onChange={(event) => {
                setExperianceInfo({
                  ...experianceInfo,
                  keyres2: event.target.value,
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
                onClick={(e) => {
                  e.preventDefault();
                  !keyres2 && setShake(true);
                  keyres2 && setResNumber3(true);
                  keyres2 && setAdd2(false);
                }}
              >
                Add
              </button>
            )}
          </div>
        )}
        {resNumber3 && (
          <div className="d-flex">
            <input
              className="form-control mb-2  w-75"
              placeholder="optional"
              maxlength="200"
              type="text"
              onChange={(event) =>
                setExperianceInfo({
                  ...experianceInfo,
                  keyres3: event.target.value,
                })
              }
            />
            {add3 && (
              <button
                className="btn btn-info h-75 ms-2"
                onClick={(e) => {
                  e.preventDefault();
                  setResNumber4(true);
                  setAdd3(false);
                }}
              >
                Add
              </button>
            )}
          </div>
        )}
        {resNumber4 && (
          <div className="d-flex">
            <input
              className="form-control mb-2  w-75"
              placeholder="optional"
              maxlength="200"
              type="text"
              onChange={(event) =>
                setExperianceInfo({
                  ...experianceInfo,
                  keyres4: event.target.value,
                })
              }
            />
            {add4 && (
              <button
                className="btn btn-info h-75 ms-2"
                onClick={(e) => {
                  e.preventDefault();
                  setResNumber5(true);
                  setAdd4(false);
                }}
              >
                Add
              </button>
            )}
          </div>
        )}
        {resNumber5 && (
          <div className="d-flex">
            <input
              className="form-control mb-2  w-75"
              placeholder="optional"
              maxlength="200"
              type="text"
              onChange={(event) =>
                setExperianceInfo({
                  ...experianceInfo,
                  keyres5: event.target.value,
                })
              }
            />
            {add5 && (
              <button
                className="btn btn-info h-75 ms-2"
                onClick={(e) => {
                  e.preventDefault();
                  setAdd5(false);
                }}
              >
                Add
              </button>
            )}
          </div>
        )}
        <div className="text-center">
          <Link to={error ? "/experiance_info" : "/education_info"}>
            <button
              className="btn btn-info text-white my-3 w-25"
              onClick={handleExperianceInfo}
            >
              Next
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ExperianceInfo;
