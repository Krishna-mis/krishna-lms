import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import {
  FaUsers,
  FaTrophy,
  FaRegCalendarAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import aboutImg from "../../public/about.webp";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center sm:text-5xl lg:text-6xl mb-6">
            About Krishna University
          </h1>
          <p className="text-xl text-center max-w-3xl">
            Illuminating minds and transforming lives through excellence in
            education since 1985
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            To foster intellectual growth, cultivate ethical leadership, and
            promote cultural diversity while preparing students to meet the
            challenges of a rapidly evolving global society.
          </p>
        </div>
      </div>

      {/* History with Image */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-8">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <div className="bg-blue-200 h-64 sm:h-96">
                  <img
                    src={aboutImg}
                    alt="Krishna University Campus"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Our History
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-8"></div>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-4">
                  Founded in 1985, Krishna University began as a small institute
                  dedicated to advanced studies in philosophy and mathematics.
                  Over the decades, we have grown into a comprehensive
                  university offering programs across disciplines.
                </p>
                <p className="mb-4">
                  Our journey has been marked by a steadfast commitment to
                  academic excellence, cultural appreciation, and community
                  service. Through changing times, we have maintained our core
                  values while adapting to meet the needs of each new generation
                  of students.
                </p>
                <p>
                  Today, Krishna University stands as a beacon of intellectual
                  pursuit and cultural harmony, welcoming students from all
                  corners of the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Why Choose Krishna University
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <BsBook size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Academic Excellence
              </h3>
              <p className="text-gray-600">
                Our rigorous academic programs are designed to challenge
                students and prepare them for successful careers in their chosen
                fields.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <FaUsers size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Diverse Community
              </h3>
              <p className="text-gray-600">
                With students from over 50 countries, our campus provides a rich
                multicultural environment that broadens perspectives.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <FaGraduationCap size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Distinguished Faculty
              </h3>
              <p className="text-gray-600">
                Learn from leading scholars and practitioners who bring
                real-world expertise and insights to the classroom.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <HiOutlineLocationMarker size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Modern Facilities
              </h3>
              <p className="text-gray-600">
                Our state-of-the-art campus features cutting-edge laboratories,
                libraries, and recreational spaces.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <FaTrophy size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Research Opportunities
              </h3>
              <p className="text-gray-600">
                Engage in groundbreaking research alongside faculty mentors in
                our specialized research centers.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <FaRegCalendarAlt size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Vibrant Campus Life
              </h3>
              <p className="text-gray-600">
                Participate in over 100 student organizations, cultural events,
                and athletic programs throughout the academic year.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">
            Begin Your Journey With Us
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our community of scholars and innovators dedicated to making a
            positive difference in the world.
          </p>
          <button
            onClick={() => navigate("/courses")}
            className="inline-flex items-center bg-white text-blue-900 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
          >
            Explore Programs
            <AiOutlineArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
