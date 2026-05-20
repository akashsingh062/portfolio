export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Glowing Pulse Ring */}
        <div className="relative flex items-center justify-center w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-4 border-t-secondary animate-spin" />
        </div>
        <p className="text-sm font-semibold tracking-wider text-text-secondary animate-pulse">
          LOADING...
        </p>
      </div>
    </div>
  );
}
