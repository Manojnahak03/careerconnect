import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Dream Job Today
          </h1>

          <p className="text-xl text-slate-300 mb-8">
            Connect with top companies and discover
            thousands of opportunities.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/register"
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl"
            >
              Get Started
            </Link>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose CareerConnect?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              Thousands of Jobs
            </h3>

            <p className="text-gray-600">
              Explore opportunities from various
              industries and companies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              Easy Applications
            </h3>

            <p className="text-gray-600">
              Apply for jobs quickly and efficiently.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              Trusted Employers
            </h3>

            <p className="text-gray-600">
              Connect with verified recruiters and companies.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <h2 className="text-5xl font-bold text-blue-600">
                1000+
              </h2>
              <p className="mt-2">Active Jobs</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-green-600">
                500+
              </h2>
              <p className="mt-2">Companies</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-purple-600">
                10K+
              </h2>
              <p className="mt-2">Job Seekers</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Ready to Start Your Career?
        </h2>

        <p className="text-slate-300 mb-8">
          Create your account and explore opportunities.
        </p>

        <Link
          to="/register"
          className="bg-blue-600 px-6 py-3 rounded-xl"
        >
          Join Now
        </Link>

      </section>

      <Footer />
    </div>
  );
};

export default Home;