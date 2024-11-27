import React from 'react';
import { FiUsers, FiBriefcase, FiHeart, FiHome, FiFileText } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'Visit Visa',
    icon: FiUsers,
    description: 'Planning to visit the UAE? Our expert team assists with tourist and visit visa applications, ensuring a smooth process for your journey. We handle all documentation requirements and provide guidance throughout the application process.',
  },
  {
    id: 2,
    title: 'Family Visa',
    icon: FiHome,
    description: 'Reunite with your loved ones in the UAE. We facilitate family visa applications for spouse, children, and parents. Our comprehensive service includes document preparation, application submission, and status tracking.',
  },
  {
    id: 3,
    title: 'Employment Visa',
    icon: FiBriefcase,
    description: 'Start your career in the UAE with our professional employment visa services. We work with employers and employees to ensure all requirements are met, making your transition to working in the UAE seamless.',
  },
  {
    id: 4,
    title: 'Partner Visa',
    icon: FiHeart,
    description: 'For business partners and investors, we provide specialized visa services tailored to your commercial needs. Our team ensures compliance with all UAE partnership visa requirements and regulations.',
  },
  {
    id: 5,
    title: 'PRO Services',
    icon: FiFileText,
    description: 'Our Professional Relations Officers (PRO) handle all your documentation needs, from visa processing to government transactions. We ensure compliance and efficiency in all administrative procedures.',
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional visa and documentation services to make your UAE journey smooth and hassle-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Need assistance with your visa application? Contact us today for a consultation.
          </p>
          <a
            href="https://wa.me/971508571089"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;