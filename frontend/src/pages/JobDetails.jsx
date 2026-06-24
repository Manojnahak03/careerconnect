import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/axios";

const JobDetails = () => {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    try {
      const res = await api.get(`/job/${id}`);

      setJob(res.data.job);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-10">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h1 className="text-4xl font-bold mb-4">
            {job.title}
          </h1>

          <h2 className="text-xl text-gray-700 mb-4">
            {job.company}
          </h2>

          <p className="mb-2">
            📍 {job.location}
          </p>

          <p className="mb-2">
            🏢 {job.address}
          </p>

          <p className="mb-4 text-green-600 font-bold">
            ₹ {job.salary}
          </p>

          <hr className="my-6" />

          <h3 className="text-2xl font-semibold mb-3">
            Job Description
          </h3>

          <p className="text-gray-700 leading-7">
            {job.description}
          </p>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
            Apply Now
          </button>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetails;