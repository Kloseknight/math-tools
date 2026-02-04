import React, { useEffect, useRef } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { videos } from '@/react-app/data/videos';
import { videoCategories } from '@/react-app/data/videoCategories';
import { Video } from '@/react-app/data/types';

const Videos: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const location = useLocation();
  const highlightedRef = useRef<HTMLDivElement>(null);
  const categoryInfo = videoCategories.find(cat => cat.id === categoryId);

  useEffect(() => {
    const hash = location.hash;
    if (hash && highlightedRef.current) {
      setTimeout(() => {
        highlightedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        highlightedRef.current?.classList.add('ring-2', 'ring-offset-2', 'ring-red-500');
        setTimeout(() => {
            highlightedRef.current?.classList.remove('ring-2', 'ring-offset-2', 'ring-red-500');
        }, 3000);
      }, 100);
    }
  }, [location]);

  if (!categoryInfo) {
    return <Navigate to="/" replace />;
  }

  const categoryVideos = videos.filter(video => video.category === categoryInfo.name);

  const groupedVideos: { [key: string]: Video[] } = {};
  const ungroupedVideos: Video[] = [];

  categoryVideos.forEach(video => {
    let matched = false;
    for (const subTopic of categoryInfo.subTopics) {
      if (subTopic.keywords.some((keyword: string) => video.title.toLowerCase().includes(keyword.toLowerCase()))) {
        if (!groupedVideos[subTopic.name]) groupedVideos[subTopic.name] = [];
        groupedVideos[subTopic.name].push(video);
        matched = true;
        break;
      }
    }
    if (!matched) ungroupedVideos.push(video);
  });

  const renderVideo = (video: Video) => {
    const videoId = video.id.toString();
    const isHighlighted = `#video-${videoId}` === location.hash;
    return (
      <div 
        key={video.id} 
        id={`video-${video.id}`}
        ref={isHighlighted ? highlightedRef : null}
        className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
      >
        <div className="aspect-video">
          <iframe 
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="p-4">
          <h4 className="font-semibold text-gray-800">{video.title}</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">Worked Examples</h1>
      <h2 className="text-xl text-gray-600 mb-8 border-b-2 border-[#FF4757] pb-2">{categoryInfo.name}</h2>

      {Object.entries(groupedVideos).map(([subTopic, subVideos]) => (
        <div key={subTopic} className="mb-10">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-[#FF4757] rounded-full mr-2"></span>
            {subTopic}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subVideos.map(renderVideo)}
          </div>
        </div>
      ))}

      {ungroupedVideos.length > 0 && (
        <div className="mb-10">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-gray-400 rounded-full mr-2"></span>
            Other Topics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ungroupedVideos.map(renderVideo)}
          </div>
        </div>
      )}

      {categoryVideos.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
          <p className="text-gray-500 text-lg">Coming soon! We're currently working on videos for this category.</p>
        </div>
      )}
    </div>
  );
};

export default Videos;