import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white user-select-none">
      <div className="row w-100 mx-auto">
        <div className="col-4 mx-auto d-flex justify-content-center">
          <div>
            <div className="mb-2 mt-2 small">Job Seekers</div>
            <div className="smallfont text-muted">Company Profiles</div>
            <div className="smallfont text-muted">Browse Jobs</div>
          </div>
        </div>
        <div className="col-4 m-auto d-flex justify-content-center">
          <div>
            <div className="mb-2 mt-2 small">About Us</div>
            <div className="smallfont text-muted">Company Profiles</div>
            <div className="smallfont text-muted">Recent Articles</div>
          </div>
        </div>
        <div className="col-4 m-auto d-flex justify-content-center">
          <div>
            <div className="mb-2 mt-2 small">Important Links</div>
            <div className="smallfont text-muted ">
              <Link className="navlinks text-muted" to="/personal_info">
                Resume Form
              </Link>
            </div>
            <div className="smallfont text-muted">
              {" "}
              <Link className="navlinks text-muted" to="/templates">
                Templates
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-2 small">Find us on Social Media</div>
      <div className="text-center">
        <span className="me-3 small">
          <FaFacebook />
        </span>
        <span className="me-3 small">
          <FaTwitter />
        </span>{" "}
        <span className="me-3 small">
          <FaInstagram />
        </span>{" "}
        <span className="me-3 small">
          <FaLinkedin />
        </span>
      </div>
      <p className="smallfont px-2 mt-1 m-0">
        © 2022 ResumeMaker All rights reserved.
      </p>
      <p className="smallfont px-2 m-0">
        developed by <span className="text-muted mx-1">Mamun</span>
      </p>
    </footer>
  );
}

export default Footer;
