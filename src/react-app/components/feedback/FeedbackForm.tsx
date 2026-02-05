import React, { useState } from 'react';

const FeedbackForm: React.FC = () => {
  const [status, setStatus] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setSubmitError('');

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mnjbanra', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const responseData = await response.json();
        if (Object.prototype.hasOwnProperty.call(responseData, 'errors')) {
          setSubmitError(responseData.errors.map((error: any) => error.message).join(', '));
        } else {
          setSubmitError('An unexpected error occurred.');
        }
        setStatus('error');
      }
    } catch (error) {
      setSubmitError('An error occurred while submitting the form.');
      setStatus('error');
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Share Your Feedback</h2>
      <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name (Optional)</label>
                <input type="text" name="name" id="name" className="w-full pl-4 pr-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                <input type="email" name="email" id="email" className="w-full pl-4 pr-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea name="message" id="message" rows={5} required className="w-full pl-4 pr-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-sm"></textarea>
            </div>
          </div>
          <div className="mt-6 text-right">
            <button type="submit" disabled={status === 'sending'} className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400 transition-all">
              {status === 'sending' ? 'Sending...' : 'Send Feedback'}
            </button>
          </div>
          {status === 'success' && (
            <p className="mt-4 text-center text-green-600">Thanks for your feedback!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-center text-red-600">
              Error: {submitError || 'Could not send message.'}
            </p>
          )}
        </form>
      </div>
      <p className="text-xs text-gray-500 mt-4 text-center">Powered by <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">Formspree</a></p>
    </div>
  );
};

export default FeedbackForm;
