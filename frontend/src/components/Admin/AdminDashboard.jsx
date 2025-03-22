import { useState, useEffect } from "react";
import { FiUsers, FiCheckCircle, FiXCircle, FiPieChart } from "react-icons/fi";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    pending: 0,
    approved: 0,
  });
  const [admissionRequests, setAdmissionRequests] = useState([
    { id: 1, name: "Alice Johnson", status: "Pending" },
    { id: 2, name: "Bob Smith", status: "Pending" },
  ]);

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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 shadow-lg rounded-2xl bg-white flex items-center space-x-4">
          <FiUsers className="text-blue-500 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold">Total Students</h2>
            <p className="text-lg font-bold text-gray-700">
              {stats.totalStudents}
            </p>
          </div>
        </div>

        <div className="p-6 shadow-lg rounded-2xl bg-white flex items-center space-x-4">
          <FiPieChart className="text-yellow-500 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold">Pending Requests</h2>
            <p className="text-lg font-bold text-yellow-600">{stats.pending}</p>
          </div>
        </div>

        <div className="p-6 shadow-lg rounded-2xl bg-white flex items-center space-x-4">
          <FiCheckCircle className="text-green-500 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold">Approved Students</h2>
            <p className="text-lg font-bold text-green-600">{stats.approved}</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Admission Requests</h2>
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        {admissionRequests.map((req) => (
          <div
            key={req.id}
            className="flex justify-between items-center border-b py-3"
          >
            <p className="text-lg">{req.name}</p>
            <div className="flex space-x-4">
              {req.status === "Pending" ? (
                <>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    onClick={() => handleApproval(req.id, "Approved")}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    onClick={() => handleApproval(req.id, "Rejected")}
                  >
                    Reject
                  </button>
                </>
              ) : (
                <p
                  className={`text-lg font-bold ${
                    req.status === "Approved"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {req.status}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
