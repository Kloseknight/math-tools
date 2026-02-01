import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">About Us</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Welcome to our formula hub! We are passionate about making mathematics more accessible and enjoyable for everyone. Our mission is to provide a comprehensive and easy-to-use resource for all your formula needs, whether you are a student, a professional, or simply a curious mind.</p>
          <p>This project was born out of a desire to create a centralized platform for mathematical formulas, where users can not only find what they are looking for but also understand the concepts behind them. We believe that a strong foundation in mathematics is essential for success in many fields, and we are here to support you on your learning journey.</p>
          <p>Our team is composed of developers, educators, and mathematicians who are dedicated to creating high-quality educational tools. We are constantly working to expand our formula library and improve the user experience. We welcome your feedback and suggestions as we continue to grow and evolve.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
