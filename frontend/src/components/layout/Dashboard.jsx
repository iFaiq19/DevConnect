import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "./../../redux/actions/profileAction";

const Dasboard = (props) => {
  useEffect(() => {
    props.getCurrentProfile();
  }, []);

  return (
    <div className="container">
      <h1>Dashboard</h1>
    </div>
  );
};

// Dasboard.propTypes = {};

//Comes from root reducer
// const mapStateToProps = (state) => {
//   return {
//     errors: state.errors,
//     auth: state.auth,
//     profile: state.profile,
//   };
// };s

// Reduced from action files
// const mapDispatchToProps = {
//   getCurrentProfile,
// };

export default connect(null, { getCurrentProfile })(Dasboard);
