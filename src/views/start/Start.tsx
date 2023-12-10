import React from "react";
import { Link } from "react-router-dom";

const Start: React.FC = () => {
  return (
    <>
      <div>Start</div>
      <div>
        <Link to={"/top-100-table"}>Go to top 100 products</Link>
      </div>
      <div>
        <Link to={"/notable-observations"}>Go to notable observations</Link>
      </div>
    </>
  );
};

export default Start;
