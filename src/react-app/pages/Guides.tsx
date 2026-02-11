import React, { useState, useEffect } from 'react';
import { guides } from '@/react-app/data/guides/guides';
import katex from 'katex';

const GuidesPage: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState(guides[0]);
  const [processedContent, setProcessedContent] = useState('');

  useEffect(() => {
    if (selectedGuide) {
      let content = selectedGuide.content;

      // Process block math $$...$$
      content = content.replace(/\$\$([\s\S]*?)\$\$/g, (match, latex) => {
        try {
          return katex.renderToString(latex, { displayMode: true, throwOnError: false });
        } catch (e) {
          console.error(e);
          return match;
        }
      });

      // Process inline math \(...\)
      content = content.replace(/\\\(([\s\S]*?)\\\)/g, (match, latex) => {
        try {
          return katex.renderToString(latex, { displayMode: false, throwOnError: false });
        } catch (e) {
          console.error(e);
          return match;
        }
      });

      setProcessedContent(content);
    }
  }, [selectedGuide]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Mathematics Guides</h1>
        <p className="text-lg text-gray-600 mb-8">Your reference for CSEC Mathematics topics.</p>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Topics</h2>
            <ul className="space-y-2">
              {guides.map(guide => (
                <li key={guide.id}>
                  <button 
                    onClick={() => setSelectedGuide(guide)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedGuide.id === guide.id ? 'bg-red-100 text-red-700 font-semibold' : 'hover:bg-gray-100'}`}>
                    {guide.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-3/4">
            {selectedGuide && (
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;
