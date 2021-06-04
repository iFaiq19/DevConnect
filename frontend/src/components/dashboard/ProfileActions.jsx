import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light me-3">
        <i className="fas fa-user-circle text-primary me-1"></i> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light me-3">
        <i className="fab fa-black-tie text-primary me-1"></i>
        Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-light me-3">
        <i className="fas fa-graduation-cap text-primary me-1"></i>
        Add Education
      </Link>
    </div>
  );
};

export default ProfileActions;
