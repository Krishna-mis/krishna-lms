import React, { useState, useEffect } from "react";
import { format } from "date-fns";
// Import React Icons
import {
  FaPlus,
  FaTrash,
  FaBullhorn,
  FaCalendarAlt,
  FaSpinner,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { IoMdSend } from "react-icons/io";

const API_URL = "http://localhost:5000";

const CircularAdmin = () => {
  const [circulars, setCirculars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(null);

  // Fetch Circulars Function
  const fetchCirculars = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/circulars/getAll`);
      if (!response.ok) throw new Error("Failed to load circulars");

      const data = await response.json();

      if (!Array.isArray(data)) throw new Error("Invalid data format from API");

      setCirculars(data);
    } catch (error) {
      console.error("Error fetching circulars:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCirculars();
  }, []);

  // Add Circular Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setStatus({ error: true, message: "Title and content are required" });
      return;
    }

    try {
      const response = await fetch(`${API_URL}/circulars`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) throw new Error("Failed to publish circular");

      const newCircular = await response.json();
      setCirculars([...circulars, newCircular]); // State update manually
      setTitle("");
      setContent("");
      setStatus({ error: false, message: "Circular published successfully!" });

      setTimeout(() => setStatus(null), 3000);
    } catch (err) {
      setStatus({ error: true, message: "Failed to publish circular" });
      console.error(err);
    }
  };

  // Delete Circular Function
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this circular?")) {
      try {
        const response = await fetch(`${API_URL}/circulars/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) throw new Error("Failed to delete circular");

        setCirculars(circulars.filter((circular) => circular.id !== id)); // Remove deleted item from state
      } catch (err) {
        setError("Failed to delete circular");
        console.error(err);
      }
    }
  };

  // Format date safely
  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), "PPP");
    } catch (err) {
      console.error("Date formatting error:", err);
      return "Invalid date";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2 text-indigo-800 flex justify-center items-center">
            <FaBullhorn className="mr-3 text-indigo-600" />
            College Circular Management
          </h1>
          <p className="text-gray-600">Admin Dashboard</p>
        </header>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Form Section */}
          <div className="md:col-span-5">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
                <h2 className="text-xl font-bold flex items-center">
                  <FaPlus className="mr-2" /> New Circular
                </h2>
              </div>

              <div className="p-6">
                {status && (
                  <div
                    className={`p-4 mb-6 rounded-lg flex items-center ${
                      status.error
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-green-50 text-green-700 border border-green-200"
                    }`}
                  >
                    {status.error ? (
                      <span className="material-icons mr-2">error</span>
                    ) : (
                      <span className="material-icons mr-2">check_circle</span>
                    )}
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Title
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        <HiDocumentText />
                      </span>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                        placeholder="Enter circular title"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Content
                    </label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                      rows="7"
                      placeholder="Enter circular content"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center font-semibold"
                  >
                    <IoMdSend className="mr-2" />
                    Publish Circular
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Circulars List Section */}
          <div className="md:col-span-7">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <FaBullhorn className="mr-2 text-indigo-600" /> Manage Circulars
              </h2>

              {loading ? (
                <div className="text-center p-10 flex flex-col items-center text-gray-500">
                  <FaSpinner className="animate-spin text-4xl mb-3 text-indigo-500" />
                  <p>Loading circulars...</p>
                </div>
              ) : error ? (
                <div className="text-red-500 p-4 bg-red-50 rounded-lg border border-red-200">
                  {error}
                </div>
              ) : circulars.length === 0 ? (
                <div className="text-center p-10 text-gray-500 border-2 border-dashed rounded-lg">
                  <p className="text-lg mb-2">No circulars available</p>
                  <p className="text-sm">
                    Create your first circular using the form
                  </p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {circulars.map((circular) => (
                    <div
                      key={circular.id || circular._id}
                      className="bg-gray-50 p-5 rounded-lg border border-gray-100 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-indigo-800">
                          {circular.title}
                        </h3>
                        <button
                          onClick={() =>
                            handleDelete(circular.id || circular._id)
                          }
                          className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors duration-300"
                          title="Delete circular"
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <p className="text-gray-600 mb-3 whitespace-pre-line">
                        {circular.content}
                      </p>
                      <div className="text-sm text-gray-500 flex items-center">
                        <FaCalendarAlt className="mr-1" />
                        {formatDate(circular.created_at)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <footer className="mt-10 text-center text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} College Circular Management System
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CircularAdmin;
