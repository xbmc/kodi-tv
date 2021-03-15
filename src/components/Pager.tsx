import React from "react";
import { Link } from "gatsby";

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <div className="flex justify-evenly">
      {previousPagePath ? (
        <React.Fragment>
          <div>
            <Link to={previousPagePath}>← Newer Posts</Link>
          </div>
        </React.Fragment>
      ) : (
        ""
      )}{" "}
      {nextPagePath ? (
        <React.Fragment>
          <div>
            <Link to={nextPagePath}>Older Posts →</Link>
          </div>
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pager;
