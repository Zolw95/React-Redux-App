import React, { useEffect } from "react";
import { connect } from "react-redux";
import JobItem from "./JobItem";
import { getJobs } from "../../actions/jobActions";

const Jobs = ({ job: { jobs }, getJobs }) => {
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, []);

  return (
    <ul className="collection-with-header">
      <li className="collection-header">
        <h4 className="center">Jobs Based on Your Search</h4>
      </li>
      {jobs.length === 0 ? (
        <p className="center">No jobs to show...</p>
      ) : (
        jobs.map((job) => <JobItem job={job} key={job.id} />)
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  job: state.job,
});

export default connect(mapStateToProps, { getJobs })(Jobs);
