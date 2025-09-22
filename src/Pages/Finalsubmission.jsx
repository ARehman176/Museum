import React, { useState } from 'react';
import { FiSearch, FiUpload, FiUploadCloud } from "react-icons/fi";
import logo from "../assets/logo.png";

const Finalsubmission = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    gallery: "",
    linkTitle: "",
    linkUrl: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can send formData to your backend here
  };

  return (
    <div>
      {/* Navigation */}
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

      {/* Content Submission Form */}
      <div className="min-h-screen bg-[#121418] text-white p-6 flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-6xl  p-8 rounded-lg "
        >
          <h2 className="text-2xl font-semibold mb-6">Content Submission</h2>

          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Left Column */}
            <div className="flex-1 mb-8 md:mb-0">
              <h3 className="text-lg font-medium mb-4">Content Information</h3>
              <hr className="mb-4 border-gray-600" />

              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm mb-3">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-[#2a2b30] border border-gray-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="subtitle" className="block text-sm mb-1">Subtitle</label>
                  <input
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-[#2a2b30] border border-gray-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm mb-1">Description of Content</label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-[#2a2b30] border border-gray-600 focus:outline-none"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="gallery" className="block text-sm mb-1">Gallery Name</label>
                  <select
                    id="gallery"
                    name="gallery"
                    value={formData.gallery}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-[#2a2b30] border border-gray-600 focus:outline-none"
                  >
                    <option value="">Select Gallery</option>
                    <option value="gallery1">Gallery 1</option>
                    <option value="gallery2">Gallery 2</option>
                    <option value="gallery3">Gallery 3</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="linkTitle" className="block text-sm mb-1">
                    Link Title <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="linkTitle"
                    name="linkTitle"
                    value={formData.linkTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-[#2a2b30] border border-gray-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="linkUrl" className="block text-sm mb-1">
                    Link URL <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    id="linkUrl"
                    name="linkUrl"
                    value={formData.linkUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-[#2a2b30] border border-gray-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-4">Upload Content File</h3>
              <hr className="mb-4 border-gray-600" />
                   <h1 className='mb-2' >Media File Upload</h1>
              <div className="relative border-2   border-gray-600 rounded-md h-64 flex flex-col items-center justify-center text-center p-4 bg-[#2a2b30]">
                <FiUploadCloud className="text-3xl text-gray-400 mb-2" />
                <p className="text-sm text-gray-400 mb-2">
                  Upload files from your computer or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  Supported format: mp4, .mov, .abc
                </p>
                <input
                  type="file"
                  name="file"
                  accept=".mp4,.mov,.abc"
                  onChange={handleChange}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-gray-300 text-black font-semibold px-6 py-2 rounded hover:bg-gray-400 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Finalsubmission;
