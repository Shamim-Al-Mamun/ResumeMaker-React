import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="row mt-5">
        <div className="col-4 mx-auto d-flex justify-content-center">
          <div>
            <div className="mb-2 mt-4">Job Seekers</div>
            <div className="small text-muted">Company Profiles</div>
            <div className="small text-muted">Browse Jobs</div>
          </div>
        </div>
        <div className="col-4 m-auto d-flex justify-content-center">
          <div>
            <div className="mb-2 mt-4">About Us</div>
            <div className="small text-muted">Company Profiles</div>
            <div className="small text-muted">Recent Articles</div>
          </div>
        </div>
        <div className="col-4 m-auto d-flex justify-content-center">
          <div>
            <div className="mb-2 mt-4">Important Links</div>
            <div className="small text-muted ">
              <Link className="navlinks text-muted" to="/personal_info">
                Resume Form
              </Link>
            </div>
            <div className="small text-muted">
              {" "}
              <Link className="navlinks text-muted" to="/templates">
                Templates
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">Find us on Social Media</div>
      <div className="text-center my-1">
        <span className="me-3">
          <FaFacebook />
        </span>
        <span className="me-3">
          <FaTwitter />
        </span>{" "}
        <span className="me-3">
          <FaInstagram />
        </span>{" "}
        <span className="me-3">
          <FaLinkedin />
        </span>
      </div>
      <p className="small px-2 mt-4 m-0">
        © 2022 ResumeMaker All rights reserved.
      </p>
      <p className="small px-2 m-0">
        developed by <span className="text-muted mx-1">Mamun</span>
      </p>
    </footer>
  );
}

export default Footer;
