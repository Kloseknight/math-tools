import React from 'react';
import { videos, Video } from '../../data/videos';

const GeometryAndTrigonometry: React.FC = () => {
  const geometryAndTrigonometryVideos = videos.filter(video => video.category === 'Geometry and Trigonometry');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Worked Examples</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-4">Geometry and Trigonometry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {geometryAndTrigonometryVideos.map(video => (
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
    </div>
  );
};

export default GeometryAndTrigonometry;
