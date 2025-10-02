import React from 'react';
import { Sprout, Package, Recycle } from 'lucide-react';

const offerings = [
  {
    icon: Sprout,
    title: 'Hands-on Workshops',
    description:
      'Monthly urban gardening classes: soil health, balcony beds, seed starting, irrigation, and pest-wise care—taught by local growers.',
    color: 'from-emerald-600 to-emerald-700',
  },
  {
    icon: Package,
    title: 'Fresh Produce Boxes',
    description:
      'Seasonal harvest boxes from our micro-plots and partner farms. Pick-up weekly with rotating greens, roots, herbs, and fruit.',
    color: 'from-amber-600 to-amber-700',
  },
  {
    icon: Recycle,
    title: 'Compost Drop-offs',
    description:
      'Bring your food scraps to our hubs. We turn them into living soil that feeds next season’s crops—closed-loop and odor-smart.',
    color: 'from-lime-600 to-emerald-700',
  },
];

export default function Offerings() {
  return (
    <section id="services" className="bg-stone-50 py-16 text-stone-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-emerald-900 sm:text-4xl">What We Offer</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o) => (
            <div key={o.title} className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${o.color} text-white shadow`}> 
                <o.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-stone-900">{o.title}</h3>
              <p className="text-stone-600">{o.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
