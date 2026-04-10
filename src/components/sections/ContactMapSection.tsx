export function ContactMapSection() {
  return (
    <section className="relative h-[450px] w-full lg:h-[600px]">
       <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.664448591325!2d67.0681143150035!3d24.860734284051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjYiTiA2N8KwMDQnMTMuMSJF!5e0!3m2!1sen!2s!4v1625573426842!5m2!1sen!2s" 
        className="h-full w-full border-0 grayscale invert-[10%] contrast-[1.1]"
        allowFullScreen={true} 
        loading="lazy"
        title="Google Maps"
       ></iframe>
       
       <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
    </section>
  );
}
