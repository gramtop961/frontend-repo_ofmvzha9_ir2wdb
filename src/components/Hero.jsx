import React from 'react';
import { Leaf, Calendar, Package, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-800 via-emerald-700 to-amber-900 text-emerald-50">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-500 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-900/50 px-3 py-1 text-xs uppercase tracking-wide">
          <Leaf className="h-4 w-4 text-emerald-300" />
          Urban Farming Co-op
        </span>
        <h1 className="font-display text-4xl font-extrabold leading-tight text-emerald-50 sm:text-5xl md:text-6xl">
          Grow Local. Eat Seasonal. Close the Loop.
        </h1>
        <p className="max-w-2xl text-emerald-100/90">
          Community-powered workshops, weekly produce boxes, and neighborhood compost drop-offs.
          Together, we cultivate a resilient, delicious, and carbon-smart city.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 font-medium text-white shadow hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300">
            <Package className="h-5 w-5" /> Our Offerings
          </a>
          <a href="#events" className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-950/20 px-5 py-3 font-medium text-emerald-50 hover:bg-emerald-900/40 focus:outline-none focus:ring-2 focus:ring-emerald-300">
            <Calendar className="h-5 w-5" /> Upcoming Events
          </a>
          <a href="#instagram" className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-900/30 px-5 py-3 font-medium text-amber-50 hover:bg-amber-800/40 focus:outline-none focus:ring-2 focus:ring-amber-300">
            <MapPin className="h-5 w-5" /> See What We Grow
          </a>
        </div>
      </div>
    </section>
  );
}
