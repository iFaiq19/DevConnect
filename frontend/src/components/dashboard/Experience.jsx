import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../redux/actions/profileAction";

const Experience = (props) => {

  const experience = props.experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
        {exp.to === null ? (
          "Present"
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(exp._id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div>
      <h2 className="my-4">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experience}</tbody>
      </table>
    </div>
  );
};

Experience.propTypes = { deleteExperience: PropTypes.func.isRequired };

//Comes from root reducer
// const mapStateToProps = (state) => ({});

// Reduced from action files
const mapDispatchToProps = { deleteExperience };

export default connect(null, mapDispatchToProps)(Experience);
