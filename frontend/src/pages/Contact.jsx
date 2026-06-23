import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-slate-300 text-lg">
            Need help? Our team is here to assist students and employers.
          </p>
        </div>
      </div>

      {/* Help Center Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-bold mb-3">
              Student - Internship & Jobs
            </h2>

            <p className="text-gray-600 mb-5">
              For internship and job related queries.
            </p>

            <a
              href="mailto:careerconnect45@gmail.com?subject=Internship & Job Support"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Contact Support
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-bold mb-3">
              Student - Trainings
            </h2>

            <p className="text-gray-600 mb-5">
              For training and course related queries.
            </p>

            <a
              href="mailto:careerconnect45@gmail.com?subject=Training Support"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              Contact Support
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-bold mb-3">
              Employers
            </h2>

            <p className="text-gray-600 mb-5">
              For employer and recruitment related queries.
            </p>

            <a
              href="mailto:careerconnect45@gmail.com?subject=Employer Support"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
            >
              Contact Support
            </a>
          </div>

        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-5xl mx-auto px-4 pb-10">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              📞 Contact Support
            </h3>

            <p className="text-gray-700 text-lg">
              +91 8591700000
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              📧 Email Support
            </h3>

            <p className="text-gray-700 text-lg">
              careerconnect45@gmail.com
            </p>
          </div>

        </div>
      </div>

      {/* Address */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Office Address
          </h3>

          <p className="text-gray-700">
            Om Sai Apartment, Room No. 202,
            Mulund, Mumbai - 400081
          </p>

          <p className="text-gray-500 mt-3">
            Monday - Friday | 10:00 AM - 6:00 PM
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;