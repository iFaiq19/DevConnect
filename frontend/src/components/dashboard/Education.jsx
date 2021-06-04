import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from "../../redux/actions/profileAction";

const Education = (props) => {

  const education = props.education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{" "}
        {edu.to === null ? (
          "Present"
        ) : (
          <Moment format="YYYY/MM/DD">{edu.to}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => deleteEducation(edu._id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div>
      <h2 className="my-4">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{education}</tbody>
      </table>
    </div>
  );
};

Education.propTypes = { deleteEducation: PropTypes.func.isRequired };

//Comes from root reducer
// const mapStateToProps = (state) => ({});

// Reduced from action files
const mapDispatchToProps = { deleteEducation };

export default connect(null, mapDispatchToProps)(Education);
