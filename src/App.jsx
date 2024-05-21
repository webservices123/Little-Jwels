import { Route, Routes } from 'react-router-dom';
import Popup from './Popup';
import PageNotFound from './components/404Page';
import Navbar from './components/Navbar';
import { Home, Academics, BadjateGroup } from './components/pages';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import VisionMission from './components/pages/About_Us/VisionMission';
import Teams from './components/pages/About_Us/Teams';
import Director from './components/pages/About_Us/Director';
import Management from './components/pages/About_Us/Management';
import Video from './components/pages/Gallery/Video';
import EventGallery from './components/pages/Gallery/EventGallery';
import CelebrationsGalary from './components/pages/Gallery/CelebrationsGalary';
import AchievementsGallery from './components/pages/Gallery/AchievementsGallery';
import MediaCoverageGallery from './components/pages/Gallery/MediaCoverageGallery';
import Program from './components/pages/programcomponent/Program';
import SportsAndWellness from './components/pages/Gallery/SportsAndWellness';
import ScrollToTop from './components/ScrollToTop';
import MediaLinks from './components/pages/Media_Links/MediaLinks';
import { Toaster } from 'react-hot-toast';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import FeesStructure from './components/pages/FeesStructure';

import './App.css';
import "./index.css";
function App() {
  return (
    <div className="App">
      <Popup />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about/vision&mission" element={<VisionMission />} />
        <Route exact path="/about/director-message" element={<Director />} />
        <Route exact path="/about/management" element={<Management />} />
        <Route exact path="/about/teams" element={<Teams />} />
        <Route exact path="/gallery/video" element={<Video />} />
        <Route exact path="/gallery/events" element={<EventGallery />} />
        <Route exact path="/gallery/celebrations" element={<CelebrationsGalary />} />
        <Route exact path="/gallery/achievements" element={<AchievementsGallery />} />
        <Route exact path="/gallery/sportsandwellness" element={<SportsAndWellness />} />
        <Route exact path="/gallery/media" element={<MediaCoverageGallery />} />
        <Route exact path="/academics" element={<Academics />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/admission/admission-guidelines" element={<Program />} />
        <Route exact path="/admission/FeesStructure" element={<FeesStructure />} />
        <Route exact path="/badjate-group" element={<BadjateGroup />} />
        <Route exact path="/program" element={<Program />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <MediaLinks />
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
