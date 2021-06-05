import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ProfileGithub from "./ProfileGithub";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import Spinner from "./../common/Spinner";
import { getProfileByHandle } from "./../../redux/actions/profileAction";

const Profile = (props) => {
  useEffect(() => {
    props.getProfileByHandle(props.match.params.handle);
  }, [props.getProfileByHandle, props.match.params.handle]);

  const { profile, loading } = props.profile;

  let profileContent;
  if (profile === null || loading) {
    profileContent = <Spinner />;
  } else {
    profileContent = (
      <div>
        <div class="row">
          <div class="col-6">
            <Link to="/developers" class="btn btn-light mb-3 float-left">
              Back To Profiles
            </Link>
          </div>
          <div class="col-md-6"></div>
        </div>
        <ProfileHeader profile={profile} />
        <ProfileAbout profile={profile} />
        <ProfileCreds
          education={profile.education}
          experience={profile.experience}
        />
        {profile.githubusername && (
          <ProfileGithub username={profile.githubusername} />
        )}
      </div>
    );
  }
  return (
    <div class="profile">
      <div className="container">
        <div className="row">
          <div className="col-md-12">{profileContent}</div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired,
};

//Comes from root reducer
const mapStateToProps = (state) => ({
  profile: state.profile,
});

// Reduced from action files
const mapDispatchToProps = { getProfileByHandle };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
