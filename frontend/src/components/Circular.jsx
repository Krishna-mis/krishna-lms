import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { FiCalendar, FiAlertCircle } from "react-icons/fi";
import { MdOutlineNotifications, MdErrorOutline } from "react-icons/md";
import { BiLoader } from "react-icons/bi";

const Circular = () => {
  const [circulars, setCirculars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCirculars = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:5000/circulars/getAll");
        if (!response.ok) {
          throw new Error(`Failed to load circulars: ${response.status}`);
        }
        const data = await response.json();
        setCirculars(data);
      } catch (error) {
        console.error("Error fetching circulars:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCirculars();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <MdOutlineNotifications className="mx-auto h-12 w-12 text-blue-600" />
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            College Circulars
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Stay updated with the latest announcements and notifications
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center p-8">
            <BiLoader className="animate-spin h-8 w-8 text-blue-600" />
            <span className="ml-2 text-gray-600">Loading circulars...</span>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
            <div className="flex items-center">
              <MdErrorOutline className="h-6 w-6 text-red-400" />
              <p className="ml-3 text-red-700">{error}</p>
            </div>
          </div>
        ) : circulars.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <FiAlertCircle className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-4 text-gray-500 text-lg">
              No circulars available at this time.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {circulars.map((circular) => (
              <div
                key={circular.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {circular.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <FiCalendar className="mr-2" />
                        {format(new Date(circular.created_at), "PPP")}
                      </div>
                    </div>
                  </div>
                  <div className="prose prose-sm max-w-none text-gray-600">
                    {circular.content}
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-3">
                  <div className="flex justify-end space-x-4">
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      Read More
                    </button>
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

export default Circular;
