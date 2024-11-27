import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiCalendar, FiArrowRight } from 'react-icons/fi';
import { clients } from '../data/clients';

export function RecentClients() {
  const recentClients = clients.slice(0, 3);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const fallbackImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80';
    
    if (target.src !== fallbackImage) {
      target.src = fallbackImage;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Recent Clients</h2>
          <Link
            to="/clients"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            See All
            <FiArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentClients.map((client) => (
            <Link
              key={client.id}
              to={`/clients/${client.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64">
                <img
                  src={client.images[0]}
                  alt={client.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{client.title}</h3>
                  <div className="flex items-center text-sm">
                    <FiMapPin className="mr-1" />
                    {client.location}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <FiCalendar className="mr-1" />
                  {client.date}
                </div>
                <h4 className="font-semibold text-primary-600 mb-2">
                  {client.service}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {client.description}
                </p>
                <div className="flex items-center text-primary-600 text-sm font-medium">
                  View Details
                  <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}