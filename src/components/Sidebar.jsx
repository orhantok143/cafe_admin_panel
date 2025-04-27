import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { menuData } from "../assets/menuItems";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);  // Küçük cihaz kontrolü

  const handleSidebarClick = (e) => {
    e.stopPropagation();
  };

  const toggleMenu = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);  // Ekran boyutuna göre güncelleme
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      onClick={setIsSidebarOpen}
      className={`fixed md:static w-screen h-screen md:rounded-xl md:w-full md:h-full sm:bg-[#0000001a] backdrop-blur-xl
    ${isSidebarOpen ? "left-0" : "-left-64"}`}
    >
      <div
        onClick={handleSidebarClick}
        className={`lg:flex flex-col bg-gray-800 md:rounded-xl w-56 fixed md:static transition-all duration-300 ${
          isSidebarOpen ? "left-0" : "-left-64"
        }`}
      >
        <ul className="menu w-full">
          {menuData.map((item, idx) => (
            <li key={idx} className="w-full py-2">
              {item.submenu ? (
                <div className="flex flex-col items-start">
                  <div
                    className="w-full flex items-center justify-between cursor-pointer py-2 rounded"
                    onClick={() => toggleMenu(idx)}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                      {item.name}
                    </div>

                    {openIndex === idx ? (
                      <FiChevronUp className="w-4 h-4 text-gray-200" />
                    ) : (
                      <FiChevronDown className="w-4 h-4 text-gray-200" />
                    )}
                  </div>
                  {openIndex === idx && (
                    <ul className="pl-6 py-1 space-y-1">
                      {item.submenu.map((sub, subIdx) => (
                        <li key={subIdx} className="text-[12px]">
                          <NavLink
                            to={sub.path}
                            onClick={isMobile ? () => setIsSidebarOpen() : undefined} // Küçük cihazlarda tıklanınca kapanır
                            className={({ isActive }) =>
                              isActive
                                ? "bg-primary text-white p-2 rounded-md"
                                : ""
                            }
                          >
                            {sub.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  onClick={() => {
                    setOpenIndex(null);
                    if (isMobile) setIsSidebarOpen(); // Alt menüsü olmayan bir menüye tıklanınca küçük cihazlarda sidebar kapanır
                  }}
                  className={({ isActive }) =>
                    isActive ? "bg-primary text-white p-2 rounded-md" : ""
                  }
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    {item.name}
                  </div>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
