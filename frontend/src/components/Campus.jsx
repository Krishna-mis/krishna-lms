import React from "react";
import {
  FaUniversity,
  FaTree,
  FaBuilding,
  FaBookOpen,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import campusImg from "../../public/campus-main.avif";

const Campus = () => {
  const campusFeatures = [
    {
      title: "Modern Academic Buildings",
      description:
        "State-of-the-art facilities equipped with the latest technology and learning resources",
      icon: <FaBuilding className="text-white text-2xl" />,
    },
    {
      title: "Extensive Libraries",
      description:
        "Multiple libraries housing over 1 million books, journals, and digital resources",
      icon: <FaBookOpen className="text-white text-2xl" />,
    },
    {
      title: "Green Spaces",
      description:
        "Beautiful landscaped gardens and recreational areas for student relaxation",
      icon: <FaTree className="text-white text-2xl" />,
    },
    {
      title: "Campus Tours",
      description: "Weekly guided tours for prospective students and visitors",
      icon: <FaMapMarkerAlt className="text-white text-2xl" />,
    },
    {
      title: "University Events",
      description:
        "Regular cultural, academic, and sports events throughout the academic year",
      icon: <FaCalendarAlt className="text-white text-2xl" />,
    },
  ];

  // Campus images - replace with actual campus image URLs in a production environment
  const campusImages = [
    "/api/placeholder/500/300",
    "/api/placeholder/500/300",
    "/api/placeholder/500/300",
  ];

  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <FaUniversity className="text-4xl mr-4" />
                <h1 className="text-3xl font-bold">Our Campus</h1>
              </div>
              <p className="text-xl mb-6">
                Discover our world-class facilities designed to provide an
                exceptional learning environment.
              </p>
              <button className="bg-white text-blue-900 font-bold py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
                Schedule a Visit
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src={campusImg}
                alt="University Campus Aerial View"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Campus Features */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-900 text-center mb-12">
          Campus Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campusFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white ml-3">
                  {feature.title}
                </h3>
              </div>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Campus Gallery */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">
            Campus Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campusImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={image}
                  alt={`Campus View ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-900 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-800 transition duration-300">
              View Full Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Virtual Tour CTA */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-900 rounded-lg p-8 text-center text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Can't Visit In Person?</h2>
          <p className="text-blue-100 mb-6">
            Experience our campus from anywhere with our interactive virtual
            tour
          </p>
          <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-100 transition duration-300">
            Start Virtual Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default Campus;
