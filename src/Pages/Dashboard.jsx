import React from "react";
import { FiHome, FiUsers, FiCreditCard,  } from "react-icons/fi";
import logo from '../assets/logo.png'
import screenshoot from '../assets/screenshoot.png'
import girl from "../assets/girl.png";
import girl1 from "../assets/girl1.png";
import girl2 from "../assets/girl2.png";
import girl3 from "../assets/girl3.png";
import user from "../assets/user.png"
import lawn from "../assets/lawn.png"
const Dashboard = () => {
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
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-60 bg-[#0d0d0d] flex flex-col items-center py-8 ">
        <div className="mb-10">
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-full" />
        </div>
        <nav className="flex flex-col gap-6 text-gray-300">
          <a href="#" className="flex items-center gap-3 hover:text-white">
            <FiHome /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 text-[#454545]">
            <FiUsers /> Users
          </a>
          <a href="#" className="flex items-center gap-3 text-[#454545]">
            <FiCreditCard /> Subscription
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-20 flex flex-col p-6 bg-[#121418s]">
        {/* Header */}
        <div className="bg-[#191B20] rounded-lg p-6 flex items-center justify-between ">
          <div>
            <h1 className="text-3xl font-bold">Get Thousands<br/> Premium Content.</h1>
            <p className="text-gray-400 mt-2 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed<br/> do eiusmod tempor
               incididuntenim ad minim veniam, quis<br/> nostrud exercitation ullamco
            </p>
          </div>
         
          <div>
            <img src={screenshoot} alt="" className="w-60" />
          </div>
        </div>

        {/* Table */}
       
         <div className="w-4xl p-8 -ml-8 ">
      
 <h2 className="text-2xl font-bold mt-6 mb-4">Admin Dashboard</h2>
          <div className="overflow-x-auto ">
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

        
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-[#111] p-6 flex flex-col gap-6">
        {/* User Card */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg flex flex-col items-center text-center mt-10">
          <img
            src={user}
            alt="User"
            className="w-30 h-30 rounded-full mb-3"
          />
          <h3 className="text-lg font-semibold">Jenny Wilson</h3>
          <p className="text-gray-400 text-sm">JennyWilson@email.com</p>
          <button className="text-red-400 mt-4 hover:underline">Logout</button>
        </div>

        {/* Ad Card */}
       <div>
        <img src={lawn} alt="" className="w-60 h-80 mt-8" />
       </div>
      </div>
    </div>
  );
};

export default Dashboard;

