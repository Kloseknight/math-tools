import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { dictionaryContent } from '@/react-app/data/dictionary';

const DictionaryPage: React.FC = () => {
  const location = useLocation();
  const highlightedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash && highlightedRef.current) {
      setTimeout(() => {
        highlightedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        highlightedRef.current?.classList.add('bg-yellow-100', 'ring-2', 'ring-yellow-300');
        setTimeout(() => {
            highlightedRef.current?.classList.remove('bg-yellow-100', 'ring-2', 'ring-yellow-300');
        }, 3000);
      }, 100);
    }
  }, [location]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Math Dictionary</h1>
        
        {dictionaryContent.map((category, catIndex) => (
          <div key={catIndex} className="mb-12 last:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-[#FF4757] pb-2 mb-6">{category.title}</h2>
            
            <div className="space-y-6">
              {category.definitions.map((item, defIndex) => {
                const termId = item.term.replace(/\s+/g, '-').toLowerCase();
                const isHighlighted = `#${termId}` === location.hash;

                return (
                  <div 
                    key={defIndex} 
                    id={termId}
                    ref={isHighlighted ? highlightedRef : null}
                    className="p-6 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.term}</h3>
                    <p className="text-md text-gray-600">{item.definition}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DictionaryPage;