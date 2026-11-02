import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { StatsSection } from './components/stats/StatsSection';
import { AboutSection } from './components/about/AboutSection';
import { TracksSection } from './components/tracks/TracksSection';
import { EventsSection } from './components/events/EventsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { FaqSection } from './components/faq/FaqSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { JoinModal } from './components/modals/JoinModal';
import type { EventItem } from './types';

export function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const handleOpenJoinModal = () => {
    setSelectedEvent(null);
    setIsJoinModalOpen(true);
  };

  const handleRegisterEvent = (event: EventItem) => {
    setSelectedEvent(event);
    setIsJoinModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsJoinModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation Bar */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section matching user screenshot */}
        <HeroSection onOpenJoinModal={handleOpenJoinModal} />

        {/* Stats Section */}
        <StatsSection />

        {/* About Section */}
        <AboutSection />

        {/* Tech Tracks & Focus Areas */}
        <TracksSection />

        {/* Upcoming Events & Calendar */}
        <EventsSection onRegisterEvent={handleRegisterEvent} />

        {/* Open Source Projects */}
        <ProjectsSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Community Join & Contact Section */}
        <ContactSection />
      </main>

      {/* Modern Ecosystem Footer */}
      <Footer />

      {/* Join & Event Registration Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={handleCloseModal}
        selectedEvent={selectedEvent}
      />
    </div>
  );
}

export default App;
