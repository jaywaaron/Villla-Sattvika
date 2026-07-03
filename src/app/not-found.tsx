import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center text-center px-6 gap-6">
      <span className="font-label text-xs tracking-[0.3em] uppercase text-terracotta font-semibold">
        Page Not Found
      </span>
      <h1 className="font-display text-4xl md:text-5xl text-forest-dark font-normal">
        This path doesn&apos;t lead to the villa
      </h1>
      <p className="font-sans text-charcoal-light max-w-md">
        The page you&apos;re looking for may have moved. Let&apos;s get you back
        to Villa Sattvika.
      </p>
      <Link href="/" className="btn-primary">
        Return Home
      </Link>
    </main>
  );
}
