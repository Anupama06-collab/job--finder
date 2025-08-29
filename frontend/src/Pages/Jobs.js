// frontend/src/components/Jobs.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend.onrender.com/api" // <-- Replace with your Render backend URL
});

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get("/jobs"); // calls: https://job-finder-backend-4ubt.onrender.com/api
        setJobs(res.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="jobs-container">
      <h2>Available Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job._id} className="job-item">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Description:</strong> {job.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Jobs;
