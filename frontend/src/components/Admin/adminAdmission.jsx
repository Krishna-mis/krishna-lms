import { useEffect, useState } from "react";
import {
  FaCheck,
  FaTimes,
  FaUserGraduate,
  FaEnvelope,
  FaBook,
  FaGraduationCap,
  FaFilter,
  FaSearch,
  FaBell,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "http://localhost:5000"; // Replace with your API

const AdminAdmission = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await fetch(`${API_URL}/api/applications`);
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Error fetching applications:", error);
      toast.error("Failed to load applications. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id, status, name) => {
    try {
      const response = await fetch(`${API_URL}/api/applications/${id}/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update status");
      }

      // Custom success messages based on status
      if (status === "accepted") {
        toast.success(`🎉 ${name} has been accepted successfully!`, {
          position: "top-right",
          autoClose: 3000,
        });
      } else if (status === "rejected") {
        toast.info(`${name}'s application has been rejected.`, {
          position: "top-right",
          autoClose: 3000,
        });
      }

      fetchApplications(); // Refresh data
    } catch (error) {
      console.error("Error updating application:", error);
      toast.error(error.message || "Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const filteredApplications = applications
    .filter((app) => {
      if (filter === "all") return true;
      return app.status === filter;
    })
    .filter(
      (app) =>
        app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.courseInterest.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-800 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <ToastContainer />

      {/* Header */}
      <header className="bg-white shadow-md py-6 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <FaGraduationCap className="text-indigo-600 text-3xl mr-3" />
            <h1 className="text-2xl font-bold text-gray-800">
              Admissions Dashboard
            </h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <FaFilter className="text-gray-500" />
              <span className="text-gray-700 font-medium">
                Filter by status:
              </span>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Applications</option>
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, email or course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500">
            <p className="text-gray-500 font-medium">Total Applications</p>
            <p className="text-3xl font-bold text-gray-800">
              {applications.length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <p className="text-gray-500 font-medium">Accepted</p>
            <p className="text-3xl font-bold text-gray-800">
              {applications.filter((app) => app.status === "accepted").length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
            <p className="text-gray-500 font-medium">Rejected</p>
            <p className="text-3xl font-bold text-gray-800">
              {applications.filter((app) => app.status === "rejected").length}
            </p>
          </div>
        </div>

        {/* Applications */}
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <FaUserGraduate className="text-indigo-600 mr-2" />
          Student Applications
        </h2>

        {loading ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading applications...</p>
          </div>
        ) : filteredApplications.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <FaSearch className="text-gray-400 text-4xl mb-4 mx-auto" />
            <p className="text-gray-500">
              No applications found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredApplications.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center mb-2">
                        <FaUserGraduate className="text-indigo-600 mr-2" />
                        {app.fullName}
                      </h3>
                      <div className="space-y-1 text-sm">
                        <p className="text-gray-600 flex items-center">
                          <FaEnvelope className="text-gray-400 mr-2" />{" "}
                          {app.email}
                        </p>
                        <p className="text-gray-600 flex items-center">
                          <FaBook className="text-gray-400 mr-2" />{" "}
                          {app.courseInterest}
                        </p>
                        <p className="text-gray-600 flex items-center mt-2">
                          <span
                            className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                              app.status
                            )} border`}
                          >
                            {app.status.charAt(0).toUpperCase() +
                              app.status.slice(1)}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                      {app.status !== "accepted" && (
                        <button
                          onClick={() =>
                            handleAction(app.id, "accepted", app.fullName)
                          }
                          className="flex-1 md:flex-none bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:from-green-600 hover:to-emerald-700 transition shadow-md"
                        >
                          <FaCheck /> Accept
                        </button>
                      )}

                      {app.status !== "rejected" && (
                        <button
                          onClick={() =>
                            handleAction(app.id, "rejected", app.fullName)
                          }
                          className="flex-1 md:flex-none bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:from-red-600 hover:to-pink-700 transition shadow-md"
                        >
                          <FaTimes /> Reject
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAdmission;
