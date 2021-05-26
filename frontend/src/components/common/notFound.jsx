import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container">
    <h1>404 - Not Found!</h1>
    <Link to="/"><button type="button" class="btn btn-primary">Go Home</button>
</Link>
  </div>
);

export default NotFound;
