import React from 'react';
import { Link } from 'react-router-dom';
import { videoCategories } from '@/react-app/data/videoCategories';

const VideosHome: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8">Video Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoCategories.map(category => (
          <Link 
            to={`/videos/${category.id}`} 
            key={category.id}
            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="p-6">
              <h3 className="font-semibold text-lg text-gray-800">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideosHome;
