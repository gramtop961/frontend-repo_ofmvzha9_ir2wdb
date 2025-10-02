import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

// Simple calendar-like list that groups events by date
export default function EventsCalendar() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || '';
        const res = await fetch(`${base}/api/events`);
        if (!res.ok) throw new Error('Failed to load events');
        const data = await res.json();
        setEvents(data?.events || []);
      } catch (e) {
        // Fallback sample events if backend not configured
        setEvents([
          { id: 1, date: '2025-10-10', title: 'Fall Seed Swap', time: '10:00 AM', location: 'Co-op Garden' },
          { id: 2, date: '2025-10-15', title: 'Compost 101 Workshop', time: '6:00 PM', location: 'Community Center' },
          { id: 3, date: '2025-10-22', title: 'Harvest Box Pick-up', time: '5:00 PM', location: 'Warehouse Bay 3' },
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const grouped = events.reduce((acc, ev) => {
    (acc[ev.date] = acc[ev.date] || []).push(ev);
    return acc;
  }, {});

  const sortedDates = Object.keys(grouped).sort();

  return (
    <section id="events" className="bg-emerald-900/95 py-16 text-emerald-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Calendar className="h-6 w-6 text-emerald-300" />
          <h2 className="font-display text-3xl font-bold">Calendar of Events</h2>
        </div>

        {loading ? (
          <p className="text-emerald-200">Loading events...</p>
        ) : sortedDates.length === 0 ? (
          <p className="text-emerald-200">No upcoming events. Check back soon!</p>
        ) : (
          <div className="space-y-6">
            {sortedDates.map((date) => (
              <div key={date} className="rounded-xl border border-emerald-700 bg-emerald-800/50 p-4">
                <div className="mb-3 text-sm font-semibold tracking-wide text-emerald-300">
                  {new Date(date).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
                </div>
                <ul className="space-y-3">
                  {grouped[date].map((ev) => (
                    <li key={ev.id} className="flex flex-col items-start justify-between gap-2 rounded-lg bg-emerald-900/40 p-3 sm:flex-row sm:items-center">
                      <div className="font-medium">{ev.title}</div>
                      <div className="flex items-center gap-4 text-sm text-emerald-200">
                        <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {ev.time}</span>
                        <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {ev.location}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
