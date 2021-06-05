import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileGithub = ({ username }) => {
  const [state, setState] = useState({
    clientId: "598fdbde7d907f1e0d16",
    clientSecrets: "685a4958c2cce659554c225a83c75f1f59f1d8e0",
    count: 5,
    sort: "created: asc",
    repos: [],
  });

  useEffect(() => {
    const { count, sort, clientId, clientSecrets } = state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecrets}`
    )
      .then((res) => res.json())
      .then((data) => {
        setState({ repos: data });
      })
      .catch((err) => console.log(err));
  }, []);

  // const repoItems = state.repos.map((repo) => (
  //   <div key={repo.id} className="card card-body mb-2">
  //     <div className="row">
  //       <div className="col-md-6">
  //         <h4>
  //           <Link to={repo.html_url} className="text-info" target="_blank">
  //             {repo.name}
  //           </Link>
  //         </h4>
  //         <p>{repo.description}</p>
  //       </div>
  //       <div className="col-md-6">
  //         <span className="badge badge-info mr-1">
  //           Stars: {repo.stargazers_count}
  //         </span>
  //         <span className="badge badge-secondary mr-1">
  //           Watchers: {repo.watchers_count}
  //         </span>
  //         <span className="badge badge-success">Forks: {repo.forks_count}</span>
  //       </div>
  //     </div>
  //   </div>
  // ));

  return (
    <div>
      <hr />
      <h3 className="mb-4">Latest Github Repos</h3>
      {console.log(state)}
    </div>
  );
};

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfileGithub;
