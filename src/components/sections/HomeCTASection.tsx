export function HomeCTASection() {
  return (
    <section
      className="relative w-full bg-brand overflow-hidden py-20 lg:py-24 text-white"
      style={{
        backgroundImage: 'url("/banner2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#000',
      }}
    >

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #311EE6 0%, rgba(49, 30, 230, 0) 100%)' }}
      />

      <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="font-heading text-[40px] md:text-[50px] lg:text-[54px] font-bold leading-[1.1] tracking-tight">
              Your vision, our code <br className="hidden md:block" />
              digital growth delivered
            </h2>

            <div className="flex flex-wrap gap-5">
              <button className="theme-btn">
                + 44 7400714002
              </button>
              <button className="theme-btn theme-btn-white">
                Talk to Our Expert
              </button>
            </div>
          </div>

          {/* Right Content - Laptop Placeholder */}
          {/* <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px]">
              <div 
                className="absolute inset-y-0 left-0 w-1/4 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(90deg, #311EE6 0%, rgba(49, 30, 230, 0) 100%)' }}
              />
              <img
                src=""
                alt="Digital growth visualization"
                className="w-full h-auto object-contain min-h-[300px] lg:min-h-[400px]"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}