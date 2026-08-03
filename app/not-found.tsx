import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-[1000px] flex-col items-start justify-center px-6">
      <h1 className="mb-4 font-mono text-6xl font-semibold text-white">
        <span className="text-accent">#</span>404
      </h1>
      <p className="mb-8 text-lg text-gray-400">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 border border-accent px-4 py-2 font-mono text-sm text-accent transition hover:bg-accent hover:text-black"
      >
        <MoveLeft size={14} /> Back to Home
      </Link>
    </main>
  );
}