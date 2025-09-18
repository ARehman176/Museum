import React from "react";
import { FiSearch, FiUpload } from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import girl from "../assets/girl.png";
import girl1 from "../assets/girl1.png";
import girl2 from "../assets/girl2.png";
import girl3 from "../assets/girl3.png";
import Footer from "../Components/Footer";
const Curator = () => {
  const data = [
    {
      id: 1,
      image: girl,
      description: "Excepteur sint occaecat cupidatat non proid.",
      owner: "John Doe",
      gallery: "eiusmod tempor incididunt",
      origin: "North America",
      status: "Accept",
    },
    {
      id: 2,
      image: girl1,

      description: "Nemo enim ipsam atem quia voluptas sit",
      owner: "Arlene McCoy",
      gallery: "Duis aute irure dolor in",
      origin: "Croatia",
      status: "Flag",
    },
    {
      id: 3,
      image: girl2,

      description: "Neque porro quisquam est, qui dolorem",
      owner: "Jacob Jones",
      gallery: "Excepteur sint occaecat cupidat",
      origin: "Egypt",
      status: "Reject",
    },
    {
      id: 4,
      image: girl3,

      description: "exercitationem ullam corporis suscipit laboriosam",
      owner: "Cody Fisher",
      gallery: "sunt in culpa qui",
      origin: "Jordan",
      status: "Accept",
    },
  ];
  const getStatusStyle = (status) => {
    const baseStyle = "text-white px-3 py-1 rounded w-24 text-center"; // fixed width

    switch (status) {
      case "Accept":
        return `bg-[#43FBAE] ${baseStyle}`;
      case "Reject":
        return `bg-[#FF5656] ${baseStyle}`;
      case "Flag":
        return `bg-[#CACACA] text-black px-3 py-1 rounded w-24 text-center`;
      default:
        return `bg-[#43FBAE] ${baseStyle}`;
    }
  };

  return (
    <div>
      <nav className="bg-black text-white px-4 sm:px-6 py-3">
        {/* Top Right Menu */}
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

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row sm:justify-around items-center gap-4 sm:gap-0 mb-2">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="w-16 sm:w-20" />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium mt-2 sm:mt-1">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
            <a href="/galliries" className="hover:text-yellow-400">
              Galleries
            </a>
            <a href="/Documentaries" className="hover:text-yellow-400">
              Documentaries
            </a>
            <a href="#" className="hover:text-yellow-400">
              Membership
            </a>
            <a href="#" className="hover:text-yellow-400">
              Blog
            </a>
            <a href="#" className="hover:text-yellow-400">
              Support us
            </a>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-[#121418] text-white flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#121418] p-6 ml-60 mt-4">
          <nav className="space-y-6">
            <Link to="/Profile">
              <div className="text-gray-400 hover:text-white cursor-pointer">
                My Profile
              </div>
            </Link>
            <Link to="/Password">
              <div className="text-gray-400 hover:text-white cursor-pointer mt-5">
                Password
              </div>
            </Link>
            <div className="hover:text-white cursor-pointer text-lg font-semibold mt-5 border-l-4 border-white pl-3">
              Curator
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="w-4xl p-8">
          <h1 className="text-2xl font-bold mb-6">Curator Section</h1>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className=" text-gray-300">
                <tr>
                  <th className="p-3">Image</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Owner Name</th>
                  <th className="p-3">Gallery Name</th>
                  <th className="p-3">Origin</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className=" hover:bg-[#1e2228] ">
                    <td className="p-3">
                      <img
                        src={item.image}
                        alt="Gallery"
                        className="w-12 h-12 rounded object-cover"
                      />
                    </td>
                    <td className="p-3">{item.description}</td>
                    <td className="p-3">{item.owner}</td>
                    <td className="p-3">{item.gallery}</td>
                    <td className="p-3">{item.origin}</td>
                    <td className="p-3">
                      <button className={getStatusStyle(item.status)}>
                        {item.status}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Curator;
