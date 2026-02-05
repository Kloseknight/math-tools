import React from 'react';
import FeedbackForm from '@/react-app/components/feedback/FeedbackForm';

const FeedbackPage: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Submit Feedback</h1>
        <p className="text-gray-600 mb-8">We value your feedback. Please share your thoughts, suggestions, or any issues you've encountered. Your input helps us improve.</p>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default FeedbackPage;
