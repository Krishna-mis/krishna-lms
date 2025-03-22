import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaBook,
  FaGraduationCap,
} from "react-icons/fa";
import { MdFamilyRestroom, MdEmail, MdSchool } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    address: "",
    fatherName: "",
    motherName: "",
    highestEducation: "",
    percentage: "",
    courseInterest: "btech-cse",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState("personal");
  const navigate = useNavigate();

  const courseOptions = [
    { value: "btech-cse", label: "B.Tech - Computer Science & Engineering" },
    { value: "btech-ece", label: "B.Tech - Electronics & Communication" },
    { value: "btech-me", label: "B.Tech - Mechanical Engineering" },
    { value: "btech-ce", label: "B.Tech - Civil Engineering" },
    { value: "btech-ee", label: "B.Tech - Electrical Engineering" },
    { value: "btech-che", label: "B.Tech - Chemical Engineering" },
    { value: "diploma-cs", label: "Diploma - Computer Science" },
    { value: "diploma-elec", label: "Diploma - Electronics" },
    { value: "diploma-mech", label: "Diploma - Mechanical Engineering" },
    { value: "diploma-civil", label: "Diploma - Civil Engineering" },
    { value: "diploma-electrical", label: "Diploma - Electrical Engineering" },
    { value: "diploma-biotech", label: "Diploma - Biotechnology" },
  ];

  const educationOptions = [
    "10th Standard",
    "12th Standard",
    "Diploma",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.mobileNo.trim()) {
      newErrors.mobileNo = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNo)) {
      newErrors.mobileNo = "Mobile number must be 10 digits";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.fatherName.trim())
      newErrors.fatherName = "Father's name is required";
    if (!formData.motherName.trim())
      newErrors.motherName = "Mother's name is required";
    if (!formData.highestEducation)
      newErrors.highestEducation = "Highest education is required";

    if (!formData.percentage.trim()) {
      newErrors.percentage = "Percentage is required";
    } else if (
      isNaN(formData.percentage) ||
      Number(formData.percentage) < 0 ||
      Number(formData.percentage) > 100
    ) {
      newErrors.percentage = "Enter a valid percentage between 0-100";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 mb-6">
            <svg
              className="h-12 w-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Application Submitted!
          </h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700 mb-3">
              Thank you for applying to Krishna University. We have received
              your application for{" "}
              <span className="font-semibold text-blue-700">
                {
                  courseOptions.find(
                    (option) => option.value === formData.courseInterest
                  )?.label
                }
              </span>
              .
            </p>
            <p className="text-gray-700 mb-3">
              Your application reference number is:{" "}
              <span className="font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded">
                KU-{Math.floor(100000 + Math.random() * 900000)}
              </span>
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-8">
            We will contact you at {formData.email} or {formData.mobileNo} with
            further instructions.
          </p>
          <button
            onClick={() => {
              setFormData({
                fullName: "",
                email: "",
                mobileNo: "",
                address: "",
                fatherName: "",
                motherName: "",
                highestEducation: "",
                percentage: "",
                courseInterest: "btech-cse",
              });
              setSubmitted(false);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md shadow-md hover:shadow-lg transition duration-200"
          >
            Apply for Another Course
          </button>

          <button
            onClick={() => {
              setSubmitted(false);
              navigate("/");
            }}
            className="ml-4 bg-gray-400 hover:bg-gray-500 text-white font-medium py-3 px-8 rounded-md shadow-md hover:shadow-lg transition duration-200"
          >
            Back To Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-8 px-8">
        <div className="flex items-center space-x-4">
          <div className="bg-white p-3 rounded-full">
            <FaGraduationCap className="text-blue-600 text-2xl" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">
              Krishna University
            </h2>
            <p className="text-blue-100 mt-1">
              Application for Academic Year 2025-26
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-8 py-4">
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setActiveTab("personal")}
            className={`py-2 px-4 rounded-t-lg font-medium ${
              activeTab === "personal"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Personal Details
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("education")}
            className={`py-2 px-4 rounded-t-lg font-medium ${
              activeTab === "education"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Education & Course
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8 bg-white">
        {activeTab === "personal" && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <FaUser className="mr-2 text-blue-500" />
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`pl-10 block w-full rounded-md py-2 px-3 border ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    } shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              {/* Email Address */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <MdEmail />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className={`pl-10 block w-full rounded-md py-2 px-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <FaPhone />
                  </div>
                  <input
                    type="tel"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                    className={`pl-10 block w-full rounded-md py-2 px-3 border ${
                      errors.mobileNo ? "border-red-500" : "border-gray-300"
                    } shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.mobileNo && (
                  <p className="mt-1 text-sm text-red-600">{errors.mobileNo}</p>
                )}
              </div>

              {/* Address */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Residential Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-2 pointer-events-none text-gray-500">
                    <FaMapMarkerAlt />
                  </div>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your complete address"
                    rows="3"
                    className={`pl-10 block w-full rounded-md py-2 px-3 border ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    } shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                )}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center mt-8">
              <MdFamilyRestroom className="mr-2 text-blue-500" />
              Family Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Father's Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Father's Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <MdFamilyRestroom />
                  </div>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    placeholder="Enter father's full name"
                    className={`pl-10 block w-full rounded-md py-2 px-3 border ${
                      errors.fatherName ? "border-red-500" : "border-gray-300"
                    } shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.fatherName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.fatherName}
                  </p>
                )}
              </div>

              {/* Mother's Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mother's Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <MdFamilyRestroom />
                  </div>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleInputChange}
                    placeholder="Enter mother's full name"
                    className={`pl-10 block w-full rounded-md py-2 px-3 border ${
                      errors.motherName ? "border-red-500" : "border-gray-300"
                    } shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.motherName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.motherName}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveTab("education")}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Next: Education Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {activeTab === "education" && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <MdSchool className="mr-2 text-blue-500" />
              Educational Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Highest Education */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Highest Education
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <FaUserGraduate />
                  </div>
                  <select
                    name="highestEducation"
                    value={formData.highestEducation}
                    onChange={handleInputChange}
                    className={`pl-10 block w-full rounded-md py-2 px-3 border ${
                      errors.highestEducation
                        ? "border-red-500"
                        : "border-gray-300"
                    } shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  >
                    <option value="">Select highest qualification</option>
                    {educationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.highestEducation && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.highestEducation}
                  </p>
                )}
              </div>

              {/* Percentage */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Percentage in Highest Qualification
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <FaBook />
                  </div>
                  <input
                    type="text"
                    name="percentage"
                    value={formData.percentage}
                    onChange={handleInputChange}
                    placeholder="Enter percentage (e.g. 85.5)"
                    className={`pl-10 block w-full rounded-md py-2 px-3 border ${
                      errors.percentage ? "border-red-500" : "border-gray-300"
                    } shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                {errors.percentage && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.percentage}
                  </p>
                )}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center mt-8">
              <FaGraduationCap className="mr-2 text-blue-500" />
              Course Selection
            </h3>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Applying For
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <FaUserGraduate />
                </div>
                <select
                  name="courseInterest"
                  value={formData.courseInterest}
                  onChange={handleInputChange}
                  className="pl-10 block w-full rounded-md py-2 px-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  {courseOptions.map((course) => (
                    <option key={course.value} value={course.value}>
                      {course.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="rounded text-blue-600 focus:ring-blue-500 mr-2"
                  required
                />
                <span>
                  I declare that the information provided is true to my
                  knowledge
                </span>
              </label>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={() => setActiveTab("personal")}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Back: Personal Details
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ApplicationForm;
