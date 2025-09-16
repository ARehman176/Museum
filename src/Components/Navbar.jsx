import { FiSearch, FiUpload } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-4 sm:px-6 py-3">
      {/* Top Right Menu */}
      <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 text-xs sm:text-sm font-medium mb-3 ">
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
          
          </a>
          <a href="/galliries" className="hover:text-yellow-400">
            Galliries
          </a>
          <a href="#" className="hover:text-yellow-400">
            Documentaries
          </a>
          <a href="#" className="hover:text-yellow-400">
            Membership
          </a>
          <a href="#" className="hover:text-yellow-400">
            Blog
          </a>
          <button className="bg-gradient-to-r from-gray-200 to-gray-400 text-black px-3 sm:px-4 py-2 rounded font-bold -mt-1">
            🖤 DONATE NOW
          </button>
        </div>
      </div>
    </nav>
  );
}
