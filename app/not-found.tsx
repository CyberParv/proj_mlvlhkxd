import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black px-6 text-center text-white">
      <h1 className="text-4xl font-bold md:text-5xl">Page Not Found</h1>
      <p className="max-w-xl text-base text-white/70 md:text-lg">
        The page you are looking for does not exist. Let us get you back to a showroom-ready experience.
      </p>
      <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
        <a href="/">Return Home</a>
      </Button>
    </div>
  );
}
