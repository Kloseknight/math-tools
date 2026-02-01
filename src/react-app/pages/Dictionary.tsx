import React from 'react';
import { dictionaryContent } from '@/react-app/data/dictionary';

const DictionaryPage: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Math Dictionary</h1>
        
        {dictionaryContent.map((category, catIndex) => (
          <div key={catIndex} className="mb-12 last:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-[#FF4757] pb-2 mb-6">{category.title}</h2>
            
            <div className="space-y-6">
              {category.definitions.map((item, defIndex) => (
                <div key={defIndex} className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.term}</h3>
                  <p className="text-md text-gray-600">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DictionaryPage;
