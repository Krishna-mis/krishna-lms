import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaDollarSign,
  FaUsers,
  FaBuilding,
  FaTrophy,
  FaChartLine,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import { BsPersonBadge, BsGraphUp } from "react-icons/bs";
import { MdDashboard, MdHistory } from "react-icons/md";

const API_URL = "http://localhost:5000";

const PlacementManagement = () => {
  const [placements, setPlacements] = useState([]);
  const [placementRecords, setPlacementRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("opportunities");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const placementsRes = await fetch(`${API_URL}/placements`);
      const recordsRes = await fetch(`${API_URL}/placements/records`);

      const placementsText = await placementsRes.text();
      const recordsText = await recordsRes.text();

      console.log("Raw Placements Response:", placementsText);
      console.log("Raw Records Response:", recordsText);

      const placementsData = JSON.parse(placementsText);
      const recordsData = JSON.parse(recordsText);

      setPlacements(placementsData);
      setPlacementRecords(recordsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPlacements = placements.filter(
    (placement) =>
      placement.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      placement.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      placement.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const topCompanies = [...placementRecords]
    .sort((a, b) => parseFloat(b.package) - parseFloat(a.package))
    .slice(0, 3);

  const totalPlacedStudents = placementRecords.reduce(
    (total, record) => total + parseInt(record.placed_students || 0),
    0
  );

  const avgPackage = placementRecords.length
    ? (
        placementRecords.reduce(
          (sum, record) => sum + parseFloat(record.package || 0),
          0
        ) / placementRecords.length
      ).toFixed(2)
    : 0;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Dashboard Header */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Placement Dashboard
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              icon={<FaUsers className="text-blue-500" />}
              title="Total Placed"
              value={totalPlacedStudents}
            />
            <StatCard
              icon={<FaDollarSign className="text-green-500" />}
              title="Avg Package"
              value={`₹${avgPackage}L`}
            />
            <StatCard
              icon={<FaBuilding className="text-purple-500" />}
              title="Companies"
              value={placementRecords.length}
            />
            <StatCard
              icon={<FaBriefcase className="text-orange-500" />}
              title="Open Positions"
              value={placements.length}
            />
          </div>

          {/* Search and Tabs */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <div className="flex space-x-4 mb-4 sm:mb-0">
              <TabButton
                active={activeTab === "opportunities"}
                onClick={() => setActiveTab("opportunities")}
                icon={<MdDashboard />}
                text="Opportunities"
              />
              <TabButton
                active={activeTab === "records"}
                onClick={() => setActiveTab("records")}
                icon={<MdHistory />}
                text="Records"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Content */}
          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : activeTab === "opportunities" ? (
            <OpportunitiesList placements={filteredPlacements} />
          ) : (
            <PlacementRecords
              records={placementRecords}
              topCompanies={topCompanies}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Helper Components
const StatCard = ({ icon, title, value }) => (
  <div className="bg-white p-4 rounded-lg border shadow-sm">
    <div className="flex items-center">
      <div className="p-3 rounded-full bg-gray-100">{icon}</div>
      <div className="ml-4">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  </div>
);

const TabButton = ({ active, onClick, icon, text }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 rounded-lg ${
      active
        ? "bg-blue-500 text-white"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
  >
    {icon}
    <span className="ml-2">{text}</span>
  </button>
);

const OpportunitiesList = ({ placements }) => (
  <div className="grid gap-4">
    {placements.map((placement) => (
      <div
        key={placement.id}
        className="bg-white p-4 rounded-lg border shadow-sm"
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{placement.company_name}</h3>
            <p className="text-gray-600">{placement.role}</p>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <FaMapMarkerAlt className="mr-1" />
              {placement.location}
              <FaDollarSign className="ml-4 mr-1" />₹{placement.package}L
              <FaUsers className="ml-4 mr-1" />
              {placement.applied_students} Posts
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const PlacementRecords = ({ records, topCompanies }) => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-lg text-white">
      <h3 className="text-lg font-semibold mb-4">Top Recruiting Companies</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topCompanies.map((company, index) => (
          <div key={index} className="bg-white/10 p-3 rounded-lg">
            <div className="flex items-center">
              <FaTrophy className="text-yellow-300 mr-2" />
              <div>
                <p className="font-medium">{company.company_name}</p>
                <p className="text-sm">₹{company.package}L Package</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white rounded-lg border">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Placed Students
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Package
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {records.map((record, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                {record.company_name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {record.placed_students}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                ₹{record.package}L
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PlacementManagement;
