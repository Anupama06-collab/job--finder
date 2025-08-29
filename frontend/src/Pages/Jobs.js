import { useEffect, useState } from "react";
import axios from "axios";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        jobs.map(job => (
          <div key={job._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h2>{job.title}</h2>
            <p><b>Company:</b> {job.company}</p>
            <p><b>Location:</b> {job.location}</p>
            <p><b>Salary:</b> {job.salary}</p>
            <p>{job.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Jobs;
