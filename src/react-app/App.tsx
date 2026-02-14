import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from '@/react-app/hooks/useAuth';
import HomePage from '@/react-app/pages/Home';
import DictionaryPage from '@/react-app/pages/Dictionary';
import GuidesListPage from '@/react-app/pages/GuidesListPage';
import GuidePage from '@/react-app/pages/GuidePage';
import About from '@/react-app/pages/About';
import PrivacyPolicy from '@/react-app/pages/PrivacyPolicy';
import Videos from '@/react-app/pages/Videos';
import VideosHome from '@/react-app/pages/VideosHome';
import Layout from '@/react-app/components/layout/Layout';
import ScrollToTopButton from '@/react-app/components/ScrollToTopButton';
import FeedbackPage from '@/react-app/pages/FeedbackPage';
import ReactGA from 'react-ga4';

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AnalyticsTracker />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dictionary" element={<DictionaryPage />} />
            <Route path="/guides" element={<GuidesListPage />} />
            <Route path="/guides/:guideId" element={<GuidePage />} />
            <Route path="/videos/:categoryId" element={<Videos />} />
            <Route path="/videos" element={<VideosHome />} />
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
