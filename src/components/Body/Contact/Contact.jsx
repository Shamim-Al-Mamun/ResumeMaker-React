import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");
  const sendMail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_dseum91",
        "template_fig75ic",
        e.target,
        "3Lz0qE7tu2R6ZvtgI"
      )
      .then((res) => {
        setSubmit(true);
        setError("");
        res && setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setError("Something went wrong");
        setSubmit(false);
        err && setLoading(false);
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 mt-3">
            <img
              class="img-fluid"
              src="https://www.theclimategroup.org/sites/default/files/styles/hero_header/public/2020-11/contact%20us.jpg?itok=3cmG-DGM"
              alt="resume-pic"
            />
          </div>
          <div className="col-4 mt-3">
            <div>
              <span className="fw-bold">Address:</span>
              <p className=" text-muted mt-2">
                (814) 861-7041 2148 Mountain View Ave State College,
                Pennsylvania(PA), 16801
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <form onSubmit={sendMail}>
            <h1 className="text-center my-3">Contact Form</h1>
            <label className="form-label">Name</label>
            <input
              className="form-control mb-2"
              type="text"
              name="name"
              required
            />
            <label className="form-label">Phone</label>
            <input
              className="form-control mb-2"
              type="number"
              name="phone"
              placeholder="optional"
            />
            <label>Email</label>
            <input
              className="form-control mb-2"
              type="email"
              name="email"
              required
            />
            <label className="form-label">Message</label>
            <textarea className="form-control mb-2" name="message" required />
            {submit && (
              <p className=" text-center text-success">
                The form has been submitted successfully
              </p>
            )}
            {error && <p className=" text-center text-danger">{error}</p>}
            <button className="btn btn-info text-white mb-5 w-25">
              {loading && (
                <i
                  className="fa fa-circle-o-notch fa-spin"
                  style={{ marginRight: "5px" }}
                />
              )}
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
