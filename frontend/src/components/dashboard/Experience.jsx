import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../redux/actions/profileAction";

const Experience = (props) => {
  function onDelete(id) {
    props.deleteExperience(id);
  }

  const experience = props.exp.map((exp) => (
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
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div>
      <h4 className="mb-4">Experience Credentials</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
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
