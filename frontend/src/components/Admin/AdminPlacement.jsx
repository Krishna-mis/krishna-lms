import { useEffect, useState } from "react";
import {
  FaTrash,
  FaPlus,
  FaBriefcase,
  FaMapMarkerAlt,
  FaDollarSign,
  FaUsers,
  FaBuilding,
  FaTimes,
} from "react-icons/fa";
import { BsPersonBadge } from "react-icons/bs";
import { MdAdminPanelSettings, MdDashboard } from "react-icons/md";

const API_URL = "http://localhost:5000";

const AdminPlacement = () => {
  const [placements, setPlacements] = useState([]);
  const [placementRecords, setPlacementRecords] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isRecordFormOpen, setIsRecordFormOpen] = useState(false);
  const [form, setForm] = useState({
    company_name: "",
    role: "",
    location: "",
    package: "",
    applied_students: "",
  });

  const [recordForm, setRecordForm] = useState({
    company_name: "",
    placed_students: "",
    package: "",
  });

  useEffect(() => {
    fetchPlacements();
    fetchPlacementRecords();
  }, []);

  const fetchPlacements = async () => {
    try {
      const res = await fetch(`${API_URL}/placements`);
      const data = await res.json();
      setPlacements(data);
    } catch (error) {
      console.error("Error fetching placements:", error);
    }
  };

  const fetchPlacementRecords = async () => {
    try {
      const res = await fetch(`${API_URL}/placementS/records`);
      const data = await res.json();
      setPlacementRecords(data);
    } catch (error) {
      console.error("Error fetching placement records:", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRecordChange = (e) => {
    setRecordForm({ ...recordForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/placements`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({
          company_name: "",
          role: "",
          location: "",
          package: "",
          applied_students: "",
        });
        setIsFormOpen(false);
        fetchPlacements();
      }
    } catch (error) {
      console.error("Error adding placement:", error);
    }
  };

  const handleRecordSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/placement-records`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recordForm),
      });

      if (res.ok) {
        setRecordForm({
          company_name: "",
          placed_students: "",
          package: "",
        });
        setIsRecordFormOpen(false);
        fetchPlacementRecords();
      }
    } catch (error) {
      console.error("Error adding placement record:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/placements/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchPlacements();
      }
    } catch (error) {
      console.error("Error deleting placement:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg">
              <FaBriefcase className="text-2xl text-blue-800" />
            </div>
            <h1 className="text-2xl font-bold">Placement Portal</h1>
          </div>
          <div className="flex items-center space-x-3 bg-blue-700 bg-opacity-30 px-4 py-2 rounded-lg">
            <MdAdminPanelSettings className="text-2xl text-yellow-300" />
            <span className="font-medium">Admin Dashboard</span>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FaBuilding className="text-2xl text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Companies</p>
              <p className="text-2xl font-bold text-gray-800">
                {placements.length}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <FaUsers className="text-2xl text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Students Placed</p>
              <p className="text-2xl font-bold text-gray-800">
                {placementRecords.reduce(
                  (sum, record) => sum + parseInt(record.placed_students || 0),
                  0
                )}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 flex items-center space-x-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FaDollarSign className="text-2xl text-purple-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Avg Package</p>
              <p className="text-2xl font-bold text-gray-800">
                {placementRecords.length
                  ? (
                      placementRecords.reduce(
                        (sum, record) => sum + parseFloat(record.package || 0),
                        0
                      ) / placementRecords.length
                    ).toFixed(2)
                  : 0}{" "}
                LPA
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500 flex items-center space-x-4">
            <div className="bg-amber-100 p-3 rounded-lg">
              <BsPersonBadge className="text-2xl text-amber-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Top Package</p>
              <p className="text-2xl font-bold text-gray-800">
                {placementRecords.length
                  ? Math.max(
                      ...placementRecords.map((record) =>
                        parseFloat(record.package || 0)
                      )
                    )
                  : 0}{" "}
                LPA
              </p>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <MdDashboard className="text-2xl" />
              <h2 className="text-xl font-semibold">Manage Placements</h2>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="bg-white text-blue-800 flex items-center space-x-2 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition duration-300 shadow-sm"
              >
                <FaPlus className="text-blue-600" />
                <span>Add Placement</span>
              </button>
              <button
                onClick={() => setIsRecordFormOpen(!isRecordFormOpen)}
                className="bg-white text-blue-800 flex items-center space-x-2 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition duration-300 shadow-sm"
              >
                <FaPlus className="text-blue-600" />
                <span>Add Record</span>
              </button>
            </div>
          </div>

          {/* Placement Form */}
          {isFormOpen && (
            <div className="p-6 bg-blue-50 border-b border-blue-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-blue-800">
                  Add New Placement Opportunity
                </h3>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-500 hover:text-red-500 transition"
                >
                  <FaTimes />
                </button>
              </div>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="space-y-1">
                  <label className="text-sm text-gray-600 font-medium">
                    Company Name
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    <div className="bg-gray-100 p-3 text-gray-500">
                      <FaBuilding />
                    </div>
                    <input
                      className="flex-1 p-2 outline-none"
                      type="text"
                      name="company_name"
                      value={form.company_name}
                      onChange={handleChange}
                      placeholder="e.g. Google"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-600 font-medium">
                    Role
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    <div className="bg-gray-100 p-3 text-gray-500">
                      <BsPersonBadge />
                    </div>
                    <input
                      className="flex-1 p-2 outline-none"
                      type="text"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      placeholder="e.g. Software Engineer"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-600 font-medium">
                    Location
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    <div className="bg-gray-100 p-3 text-gray-500">
                      <FaMapMarkerAlt />
                    </div>
                    <input
                      className="flex-1 p-2 outline-none"
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="e.g. Bangalore"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-600 font-medium">
                    Package (LPA)
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    <div className="bg-gray-100 p-3 text-gray-500">
                      <FaDollarSign />
                    </div>
                    <input
                      className="flex-1 p-2 outline-none"
                      type="number"
                      name="package"
                      value={form.package}
                      onChange={handleChange}
                      placeholder="e.g. 12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-600 font-medium">
                    No. of Applications
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    <div className="bg-gray-100 p-3 text-gray-500">
                      <FaUsers />
                    </div>
                    <input
                      className="flex-1 p-2 outline-none"
                      type="number"
                      name="applied_students"
                      value={form.applied_students}
                      onChange={handleChange}
                      placeholder="e.g. 50"
                      required
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium px-4 py-3 rounded-lg transition duration-300 shadow-md"
                  >
                    Submit Placement
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Placement Records Form */}
          {isRecordFormOpen && (
            <div className="p-6 bg-blue-50 border-b border-blue-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-blue-800">
                  Add Placement Record
                </h3>
                <button
                  onClick={() => setIsRecordFormOpen(false)}
                  className="text-gray-500 hover:text-red-500 transition"
                >
                  <FaTimes />
                </button>
              </div>
              <form
                onSubmit={handleRecordSubmit}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="space-y-1">
                  <label className="text-sm text-gray-600 font-medium">
                    Company Name
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    <div className="bg-gray-100 p-3 text-gray-500">
                      <FaBuilding />
                    </div>
                    <input
                      className="flex-1 p-2 outline-none"
                      type="text"
                      name="company_name"
                      value={recordForm.company_name}
                      onChange={handleRecordChange}
                      placeholder="e.g. Microsoft"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-600 font-medium">
                    Students Placed
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    <div className="bg-gray-100 p-3 text-gray-500">
                      <FaUsers />
                    </div>
                    <input
                      className="flex-1 p-2 outline-none"
                      type="number"
                      name="placed_students"
                      value={recordForm.placed_students}
                      onChange={handleRecordChange}
                      placeholder="e.g. 25"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-600 font-medium">
                    Package (LPA)
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    <div className="bg-gray-100 p-3 text-gray-500">
                      <FaDollarSign />
                    </div>
                    <input
                      className="flex-1 p-2 outline-none"
                      type="number"
                      name="package"
                      value={recordForm.package}
                      onChange={handleRecordChange}
                      placeholder="e.g. 18"
                      required
                    />
                  </div>
                </div>

                <div className="md:col-span-3">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-medium px-4 py-3 rounded-lg transition duration-300 shadow-md"
                  >
                    Submit Record
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Placement Records */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
              <FaBuilding className="mr-2" />
              Placement Records
            </h3>
            {placementRecords.length === 0 ? (
              <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <p className="text-gray-500">No placement records found</p>
                <button
                  onClick={() => setIsRecordFormOpen(true)}
                  className="mt-2 text-blue-600 hover:text-blue-800"
                >
                  Add your first record
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {placementRecords.map((record) => (
                  <div
                    key={record.id}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
                  >
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-lg mr-3">
                        <FaBuilding className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {record.company_name}
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                            <FaUsers className="mr-1" />{" "}
                            {record.placed_students} students
                          </span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full flex items-center">
                            <FaDollarSign className="mr-1" /> {record.package}{" "}
                            LPA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPlacement;
