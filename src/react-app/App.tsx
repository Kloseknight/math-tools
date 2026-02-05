import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/react-app/hooks/useAuth';
import HomePage from '@/react-app/pages/Home';
import DictionaryPage from '@/react-app/pages/Dictionary';
import Guides from '@/react-app/pages/Guides';
import About from '@/react-app/pages/About';
import PrivacyPolicy from '@/react-app/pages/PrivacyPolicy';
import Videos from '@/react-app/pages/Videos';
import VideosHome from '@/react-app/pages/VideosHome'; // Import the new component
import Layout from '@/react-app/components/layout/Layout';
import ScrollToTopButton from '@/react-app/components/ScrollToTopButton';
import FeedbackPage from '@/react-app/pages/FeedbackPage';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dictionary" element={<DictionaryPage />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/videos/:categoryId" element={<Videos />} />
            <Route path="/videos" element={<VideosHome />} /> // Changed this line
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Routes>
          <ScrollToTopButton />
        </Layout>
      </Router>
    </AuthProvider>
  );
}
