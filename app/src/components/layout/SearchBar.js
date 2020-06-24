import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchJobs } from "../../actions/jobActions";

const SearchBar = ({ searchJobs }) => {
  const text = useRef("");

  const onChange = (e) => {
    searchJobs(text.current.value);
  };
  return (
    <div className="navbar bg-primary">
      <div>
        <h1>Search Jobs</h1>
      </div>
      <nav style={{ marginBottom: "30px" }} className="blue">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search Jobs..."
                ref={text}
                onChange={onChange}
                required
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default connect(null, { searchJobs })(SearchBar);
