import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import NotificationsPage from './components/NotificationsPage';
import MarketplaceListing from './components/MarketplaceListing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/marketplace/:id" element={<MarketplaceListing />} />
      </Routes>
    </Router>
  );
}

export default App;