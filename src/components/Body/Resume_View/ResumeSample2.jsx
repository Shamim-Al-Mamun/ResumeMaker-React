import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import UserContext from "../../../Context/UserContext";

function ResumeSample2() {
  const [download, setDownload] = useState(false);
  const { resumeFormInfo } = useContext(UserContext);
  console.log(resumeFormInfo);

  //extracting Experiance Info
  const { experianceInfo } = resumeFormInfo;
  console.log(experianceInfo);
  const {
    position,
    from,
    to,
    place,
    keyres1,
    keyres2,
    keyres3,
    keyres4,
    keyres5,
  } = experianceInfo;

  //extracting Educational Info
  const { educationInfo } = resumeFormInfo;
  console.log(educationInfo);
  const { degree, institute, passing_year, result } = educationInfo;

  //extracting Summary Info

  const { summaryInfo } = resumeFormInfo;
  console.log(summaryInfo);
  const {
    objective,
    e_hobby1,
    e_hobby2,
    e_hobby3,
    h_lights1,
    h_lights2,
    h_lights3,
    h_lights4,
    h_lights5,
  } = summaryInfo;

  const generatePDF = () => {
    const input = document.getElementById("content");
    console.log(document);
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
        // pdf.output('dataurlnewwindow');
        pdf.save("resume_of_" + resumeFormInfo.fullname);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const openDownload = () => {
    setDownload(true);
  };
  return (
    <>
      <div className="container">
        <Link to="/resume_templates" className="text-info">
          See other format
        </Link>
      </div>

      <div className="container my-3">
        <div id="content">
          <div className="container sample2">
            <div className="row">
              <div className="col-4 border overflow-hidden">
                <div className="text-center my-3">
                  <img
                    className="img-fluid rounded-circle dpic2"
                    src={resumeFormInfo.img}
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-black m-0 text-center small">
                    {resumeFormInfo.address}
                  </p>
                </div>
                <div>
                  <p className="text-black m-0 text-center small">
                    {resumeFormInfo.phone}
                  </p>
                </div>
                <div>
                  <p className=" small text-primary m-0 text-center text-decoration-underline">
                    {resumeFormInfo.email}
                  </p>
                </div>
                <div>
                  <p className=" small text-primary m-0 text-center text-decoration-underline">
                    {resumeFormInfo.linkedin}
                  </p>
                </div>
                <div>
                  <hr />
                  <h5 className="text-center">Design & Coding</h5>
                  <ul>
                    <li className="small">{h_lights1}</li>
                    {h_lights2 && <li className="small">{h_lights2}</li>}
                    {h_lights3 && <li className="small">{h_lights3}</li>}
                    {h_lights4 && <li className="small">{h_lights4}</li>}
                    {h_lights5 && <li className="small">{h_lights5}</li>}
                  </ul>
                </div>
                <div>
                  <hr />
                  <h5 className="text-center">Hobbies</h5>
                  <ul>
                    <li className="small">{e_hobby1}</li>
                    {e_hobby2 && <li className="small">{e_hobby2}</li>}
                    {e_hobby3 && <li className="small">{e_hobby3}</li>}
                  </ul>
                </div>
              </div>
              <div className="col-8 overflow-hidden">
                <div className="container bg-white my-3 py-3">
                  <h2> {resumeFormInfo.fullname}</h2>
                  <h6>Objective:</h6>
                  <span className="small">{objective}</span>
                  <h4 className="my-2">Experiance</h4>
                  <div className="date d-flex justify-content-end my-3 mx-2">
                    <div className="small p-1">{from}</div>
                    <div className="mx-1 h5">to</div>
                    <div className="small p-1">{to}</div>
                  </div>
                  <div className="fw-bold">{position}</div>
                  <div className="my-2 text-muted">{place}</div>
                  <div className="fw-bold">Key responsibilities:</div>
                  <ul>
                    <li className="small">{keyres1}</li>
                    {keyres2 && <li className="small">{keyres2}</li>}
                    {keyres3 && <li className="small">{keyres3}</li>}
                    {keyres4 && <li className="small">{keyres4}</li>}
                    {keyres5 && <li className="small">{keyres5}</li>}
                  </ul>
                  <hr />
                  <h4>Education</h4>
                  <div className="my-1 text-end">
                    <span className="small"> Passing year : </span>{" "}
                    <span className="small"> {passing_year}</span>
                  </div>
                  <div className="my-1">
                    <span className="fw-bold"> Degree:</span>{" "}
                    <span className="small">{degree}</span>
                  </div>
                  <div className="my-1">
                    <span className="fw-bold"> Institute:</span>{" "}
                    <span className="small">{institute}</span>
                  </div>{" "}
                  <div className="my-1">
                    {result && <span className="fw-bold"> Result: </span>}
                    {result && <span className="small">{result}</span>}
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {!download && (
          <button className="btn btn-info my-3" onClick={openDownload}>
            Generate PDF
          </button>
        )}
      </div>
      {download && (
        <div className="container my-3">
          <div className="">
            <p>File is ready, click download</p>
            <button className="btn btn-info" onClick={generatePDF}>
              Download
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ResumeSample2;
