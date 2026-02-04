import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { formulaCategories } from '../../data/formulas';
import { dictionaryContent } from '../../data/dictionary';
import { videos } from '../../data/videos';
import { videoCategories } from '../../data/videoCategories';

interface SearchResult {
  id: string;
  title: string;
  type: 'formula' | 'dictionary' | 'video' | 'page';
  url: string;
  description?: string;
}

const SiteSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    // Search Formulas
    formulaCategories.forEach(cat => {
      cat.formulas.forEach(formula => {
        if (formula.name.toLowerCase().includes(lowerQuery) || formula.equation.toLowerCase().includes(lowerQuery)) {
          searchResults.push({
            id: `formula-${formula.id}`,
            title: formula.name,
            type: 'formula',
            url: `/?category=${cat.id}&formula=${formula.id}`,
            description: `Formula: ${formula.equation}`
          });
        }
      });
    });

    // Search Dictionary
    dictionaryContent.forEach(section => {
      section.definitions.forEach(def => {
        if (def.term.toLowerCase().includes(lowerQuery) || def.definition.toLowerCase().includes(lowerQuery)) {
          searchResults.push({
            id: `dict-${def.term}`,
            title: def.term,
            type: 'dictionary',
            url: `/dictionary#${def.term.replace(/\s+/g, '-').toLowerCase()}`,
            description: def.definition.substring(0, 60) + '...'
          });
        }
      });
    });

    // Search Videos
    videos.forEach(video => {
      if (video.title.toLowerCase().includes(lowerQuery)) {
        const category = videoCategories.find(c => c.name === video.category);
        searchResults.push({
          id: `video-${video.id}`,
          title: video.title,
          type: 'video',
          url: category ? `/videos/${category.id}#video-${video.id}` : '/videos',
          description: `Video in ${video.category}`
        });
      }
    });

    // Search Pages
    const pages = [
      { title: 'Formula Calculator', url: '/', keywords: ['calculator', 'math', 'tools'] },
      { title: 'Dictionary', url: '/dictionary', keywords: ['terms', 'definitions', 'glossary'] },
      { title: 'Guides', url: '/guides', keywords: ['learning', 'help', 'tutorials'] },
      { title: 'About', url: '/about', keywords: ['info', 'contact', 'app'] },
    ];

    pages.forEach(page => {
      if (page.title.toLowerCase().includes(lowerQuery) || page.keywords.some(k => k.includes(lowerQuery))) {
        searchResults.push({
          id: `page-${page.url}`,
          title: page.title,
          type: 'page',
          url: page.url
        });
      }
    });

    setResults(searchResults.slice(0, 8));
  }, [query]);

  const handleSelect = (url: string) => {
    navigate(url);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative w-full md:w-64" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search formulas, terms..."
          className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-sm"
        />
        <div className="absolute left-3 top-2.5 text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-[60] mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-h-80 overflow-y-auto">
            {results.map((result) => (
              <button
                key={result.id}
                onClick={() => handleSelect(result.url)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors"
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-medium text-gray-900 text-sm">{result.title}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                    {result.type}
                  </span>
                </div>
                {result.description && (
                  <p className="text-xs text-gray-500 line-clamp-1">{result.description}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute z-[60] mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-100 p-4 text-center">
          <p className="text-sm text-gray-500">No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default SiteSearch;
