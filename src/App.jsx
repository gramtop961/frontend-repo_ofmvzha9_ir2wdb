import React from 'react';
import Hero from './components/Hero';
import Offerings from './components/Offerings';
import EventsCalendar from './components/EventsCalendar';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Hero />
      <Offerings />
      <EventsCalendar />
      <InstagramFeed />
      <Footer />
    </div>
  );
}

export default App;
