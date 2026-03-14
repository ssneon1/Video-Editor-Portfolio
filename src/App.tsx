import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import YouTubeVideos from './pages/YouTubeVideos';
import StreamHighlights from './pages/StreamHighlights';
import ShortFormContent from './pages/ShortFormContent';
import GamingMontages from './pages/GamingMontages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="youtube-videos" element={<YouTubeVideos />} />
          <Route path="stream-highlights" element={<StreamHighlights />} />
          <Route path="short-form-content" element={<ShortFormContent />} />
          <Route path="gaming-montages" element={<GamingMontages />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
