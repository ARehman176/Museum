import React, { useState } from "react";
import { FiSearch, FiUpload } from "react-icons/fi";
import logo from "../assets/logo.png"; 
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Submission = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    entity: "",
    isOwner: "yes",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United Kingdom",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-[#121418] min-h-screen text-white">
      {/* Navbar */}
      <nav className="bg-black text-white px-4 sm:px-6 py-3">
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 text-xs sm:text-sm font-medium mb-3">
          <button className="flex items-center gap-1 hover:text-yellow-400">
            <FiSearch className="text-base sm:text-lg" /> Search
          </button>
          <button className="flex items-center gap-1 hover:text-yellow-400">
            <FiUpload className="text-base sm:text-lg" /> Submit Content
          </button>
          <a href="#" className="hover:text-yellow-400">
            Donate
          </a>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-around items-center gap-4 sm:gap-0 mb-2">
          <div>
            <img src={logo} alt="Logo" className="w-16 sm:w-20" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium mt-2 sm:mt-1">
            <a href="/" className="hover:text-yellow-400">Home</a>
            <a href="/galleries" className="hover:text-yellow-400">Galleries</a>
            <a href="/documentaries" className="hover:text-yellow-400">Documentaries</a>
            <a href="#" className="hover:text-yellow-400">Membership</a>
            <a href="#" className="hover:text-yellow-400">Blog</a>
            <a href="#" className="hover:text-yellow-400">Support us</a>
          </div>
        </div>
      </nav>

      {/* Form Section */}
      <div className="flex items-center bg-[#121418] justify-center p-6 sm:p-12">
        <div className="w-full max-w-6xl  p-8 rounded-lg ">
          <h2 className="text-2xl font-semibold mb-6">Content Submission</h2>

          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Submitter Information */}
            <div className="flex-1 mb-8 md:mb-0">
              <h3 className="text-lg font-medium mb-4">Submitter Information</h3>
              <hr className="mb-4 text-[#454545]" />

              <div className="space-y-4">
                {[
                  { label: "Name", name: "name", type: "text" },
                  { label: "Email", name: "email", type: "email" },
                  { label: "Phone Number", name: "phone", type: "tel" },
                  { label: "Entity Name", name: "entity", type: "text" },
                ].map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium mb-1">{field.label}</label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded bg-[#191B20] border border-[#454545] focus:outline-none"
                    />
                  </div>
                ))}

                <div className="flex items-center space-x-6  mt-10">
                  <span>Are you Content Owner?</span>
                  <label className="flex items-center space-x-1 ml-56">
                    <input
                      type="radio"
                      name="isOwner"
                      value="yes"
                      checked={formData.isOwner === "yes"}
                      onChange={handleChange}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="isOwner"
                      value="no"
                      checked={formData.isOwner === "no"}
                      onChange={handleChange}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Submitter Address */}
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-4">Submitter Address</h3>
              <hr className="mb-4 text-[#454545]" />

              <div className="space-y-4">
                {[
                  { label: "Street Address", name: "address" },
                  { label: "City", name: "city" },
                  { label: "State/Province", name: "state" },
                  { label: "Zip Code", name: "zip" },
                ].map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium mb-1">{field.label}</label>
                    <input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded bg-[#191B20] border border-[#454545] focus:outline-none"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="country" className="block text-sm font-medium mb-1">Country</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-[#191B20] border-[#454545] focus:outline-none"
                  >
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
         <Link to="/Finalsubmission">
          <div className="flex justify-end mt-8">
            <button className="bg-gray-300 text-black font-semibold px-6 py-2 rounded hover:bg-gray-400 transition">
              Next
            </button>
          </div></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Submission;

