import React from "react";
import { Link } from "gatsby";

const OurWorld = ({ data }) => {
  return (
    <div className="m-5">
      <Link to="/" className="text-underline">
        back
      </Link>
      <h1>Our World</h1>
    </div>
  );
};

export default OurWorld;
