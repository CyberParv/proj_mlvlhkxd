'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryItem {
  imageSrc: string;
  alt: string;
  category: string;
}

interface Props {
  items?: GalleryItem[];
}

export default function GalleryGrid({
  items = [
    { imageSrc: '/images/gallery.jpg', alt: 'Ceramic coating close up', category: 'Ceramic Coating' },
    { imageSrc: '/images/hero.jpg', alt: 'Interior detail on leather seats', category: 'Interior Detail' },
    { imageSrc: '/images/about.jpg', alt: 'Wheel gloss on sports car', category: 'Wheel Gloss' },
    { imageSrc: '/images/team.jpg', alt: 'Showroom shine', category: 'Full Detail' },
  ],
}: Props) {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <button
            key={item.imageSrc + item.category}
            onClick={() => setActiveItem(item)}
            className="group relative overflow-hidden rounded-lg"
            aria-label={item.alt}
            type="button"
          >
            <Image
              src={item.imageSrc}
              alt={item.alt}
              width={1600}
              height={900}
              className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 space-y-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-xs uppercase tracking-widest text-white/70">{item.category}</p>
              <p className="text-lg font-semibold text-white">{item.alt}</p>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-black">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Close"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
            <Image
              src={activeItem.imageSrc}
              alt={activeItem.alt}
              width={1600}
              height={900}
              className={cn('h-full w-full object-cover')}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-xs uppercase tracking-widest text-white/70">{activeItem.category}</p>
              <p className="text-xl font-semibold text-white">{activeItem.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
