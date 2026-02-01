import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or use our website.</p>

          <h2 className="text-2xl font-semibold text-gray-800 pt-4">Personal Information We Collect</h2>
          <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.</p>

          <h2 className="text-2xl font-semibold text-gray-800 pt-4">How Do We Use Your Personal Information?</h2>
          <p>We use the information we collect to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>

          <h2 className="text-2xl font-semibold text-gray-800 pt-4">Sharing Your Personal Information</h2>
          <p>We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>

          <h2 className="text-2xl font-semibold text-gray-800 pt-4">Your Rights</h2>
          <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.</p>

          <h2 className="text-2xl font-semibold text-gray-800 pt-4">Changes</h2>
          <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
