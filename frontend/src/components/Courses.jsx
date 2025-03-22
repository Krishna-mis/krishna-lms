import React, { useState } from "react";
import {
  FaGraduationCap,
  FaCertificate,
  FaCode,
  FaMicrochip,
  FaBuilding,
  FaNetworkWired,
} from "react-icons/fa";
import {
  GiChemicalDrop,
  GiPowerGenerator,
  GiHumanTarget,
} from "react-icons/gi";
import {
  MdOutlineEngineering,
  MdArchitecture,
  MdBiotech,
  MdOutlineElectricBolt,
} from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("btech");

  const courseData = {
    btech: [
      {
        id: 1,
        title: "Computer Science & Engineering",
        icon: <FaCode className="w-8 h-8 text-blue-500" />,
        duration: "4 Years",
        seats: 120,
        description:
          "Learn programming, algorithms, data structures, AI, and software development methodologies.",
        specializations: [
          "Artificial Intelligence",
          "Data Science",
          "Cybersecurity",
        ],
        eligibility:
          "10+2 with Mathematics and Physics as compulsory subjects with minimum 60% aggregate.",
      },
      {
        id: 2,
        title: "Electronics & Communication",
        icon: <AiOutlineThunderbolt className="w-8 h-8 text-blue-500" />,
        duration: "4 Years",
        seats: 90,
        description:
          "Study analog and digital electronics, communication systems, signal processing, and embedded systems.",
        specializations: [
          "VLSI Design",
          "Communication Systems",
          "Signal Processing",
        ],
        eligibility:
          "10+2 with Physics, Chemistry and Mathematics with minimum 60% aggregate.",
      },
      {
        id: 3,
        title: "Mechanical Engineering",
        icon: <MdOutlineEngineering className="w-8 h-8 text-blue-500" />,
        duration: "4 Years",
        seats: 90,
        description:
          "Learn thermodynamics, mechanics, manufacturing processes, and mechanical design principles.",
        specializations: [
          "Automobile Engineering",
          "Manufacturing",
          "Thermal Engineering",
        ],
        eligibility:
          "10+2 with Physics, Chemistry and Mathematics with minimum 60% aggregate.",
      },
      {
        id: 4,
        title: "Civil Engineering",
        icon: <FaBuilding className="w-8 h-8 text-blue-500" />,
        duration: "4 Years",
        seats: 60,
        description:
          "Study structural design, construction materials, environmental engineering, and urban planning.",
        specializations: [
          "Structural Engineering",
          "Transportation",
          "Environmental Engineering",
        ],
        eligibility:
          "10+2 with Physics, Chemistry and Mathematics with minimum 60% aggregate.",
      },
      {
        id: 5,
        title: "Electrical Engineering",
        icon: <MdOutlineElectricBolt className="w-8 h-8 text-blue-500" />,
        duration: "4 Years",
        seats: 60,
        description:
          "Study power systems, electrical machines, control systems, and power electronics.",
        specializations: [
          "Power Systems",
          "Control Systems",
          "Electric Drives",
        ],
        eligibility:
          "10+2 with Physics, Chemistry and Mathematics with minimum 60% aggregate.",
      },
      {
        id: 6,
        title: "Chemical Engineering",
        icon: <GiChemicalDrop className="w-8 h-8 text-blue-500" />,
        duration: "4 Years",
        seats: 60,
        description:
          "Learn chemical processes, reaction engineering, and plant design for various industries.",
        specializations: [
          "Petrochemicals",
          "Polymer Engineering",
          "Process Control",
        ],
        eligibility:
          "10+2 with Chemistry, Physics and Mathematics with minimum 60% aggregate.",
      },
    ],
    diploma: [
      {
        id: 1,
        title: "Diploma in Computer Science",
        icon: <FaCode className="w-8 h-8 text-green-500" />,
        duration: "3 Years",
        seats: 120,
        description:
          "Learn fundamentals of programming, web development, database management, and networking.",
        specializations: [
          "Web Development",
          "Networking",
          "Database Management",
        ],
        eligibility: "10th standard with minimum 50% marks.",
      },
      {
        id: 2,
        title: "Diploma in Electronics",
        icon: <FaMicrochip className="w-8 h-8 text-green-500" />,
        duration: "3 Years",
        seats: 60,
        description:
          "Study basic electronics, digital circuits, microprocessors, and communication systems.",
        specializations: [
          "Consumer Electronics",
          "Industrial Electronics",
          "Communication",
        ],
        eligibility: "10th standard with minimum 50% marks.",
      },
      {
        id: 3,
        title: "Diploma in Mechanical Engineering",
        icon: <MdOutlineEngineering className="w-8 h-8 text-green-500" />,
        duration: "3 Years",
        seats: 90,
        description:
          "Learn mechanical design, production techniques, thermal engineering, and workshop practices.",
        specializations: ["Manufacturing", "Automobile", "Plant Maintenance"],
        eligibility: "10th standard with minimum 50% marks.",
      },
      {
        id: 4,
        title: "Diploma in Civil Engineering",
        icon: <MdArchitecture className="w-8 h-8 text-green-500" />,
        duration: "3 Years",
        seats: 60,
        description:
          "Study surveying, building materials, construction techniques, and structural design basics.",
        specializations: ["Construction Technology", "Surveying", "Drafting"],
        eligibility: "10th standard with minimum 50% marks.",
      },
      {
        id: 5,
        title: "Diploma in Electrical Engineering",
        icon: <GiPowerGenerator className="w-8 h-8 text-green-500" />,
        duration: "3 Years",
        seats: 60,
        description:
          "Learn electrical circuits, power generation, distribution systems, and electrical machines.",
        specializations: [
          "Power Systems",
          "Industrial Electrification",
          "Renewable Energy",
        ],
        eligibility: "10th standard with minimum 50% marks.",
      },
      {
        id: 6,
        title: "Diploma in Biotechnology",
        icon: <MdBiotech className="w-8 h-8 text-green-500" />,
        duration: "3 Years",
        seats: 40,
        description:
          "Study microbiology, biochemistry, genetic engineering, and bioprocessing techniques.",
        specializations: [
          "Medical Lab Technology",
          "Food Processing",
          "Environmental Biotechnology",
        ],
        eligibility:
          "10th standard with minimum 50% marks in Science subjects.",
      },
    ],
  };

  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleCourseDetails = (courseId) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(courseId);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Academic Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Krishna University offers a wide range of undergraduate and diploma
            programs designed to prepare students for successful careers in
            various fields.
          </p>

          <button
            onClick={() => navigate("/apply")}
            className={`w-full py-2 rounded-md font-medium text-white ${
              activeTab === "btech"
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-green-600 hover:bg-green-700"
            } transition-colors`}
          >
            Apply Now
          </button>

          {/* Tab Switcher */}
          <div className="flex justify-center mt-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("btech")}
              className={`flex items-center px-6 py-3 text-lg font-medium border-b-2 ${
                activeTab === "btech"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <FaGraduationCap className="mr-2" />
              B.Tech Programs
            </button>
            <button
              onClick={() => setActiveTab("diploma")}
              className={`flex items-center px-6 py-3 text-lg font-medium border-b-2 ${
                activeTab === "diploma"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <FaCertificate className="mr-2" />
              Diploma Programs
            </button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {courseData[activeTab].map((course) => (
            <div
              key={course.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                expandedCourse === course.id
                  ? "transform scale-105 shadow-lg"
                  : "hover:shadow-lg hover:translate-y-[-5px]"
              }`}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleCourseDetails(course.id)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    {course.icon}
                    <h3 className="ml-3 text-xl font-semibold text-gray-900">
                      {course.title}
                    </h3>
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      activeTab === "btech"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {course.duration}
                  </span>
                </div>

                <p className="mt-4 text-gray-600">{course.description}</p>

                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Available Seats: {course.seats}
                  </div>
                  <button
                    className={`flex items-center text-sm font-medium ${
                      activeTab === "btech" ? "text-blue-600" : "text-green-600"
                    }`}
                  >
                    {expandedCourse === course.id ? "Show Less" : "Show More"}
                    <svg
                      className={`ml-1 h-5 w-5 transform transition-transform ${
                        expandedCourse === course.id ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Expanded details */}
              {expandedCourse === course.id && (
                <div
                  className={`px-6 py-4 border-t ${
                    activeTab === "btech"
                      ? "border-blue-100"
                      : "border-green-100"
                  }`}
                >
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Specializations
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 mb-4">
                    {course.specializations.map((spec, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <svg
                          className="h-4 w-4 mr-2 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Eligibility
                  </h4>
                  <p className="text-gray-600 mb-4">{course.eligibility}</p>

                  <button
                    className={`w-full py-2 rounded-md font-medium text-white ${
                      activeTab === "btech"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-green-600 hover:bg-green-700"
                    } transition-colors`}
                  >
                    Apply Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Academic Excellence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-800 mb-4">
                <FaGraduationCap className="h-8 w-8" />
              </div>
              <h4 className="text-4xl font-bold text-gray-900">12</h4>
              <p className="text-gray-600 mt-2">B.Tech Programs</p>
            </div>

            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-800 mb-4">
                <FaCertificate className="h-8 w-8" />
              </div>
              <h4 className="text-4xl font-bold text-gray-900">8</h4>
              <p className="text-gray-600 mt-2">Diploma Programs</p>
            </div>

            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-800 mb-4">
                <FaNetworkWired className="h-8 w-8" />
              </div>
              <h4 className="text-4xl font-bold text-gray-900">50+</h4>
              <p className="text-gray-600 mt-2">Industry Partners</p>
            </div>

            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-800 mb-4">
                <GiHumanTarget className="h-8 w-8" />
              </div>
              <h4 className="text-4xl font-bold text-gray-900">92%</h4>
              <p className="text-gray-600 mt-2">Placement Rate</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className={`inline-flex items-center px-6 py-3 rounded-md text-lg font-medium text-white ${
              activeTab === "btech"
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-green-600 hover:bg-green-700"
            } transition-colors`}
          >
            Download Brochure
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
