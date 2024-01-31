import React from "react";
import "../App.css";
import imgOne from '../assets/header.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-dark d-flex justify-content-evenly align-items-center">
        <p className="text-white p-3">
          Create, maintain, publish, and share your CVs for free
        </p>
        <Link to='/dashboardTable'>
        <p className="text-white">Dashboard</p>
        </Link>
      </div>
      <div className="headerStyle">
        <div className="d-flex justify-content-evenly align-items-start p-4">
          <h5 className="text-white">Resume Maker</h5>
          <p className="text-white">
            323223 <small>downloads</small>
          </p>
          <p className="text-white">
            236237 <small>saved cvs</small>
          </p>
        </div>
        <div className="d-flex justify-content-around align-items-start p-4">
          <p className="text-white">Create beautiful, professional resumes in minutes,</p>
          <Link to='/cv'>
          <button type="button" className="btn btn-primary">Create Resume</button>
          </Link>
        </div>
      <img src={imgOne} alt="" className="img-fluid ms-5 mt-5" />
      </div>
    </>
  );
};

export default Header;
