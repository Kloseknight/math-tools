import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Privacy Policy for CSEC Maths Calculator</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: 04th February 2026</p>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>CSEC Mathematics Calculator is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and how we protect your data when you use our website.</p>
          <p>Our website is designed as an educational tool and can be used without creating an account or providing personal information.</p>

          <h2 className="text-2xl font-semibold text-gray-800 pt-4">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 pt-2">a) Personal Information (Feedback Only)</h3>
          <p>We only collect personal information when you voluntarily submit it through our feedback form. This may include:</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Your name (if provided)</li>
            <li>Your email address (if provided)</li>
            <li>Your feedback message</li>
          </ul>
          <p>This information is used solely to respond to feedback, improve the platform, and communicate with you if necessary.</p>
          <p>Submitting feedback is optional, and you may use the site without providing any personal information.</p>

          <h3 className="text-xl font-semibold text-gray-800 pt-2">b) Usage and Analytics Data</h3>
          <p>We use Google Analytics and Firebase Analytics to collect anonymous usage data to help us understand how users interact with the website. This may include:</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Pages visited</li>
            <li>Time spent on the site</li>
            <li>Device type and browser</li>
            <li>General location (country/region)</li>
            <li>Interaction patterns</li>
          </ul>
          <p>This data does not identify you personally and does not include the math inputs you enter into the calculator.</p>

          <h2 className="text-2xl font-semibold text-gray-800 pt-4">2. Calculator Data</h2>
          <p>All calculations are performed locally in your browser. We do not store, log, or transmit:</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Your mathematical inputs</li>
            <li>Your results</li>
            <li>Your calculation history</li>
          </ul>
          <p>Your work remains private on your own device.</p>

          <h2 className="text-2xl font-semibold text-gray-800 pt-4">3. Cookies and Tracking Technologies</h2>
          <p>We may use cookies or similar technologies provided by analytics services to:</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Measure site performance</li>
            <li>Understand usage trends</li>
            <li>Improve user experience</li>
          </ul>
          <p>These cookies do not collect personal information and are used only for statistical purposes.</p>

          <h2 className="text-2xl font-semibold text-gray-800 pt-4">4. Third-Party Services</h2>
          <p>We use trusted third-party services for analytics and hosting, including:</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Google Analytics</li>
            <li>Firebase (Google)</li>
          </ul>
          <p>These services may process anonymous technical data on our behalf, in accordance with their own privacy policies.</p>
          <p>We do not sell, rent, or share your personal information with third parties.</p>

          <h2 className="text-2xl font-semibold text-gray-800 pt-4">5. Children’s Privacy</h2>
          <p>CSEC Mathematics Calculator is intended for students and general users. We do not knowingly collect personal data from children under the age of 13.</p>
          <p>If a parent or guardian believes that a child has submitted personal information, they may contact us, and we will remove it promptly.</p>

          <h2 className="text-2xl font-semibold text-gray-800 pt-4">6. Data Security</h2>
          <p>We take reasonable steps to protect your information using secure hosting and modern web practices. However, no method of transmission over the internet is 100% secure.</p>

          <h2 className="text-2xl font-semibold text-gray-800 pt-4">7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>

          <h2 className="text-2xl font-semibold text-gray-800 pt-4">8. Contact</h2>
          <p>If you have questions about this Privacy Policy or how your data is handled, you may contact us via the feedback form on the website.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
