export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="space-y-4 text-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/30 border-t-white mx-auto" />
        <p className="text-lg font-semibold">Loading Detailing Bros...</p>
      </div>
    </div>
  );
}
