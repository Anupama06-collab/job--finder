import React, { useEffect, useState } from "react";
import axios from "axios";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://job-finder-backend-4ubt.onrender.com/api/jobs") // 👈 use your backend URL
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Jobs;
