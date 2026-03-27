export function CaseStudiesDetailsHeroSection({ title }: { title: string }) {
  return (
    <section className="relative h-80 w-full overflow-hidden bg-slate-900">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/50" />
      
      <div className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-center px-6">
        <h1 className="font-heading text-5xl font-bold text-white md:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
