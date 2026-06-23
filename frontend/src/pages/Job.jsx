import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import api from "../services/axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const res = await api.get("/job");
      console.log("Jobs Response:", res.data);
      setJobs(res.data.jobs);
      
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Available Jobs
        </h1>

        {loading ? (
          <h2 className="text-center text-xl font-semibold">
            Loading Jobs...
          </h2>
        ) : jobs.length === 0 ? (
          <h2 className="text-center text-xl font-semibold">
            No Jobs Found
          </h2>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;