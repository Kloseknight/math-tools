import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">About CSEC Mathematics Calculator</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>CSEC Mathematics Calculator was created to support students in mastering mathematics through simple, reliable, and syllabus-focused tools.</p>
          <p>Our core purpose is to help CSEC students quickly check their math answers, practice more efficiently, and build confidence in their problem-solving skills. In addition, we aim to assist parents and guardians who want to better support their children with homework and assignments, as well as teachers and independent learners who need a practical resource aligned with the CSEC Mathematics curriculum.</p>
          <p>Unlike standard calculators or generic online tools, CSEC Maths Calculator is designed specifically around the CSEC Mathematics syllabus. This means the formulas, structure, and features are tailored to the topics students actually encounter in class and in examinations. The interface is intentionally kept simple and intuitive, making it accessible for users of all levels — from beginners to advanced students.</p>
          <p>This platform is built and managed by an Electrical Engineer and former CSEC Educator, with over nine years of experience teaching Mathematics, Physics, and Chemistry. The goal is not just to provide answers, but to create a meaningful learning environment that encourages understanding, accuracy, and independent thinking.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 pt-4">Our Vision</h2>
          <p>CSEC Maths Calculator is continuously evolving into a complete CSEC Mathematics learning platform. Over time, the site will include:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>A growing library of CSEC-specific formulas</li>
            <li>Step-by-step video solutions for past paper questions</li>
            <li>Written guides and explanations for key topics</li>
            <li>A beefed-up mathematics dictionary to clarify important terms and concepts</li>
          </ul>
          <p>The long-term vision is to provide students with a trusted digital companion — a place where they can verify their work, strengthen their understanding, and feel more prepared for exams.</p>
          <p>We believe that with the right tools and guidance, every student can improve in mathematics. CSEC Mathethematics Calculator exists to make that journey clearer, easier, and more motivating.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
