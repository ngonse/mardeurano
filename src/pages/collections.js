import React from "react";
import { Link } from "gatsby";

const Collections = ({ data }) => {
  return (
    <div className="m-5">
      <Link to="/" className="text-underline">
        back
      </Link>
      <h1>Collections</h1>
    </div>
  );
};

export default Collections;
