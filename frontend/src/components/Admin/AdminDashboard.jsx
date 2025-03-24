import { useState, useEffect } from "react";
import {
  FiUsers,
  FiCheckCircle,
  FiXCircle,
  FiPieChart,
  FiBriefcase,
  FiBell,
  FiFileText,
  FiUserPlus,
  FiMenu,
  FiHome,
  FiSettings,
  FiLogOut,
  FiX,
  FiChevronRight,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Placement Management",
      description: "Manage campus drives and student placements",
      icon: <FiBriefcase className="text-white text-xl" />,
      link: "/admin/placements",
      gradient: "from-pink-500 to-red-500",
      textColor: "text-pink-100",
    },
    {
      title: "Circulars",
      description: "Publish and manage institutional circulars",
      icon: <FiFileText className="text-white text-xl" />,
      link: "/admin/circulars",
      gradient: "from-indigo-500 to-blue-500",
      textColor: "text-indigo-100",
    },
    {
      title: "Admissions",
      description: "Review and process admission applications",
      icon: <FiUserPlus className="text-white text-xl" />,
      link: "/admin/admissions",
      gradient: "from-purple-500 to-indigo-500",
      textColor: "text-purple-100",
    },
  ];
  const [stats, setStats] = useState({
    totalStudents: 0,
    pending: 0,
    approved: 0,
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    // Adjust sidebar based on screen size
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    // Initial call
    handleResize();

    // Setup listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simulate fetching stats
    setTimeout(() => {
      setStats({ totalStudents: 120, pending: 2, approved: 118 });
    }, 1000);
  }, []);

  const handleApproval = (id, status) => {
    setAdmissionRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status } : req))
    );
    setStats((prev) => ({
      ...prev,
      pending: prev.pending - 1,
      approved: status === "Approved" ? prev.approved + 1 : prev.approved,
    }));
  };

  const SidebarLink = ({ icon, text, isActive, onClick }) => (
    <div
      className={`flex items-center px-4 py-3 text-white rounded-lg transition-all cursor-pointer mb-2
        ${
          isActive
            ? "bg-indigo-800"
            : "opacity-75 hover:opacity-100 hover:bg-indigo-600"
        }`}
      onClick={onClick}
    >
      {icon}
      {(isSidebarOpen || isMobileSidebarOpen) && (
        <span className="ml-4">{text}</span>
      )}
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-30 md:hidden
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          w-64 bg-gradient-to-b from-indigo-700 to-purple-800 text-white transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">EduAdmin</h2>
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="p-2 rounded-lg hover:bg-indigo-600 transition-colors"
          >
            <FiX className="text-white text-xl" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          <SidebarLink
            icon={<FiHome className="text-xl" />}
            text="Dashboard"
            isActive={true}
          />
          <SidebarLink icon={<FiUsers className="text-xl" />} text="Students" />
          <SidebarLink
            icon={<FiBriefcase className="text-xl" />}
            text="Placements"
            onClick={() => navigate("/admin/placements")}
          />
          <SidebarLink
            icon={<FiFileText className="text-xl" />}
            text="Circulars"
            onClick={() => navigate("/admin/circulars")}
          />
          <SidebarLink
            icon={<FiUserPlus className="text-xl" />}
            text="Admissions"
            onClick={() => navigate("/admin/admissions")}
          />
        </nav>

        <div className="absolute bottom-0 w-full px-4 pb-6">
          <SidebarLink
            icon={<FiSettings className="text-xl" />}
            text="Settings"
          />
          <SidebarLink
            icon={<FiLogOut className="text-xl" />}
            text="Logout"
            onClick={() => navigate("/")}
          />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={`hidden md:block
          ${isSidebarOpen ? "w-64" : "w-20"} 
          bg-gradient-to-b from-indigo-700 to-purple-800 text-white transition-all duration-300 ease-in-out`}
      >
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && <h2 className="text-xl font-bold">EduAdmin</h2>}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-indigo-600 transition-colors"
          >
            <FiMenu className="text-white text-xl" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          <SidebarLink
            icon={<FiHome className="text-xl" />}
            text="Dashboard"
            isActive={true}
          />
          <SidebarLink icon={<FiUsers className="text-xl" />} text="Students" />
          <SidebarLink
            icon={<FiBriefcase className="text-xl" />}
            text="Placements"
            onClick={() => navigate("/admin/placements")}
          />
          <SidebarLink
            icon={<FiFileText className="text-xl" />}
            text="Circulars"
            onClick={() => navigate("/admin/circulars")}
          />
          <SidebarLink
            icon={<FiUserPlus className="text-xl" />}
            text="Admissions"
            onClick={() => navigate("/admin/admissions")}
          />
        </nav>
        {/* Logout Button at the Bottom */}
        <div className="px-4 mb-6">
          <SidebarLink
            icon={<FiLogOut className="text-xl" />}
            text="Logout"
            onClick={() => navigate("/")}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none"
              onClick={() => setIsMobileSidebarOpen(true)}
            >
              <FiMenu className="h-6 w-6" />
            </button>

            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-2 md:ml-0">
              Admin Dashboard
            </h1>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <FiBell className="text-gray-600 text-xl cursor-pointer hover:text-indigo-600 transition-colors" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
                  3
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center cursor-pointer">
                <span className="text-white font-medium">JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">
              Overview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Total Students Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500 transform hover:-translate-y-1 transition-transform">
                <div className="p-4 sm:p-6 flex items-center">
                  <div className="bg-blue-100 p-3 sm:p-4 rounded-lg flex-shrink-0">
                    <FiUsers className="text-blue-600 text-xl sm:text-2xl" />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-500">
                      Total Students
                    </p>
                    <div className="flex items-end">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                        {stats.totalStudents}
                      </h3>
                      <span className="ml-2 text-xs font-medium text-green-500 flex items-center">
                        +12% <FiCheckCircle className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 px-4 sm:px-6 py-2 flex justify-between items-center">
                  <div className="text-xs text-blue-700 font-medium">
                    View all students
                  </div>
                  <FiChevronRight className="text-blue-700" />
                </div>
              </div>

              {/* Pending Requests Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-500 transform hover:-translate-y-1 transition-transform">
                <div className="p-4 sm:p-6 flex items-center">
                  <div className="bg-yellow-100 p-3 sm:p-4 rounded-lg flex-shrink-0">
                    <FiPieChart className="text-yellow-600 text-xl sm:text-2xl" />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-500">
                      Pending Requests
                    </p>
                    <div className="flex items-end">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                        {stats.pending}
                      </h3>
                      <span className="ml-2 text-xs font-medium text-red-500 flex items-center">
                        -4% <FiXCircle className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 px-4 sm:px-6 py-2 flex justify-between items-center">
                  <div className="text-xs text-yellow-700 font-medium">
                    View pending requests
                  </div>
                  <FiChevronRight className="text-yellow-700" />
                </div>
              </div>

              {/* Approved Students Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500 transform hover:-translate-y-1 transition-transform">
                <div className="p-4 sm:p-6 flex items-center">
                  <div className="bg-green-100 p-3 sm:p-4 rounded-lg flex-shrink-0">
                    <FiCheckCircle className="text-green-600 text-xl sm:text-2xl" />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-500">
                      Approved Students
                    </p>
                    <div className="flex items-end">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                        {stats.approved}
                      </h3>
                      <span className="ml-2 text-xs font-medium text-green-500 flex items-center">
                        +18% <FiCheckCircle className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 px-4 sm:px-6 py-2 flex justify-between items-center">
                  <div className="text-xs text-green-700 font-medium">
                    View approved students
                  </div>
                  <FiChevronRight className="text-green-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-6">
              Quick Access
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${card.gradient} rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer overflow-hidden`}
                  onClick={() => navigate(card.link)}
                >
                  <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {card.title}
                      </h3>
                      <p className={`${card.textColor} text-sm mb-4 sm:mb-0`}>
                        {card.description}
                      </p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 group-hover:bg-opacity-30 transition-all self-start sm:self-center">
                      {card.icon}
                    </div>
                  </div>
                  <div className="bg-black bg-opacity-10 px-4 sm:px-6 py-2 flex justify-between items-center">
                    <div className="text-xs text-white font-medium">
                      Access now
                    </div>
                    <FiChevronRight className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
