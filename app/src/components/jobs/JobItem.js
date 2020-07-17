import React from "react";

const JobItem = ({ job }) => {
  return (
    <li className="collection-item">
      <div>
        <a href="#">{job.title}</a>
      </div>
    </li>
  );
};

export default JobItem;
