import React, { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';

// Simple client-side embed using public Instagram posts via embed links.
// For production, proxy via backend for API access. Here we support an embed grid with links.

const demoPosts = [
  {
    url: 'https://www.instagram.com/p/CxU9O1CqkzM/',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Farm fresh greens',
  },
  {
    url: 'https://www.instagram.com/p/CxU9O1CqkzM/',
    img: 'https://images.unsplash.com/photo-1463062511209-f7aa591fa72f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Community garden bed',
  },
  {
    url: 'https://www.instagram.com/p/CxU9O1CqkzM/',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop',
    alt: 'Compost turning',
  },
  {
    url: 'https://www.instagram.com/p/CxU9O1CqkzM/',
    img: 'https://images.unsplash.com/photo-1615485737651-6f4b7700f9b2?q=80&w=1200&auto=format&fit=crop',
    alt: 'Harvest box assortment',
  },
  {
    url: 'https://www.instagram.com/p/CxU9O1CqkzM/',
    img: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1200&auto=format&fit=crop',
    alt: 'Seedlings in trays',
  },
  {
    url: 'https://www.instagram.com/p/CxU9O1CqkzM/',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    alt: 'Colorful veggies',
  },
];

export default function InstagramFeed() {
  const [posts, setPosts] = useState(demoPosts);

  useEffect(() => {
    // If backend provides posts, fetch them
    async function fetchPosts() {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || '';
        const res = await fetch(`${base}/api/instagram`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data?.posts) && data.posts.length) setPosts(data.posts);
        }
      } catch (e) {}
    }
    fetchPosts();
  }, []);

  return (
    <section id="instagram" className="bg-stone-100 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-center gap-3">
          <Instagram className="h-6 w-6 text-pink-600" />
          <h2 className="font-display text-3xl font-bold text-stone-900">From Instagram</h2>
        </div>
        <p className="mb-6 text-stone-600">Follow our journey: seedlings, harvests, compost builds, and workshop highlights.</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {posts.map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-xl bg-stone-200">
              <img src={p.img} alt={p.alt} className="h-40 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-48 md:h-56" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
