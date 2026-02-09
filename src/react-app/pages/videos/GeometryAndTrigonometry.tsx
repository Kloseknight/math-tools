import React from 'react';
import { videos } from '@/react-app/data/videos';
import { Video } from '@/react-app/data/types';

const GeometryAndTrigonometry: React.FC = () => {
  const geometryAndTrigonometryVideos: Video[] = videos.filter((video: Video) => video.category === 'Geometry and Trigonometry');

  const subCategories: { [key: string]: Video[] } = {
    'Trigonometry': geometryAndTrigonometryVideos.filter((video: Video) => video.title.toLowerCase().includes('trigonometry')),
    'Pythagoras Theorem': geometryAndTrigonometryVideos.filter((video: Video) => video.title.toLowerCase().includes('pythagoras')),
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Worked Examples</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-4">Geometry and Trigonometry</h2>

        {Object.entries(subCategories).map(([subCategory, subCategoryVideos]) => (
          subCategoryVideos.length > 0 && (
            <div key={subCategory} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{subCategory}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subCategoryVideos.map((video: Video) => (
                  <div key={video.id} className="border rounded-lg p-4 shadow-lg">
                    <h3 className="font-bold mb-2">{video.title}</h3>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe 
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default GeometryAndTrigonometry;
