import React from "react";
import { Link } from "react-router-dom";

const Start: React.FC = () => {
  return (
    <>
      <div>Start</div>
      <Link to={"/top-100-table"}>Go to top 100 products</Link>
    </>
  );
};

export default Start;
