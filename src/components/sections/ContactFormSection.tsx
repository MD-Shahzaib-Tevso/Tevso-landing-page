import Image from "next/image";

export function ContactFormSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Form Area */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="font-heading text-[36px] font-bold leading-tight text-[#311EE6] md:text-[46px]">
                Have any questions?
              </h2>
              <p className="mt-6 max-w-[550px] font-body text-[15px] leading-relaxed text-[#666666]">
                Enthusiastically disintermediate one-to-one leadership via business e-commerce. Dramatically reintermediate compelling process improvements rather than empowered relationships.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-[4px] border border-black/5 bg-[#F9F9F9] px-6 py-4 font-body text-[15px] placeholder-[#999999] focus:border-[#311EE6] focus:outline-none focus:ring-1 focus:ring-[#311EE6]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-[4px] border border-black/5 bg-[#F9F9F9] px-6 py-4 font-body text-[15px] placeholder-[#999999] focus:border-[#311EE6] focus:outline-none focus:ring-1 focus:ring-[#311EE6]"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full resize-none rounded-[4px] border border-black/5 bg-[#F9F9F9] px-6 py-4 font-body text-[15px] placeholder-[#999999] focus:border-[#311EE6] focus:outline-none focus:ring-1 focus:ring-[#311EE6]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 rounded-[4px] bg-[#311EE6] px-10 py-4 font-body text-[16px] font-semibold text-white transition-all hover:bg-[#311EE6]/90 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Illustration Area */}
          <div className="relative flex justify-center lg:justify-end">
             <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-[32px] sm:h-[500px]">
                {/* Decorative Shapes (Similar to the screenshot illustration) */}
                <div className="absolute inset-x-0 bottom-0 h-3/4 w-full bg-blue-50/50" />
                <div className="absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/50" />
                
                {/* Hand/Phone placeholder using available assets */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                   <div className="relative h-full w-full rotate-[-5deg]">
                       <Image 
                        src="/laptop.png"
                        alt="Contact Illustration"
                        fill
                        className="object-contain"
                       />
                       {/* Floating Icons Overlay */}
                       <div className="absolute top-10 right-10 h-10 w-10 rotate-12 rounded-full bg-[#311EE6] shadow-lg shadow-blue-200" />
                       <div className="absolute bottom-20 left-10 h-8 w-8 -rotate-12 rounded-full bg-blue-400 shadow-lg shadow-blue-100" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
