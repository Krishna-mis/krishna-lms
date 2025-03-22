import { useState, useEffect } from "react";
import { FiUser, FiFileText, FiCheckCircle, FiXCircle } from "react-icons/fi";

const Dashboard = () => {
  const [admissionStatus, setAdmissionStatus] = useState("Pending");
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });

  useEffect(() => {
    // Fetch admission status from backend (dummy example)
    setTimeout(() => {
      setAdmissionStatus("Approved"); // Simulate API response
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Welcome, {user.name}
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="p-6 shadow-lg rounded-2xl bg-white flex items-center space-x-4">
          <FiUser className="text-blue-500 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold">Your Profile</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Admission Status Card */}
        <div className="p-6 shadow-lg rounded-2xl bg-white flex items-center space-x-4">
          {admissionStatus === "Approved" ? (
            <FiCheckCircle className="text-green-500 text-4xl" />
          ) : (
            <FiXCircle className="text-red-500 text-4xl" />
          )}
          <div>
            <h2 className="text-xl font-semibold">Admission Status</h2>
            <p
              className={`text-lg font-bold ${
                admissionStatus === "Approved"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {admissionStatus}
            </p>
          </div>
        </div>

        {/* Upload Documents Card */}
        <div className="p-6 shadow-lg rounded-2xl bg-white flex items-center space-x-4">
          <FiFileText className="text-yellow-500 text-4xl" />
          <div>
            <h2 className="text-xl font-semibold">Upload Documents</h2>
            <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
