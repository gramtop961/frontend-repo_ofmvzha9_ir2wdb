import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-bold">GreenLoop Co-op</h3>
            <p className="mt-2 text-amber-200/80">Urban growers building healthy soil, food, and community.</p>
          </div>
          <div>
            <h4 className="font-semibold">Visit</h4>
            <p className="mt-2 inline-flex items-start gap-2 text-amber-200/80">
              <MapPin className="mt-0.5 h-4 w-4" /> 123 Garden Way, Your City
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-2 space-y-2 text-amber-200/80">
              <li className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@greenloop.coop</li>
              <li className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-amber-800 pt-6 text-sm text-amber-300/70">© {new Date().getFullYear()} GreenLoop Co-op. All rights reserved.</div>
      </div>
    </footer>
  );
}
