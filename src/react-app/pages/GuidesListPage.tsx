import React from 'react';
import { Link } from 'react-router-dom';
import { guides } from '@/react-app/data/guides/guides';

const GuidesListPage: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Mathematics Guides</h1>
        <p className="text-lg text-gray-600 mb-8">Your reference for CSEC Mathematics topics.</p>
        <ul className="space-y-2">
          {guides.map(guide => (
            <li key={guide.id}>
              <Link to={`/guides/${guide.id}`} className="block px-4 py-2 rounded-lg transition-colors hover:bg-gray-100">
                {guide.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GuidesListPage;
