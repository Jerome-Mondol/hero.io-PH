import React, { useState, useEffect } from 'react';
import data from '../data/apps.json';
import AppCard from '../components/AppCard';
import { Link } from 'react-router';

const appsCard = data.appsCards;

const Apps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

    
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200); 
    return () => clearTimeout(timer);
  }, []);

  const filteredApps = appsCard.filter(app =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardLength = filteredApps.length;

  if (loading) {
    return (
      <div className="bg-dark min-h-screen flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-dark min-h-screen">
      <div>
        <h1 className="text-center text-3xl font-bold text-dark py-5">Our All Applications</h1>
        <p className="text-center text-highlighted py-3">Explore All Apps on the Market developed by us. We code for Millions</p>

        <div className="flex justify-between items-center py-5 w-[80%] mx-auto">
          <h1 className="text-dark font-bold">{cardLength} apps found</h1>
          <input
            type="text"
            placeholder="Search apps"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-[60%] sm:w-[40%] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 text-dark"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4 lg:gap-10 mt-5 w-[80%] mx-auto pb-10">
          {filteredApps.length > 0 ? (
            filteredApps.map(({ image, title, companyName, id, description, size, reviews, ratingAvg, downloads, ratings }) => (
              <Link to={`/apps/${id}`} key={id}>
                <AppCard image={image} title={title} ratingAvg={ratingAvg} download={downloads} />
              </Link>
            ))
          ) : (
            <p className="text-center text-highlighted text-4xl font-semibold col-span-full">No apps found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
