import React from "react";
import { Link } from "react-router-dom";
import isEmpty from "./../../validation/is-empty";

const ProfileHeader = ({ profile }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-primary text-white mb-3">
          <div className="row">
            <div className="col-4 col-md-3 m-auto">
              <img
                className="rounded-circle"
                src={profile.user.avatar}
                alt=""
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="display-4 text-center mt-3">{profile.user.name}</h1>
            <p className="lead text-center">
              {profile.status}{" "}
              {isEmpty(
                profile.company ? null : <span>at {profile.company}</span>
              )}
            </p>
            <p>
              {isEmpty(
                profile.location ? null : <span>at {profile.location}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.website) ? null : (
                <Link
                  className="text-white p-2 m-2"
                  to={{ pathname: profile.website }}
                  target="_blank"
                >
                  <i className="fas fa-globe fa-2x"></i>
                </Link>
              )}
              {isEmpty(profile.social && profile.social.twitter) ? null : (
                <Link
                  className="text-white p-2 m-2"
                  to={{ pathname: profile.social.twitter }}
                  target="_blank"
                >
                  <i className="fab fa-twitter fa-2x"></i>
                </Link>
              )}
              {isEmpty(profile.social && profile.social.facebook) ? null : (
                <Link
                  className="text-white p-2 m-2"
                  to={{ pathname: profile.social.facebook }}
                  target="_blank"
                >
                  <i className="fab fa-facebook fa-2x"></i>
                </Link>
              )}
              {isEmpty(profile.social && profile.social.linkedin) ? null : (
                <Link
                  className="text-white p-2 m-2"
                  to={{ pathname: profile.social.linkedin }}
                  target="_blank"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </Link>
              )}
              {isEmpty(profile.social && profile.social.youtube) ? null : (
                <Link
                  className="text-white p-2 m-2"
                  to={{ pathname: profile.social.youtube }}
                  target="_blank"
                >
                  <i className="fab fa-youtube fa-2x"></i>
                </Link>
              )}
              {isEmpty(profile.social && profile.social.instagram) ? null : (
                <Link
                  className="text-white p-2 m-2"
                  to={{ pathname: profile.social.instagram }}
                  target="_blank"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
