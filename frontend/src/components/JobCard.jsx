import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        {job.title}
      </h2>

      <p className="text-lg text-gray-700 font-medium">
        {job.company}
      </p>

      <p className="text-gray-500 mt-1">
        📍 {job.location}
      </p>

      <p className="text-green-600 font-semibold mt-2">
        ₹ {job.salary}
      </p>

      <p className="text-gray-600 mt-3">
        {job.description?.slice(0, 100)}...
      </p>

      <Link
        to={`/jobs/${job._id}`}
        className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default JobCard;