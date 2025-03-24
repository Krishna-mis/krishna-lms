import React from "react";
import { FaUniversity, FaUserGraduate, FaBriefcase } from "react-icons/fa";
import homeimg from "../../public/front.jpeg";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4">
              Welcome to{" "}
              <span className="text-yellow-400">Krishna University</span>
            </h1>
            <p className="mt-6 text-xl max-w-prose">
              Empowering minds, shaping futures. Discover excellence in
              education at Krishna University.
            </p>
            <div className="mt-8 flex space-x-4">
              <button
                onClick={() => navigate("/apply")}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-medium transition"
              >
                Apply Now
              </button>

              <button
                onClick={() => navigate("/about")}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white py-3 px-6 rounded-lg font-medium transition"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="h-64 w-full md:h-96 bg-blue-800 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={homeimg} alt="" />
              </div>
              {/* This would be an image in a real implementation */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black bg-opacity-50 rounded">
                <p className="text-sm">
                  Campus view - Discover our modern facilities and beautiful
                  grounds
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div id="about" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Krishna University?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We offer world-class education with state-of-the-art facilities
              and experienced faculty.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-900 text-white mb-4">
                <FaUserGraduate className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                World-Class Faculty
              </h3>
              <p className="mt-2 text-gray-600">
                Learn from industry experts and renowned academicians who are
                leaders in their fields.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-900 text-white mb-4">
                <FaUniversity className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                Modern Facilities
              </h3>
              <p className="mt-2 text-gray-600">
                Access state-of-the-art labs, libraries, and recreational spaces
                designed for optimal learning.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-900 text-white mb-4">
                <FaBriefcase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                Industry Connections
              </h3>
              <p className="mt-2 text-gray-600">
                Benefit from our strong industry partnerships for internships
                and placement opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Circulars Section */}
      <div id="circulars" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
            Latest Circulars
          </h2>

          <div className="bg-white shadow overflow-hidden rounded-lg divide-y divide-gray-200">
            {/* Circular Item 1 */}
            <div className="p-6 hover:bg-blue-50 transition cursor-pointer">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium text-blue-900">
                  Mid-Semester Examination Schedule
                </h3>
                <span className="text-sm text-gray-500">March 15, 2025</span>
              </div>
              <p className="mt-1 text-gray-600">
                Mid-semester examinations for all departments will commence from
                April 5, 2025.
              </p>
            </div>

            {/* Circular Item 2 */}
            <div className="p-6 hover:bg-blue-50 transition cursor-pointer">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium text-blue-900">
                  Annual Cultural Festival
                </h3>
                <span className="text-sm text-gray-500">March 10, 2025</span>
              </div>
              <p className="mt-1 text-gray-600">
                "Krishnalaya 2025" - The annual cultural festival will be held
                from March 28-30, 2025.
              </p>
            </div>

            {/* Circular Item 3 */}
            <div className="p-6 hover:bg-blue-50 transition cursor-pointer">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium text-blue-900">
                  Workshop on AI & Machine Learning
                </h3>
                <span className="text-sm text-gray-500">March 5, 2025</span>
              </div>
              <p className="mt-1 text-gray-600">
                Department of Computer Science is organizing a two-day workshop
                on AI & ML on March 25-26, 2025.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => navigate("/circulars")}
            >
              View all circulars
              <svg
                className="ml-1 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
