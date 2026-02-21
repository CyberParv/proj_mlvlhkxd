'use client';

import { Button } from '@/components/ui/button';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black px-6 text-center text-white">
      <h1 className="text-4xl font-bold md:text-5xl">Something went wrong</h1>
      <p className="max-w-xl text-base text-white/70 md:text-lg">
        Our shop is polishing the issue. Please try again or return to the homepage.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button onClick={() => reset()} className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
          Try Again
        </Button>
        <Button asChild variant="outline" className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
          <a href="/">Back Home</a>
        </Button>
      </div>
    </div>
  );
}
