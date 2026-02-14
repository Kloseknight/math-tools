import React from 'react';
import { useParams } from 'react-router-dom';
import { guides } from '@/react-app/data/guides/guides';
import RenderGuideContent from '@/react-app/components/RenderGuideContent';

const GuidePage: React.FC = () => {
  const { guideId } = useParams<{ guideId: string }>();
  const guide = guides.find(g => g.id === guideId);

  if (!guide) {
    return <div>Guide not found</div>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{guide.title}</h1>
        <div className="prose prose-lg max-w-none">
          <RenderGuideContent content={guide.content} />
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
