import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Sidebar açma/kapama
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 

  return (
    <div className="flex bg-gray-900 ">
       
      {/* Sidebar, küçük ekranlarda açılabilir olacak */}
      <div
        className={`z-100 fixed ${
          isSidebarOpen ? "block mt-15" : "hidden"
        } md:block  transition-all duration-300 mt-0`}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={toggleSidebar}/>
      </div> 

      {/* Navbar her zaman görünür olacak */}
      <div className="flex-1 flex flex-col">
        
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
        
        <div className="flex-1 px-0 sm:px-4 bg-gray-900 min-h-screen mt-20 md:ml-56">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
