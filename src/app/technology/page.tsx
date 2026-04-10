"use client";

import React, { useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const techTabs = [
    "All",
    "Mobile",
    "Ecommerce",
    "Backend",
    "Frontend",
    "Testing",
    "Web CMS",
    "Designing",
];

const techData: Record<string, { name: string; url: string }[]> = {
    All: [
        { name: "Laravel", url: "/tech/Vector-1.png" },
        { name: "Angular", url: "/tech/Vector-2.png" },
        { name: "Stripe", url: "/tech/Vector-3.png" },
        { name: "Docker", url: "/tech/Group.png" },
        { name: "Figma", url: "/tech/Vector.png" },
        { name: "AWS", url: "/tech/Group 1000001570.png" },
        { name: "MySQL", url: "/tech/Group 1000001569.png" },
    ],
    Mobile: [
        { name: "Flutter", url: "/images/flutter.png" },
        { name: "React Native", url: "/images/react-native.png" },
        { name: "Swift", url: "/images/swift.png" },
        { name: "Kotlin", url: "/images/kotlin.png" },
    ],
    Ecommerce: [
        { name: "Stripe", url: "/images/stripe.png" },
        { name: "Shopify", url: "/images/shopify.png" },
        { name: "Magento", url: "/images/magento.png" },
        { name: "WooCommerce", url: "/images/woocommerce.png" },
    ],
    Backend: [
        { name: "Laravel", url: "/images/laravel.png" },
        { name: "Node.js", url: "/images/nodejs.png" },
        { name: "Go", url: "/images/go.png" },
        { name: "MySQL", url: "/images/mysql.png" },
        { name: "Docker", url: "/images/docker.png" },
    ],
    Frontend: [
        { name: "React", url: "/images/react.png" },
        { name: "Angular", url: "/images/angular.png" },
        { name: "Next.js", url: "/images/nextjs.png" },
        { name: "Vue", url: "/images/vue.png" },
        { name: "Tailwind", url: "/images/tailwind.png" },
    ],
    Testing: [
        { name: "Jest", url: "/images/jest.png" },
        { name: "Cypress", url: "/images/cypress.png" },
        { name: "Selenium", url: "/images/selenium.png" },
        { name: "Postman", url: "/images/postman.png" },
    ],
    "Web CMS": [
        { name: "WordPress", url: "/images/wordpress.png" },
        { name: "Contentful", url: "/images/contentful.png" },
        { name: "Strapi", url: "/images/strapi.png" },
    ],
    Designing: [
        { name: "Figma", url: "/images/figma.png" },
        { name: "Adobe XD", url: "/images/adobexd.png" },
        { name: "Photoshop", url: "/images/photoshop.png" },
        { name: "Sketch", url: "/images/sketch.png" },
    ],
};

const platformCards = [
    { title: "Android", image: "/platForm/1.png" },
    { title: "iOS", image: "/platForm/2.png" },
    { title: "UI / UX", image: "/platForm/3.png" },
    { title: "Web", image: "/platForm/ux.png" },
];

const successCards = [
    {
        number: "01",
        title: "Quality Assurance",
        text: "Projects are supervised by our QA team who rigorously test the product from start to finish. We care how you deliver, not only what you build.",
    },
    {
        number: "02",
        title: "Resources",
        text: "We enjoy the best people with the most advanced skills. We empower teams, remove blockers, and keep delivery moving with confidence.",
    },
    {
        number: "03",
        title: "Secure Solutions",
        text: "From ideation to product launch, we focus on practical and secure technical decisions. Your systems stay reliable as requirements grow.",
    },
    {
        number: "04",
        title: "Sustainability",
        text: "By making planning sharper and execution more structured, we help teams build products that stay maintainable over time.",
    },
];

export default function TechnologyShowcaseSection() {
    const [activeTab, setActiveTab] = useState("All");
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Hero Top Animations
        gsap.fromTo(".hero-top-animate",
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.4, stagger: 0.25, ease: "power4.out" }
        );

        // Stack Section ScrollTrigger
        gsap.fromTo(".stack-section-animate",
            { y: 60, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".stack-section-trigger",
                    start: "top 90%",
                    once: true,
                },
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
            }
        );

        // Platform Section Stagger
        gsap.fromTo(".platform-animate",
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".platform-section-trigger",
                    start: "top 90%",
                    once: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
            }
        );

        // Platform Cards Stagger
        gsap.fromTo(".platform-card",
            { y: 80, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".platform-section-trigger",
                    start: "top 80%",
                    once: true,
                },
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: "expo.out",
            }
        );

        // Success Section Stagger
        gsap.fromTo(".success-animate",
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".success-section-trigger",
                    start: "top 90%",
                    once: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
            }
        );

        // Success Cards Stagger
        gsap.fromTo(".success-card",
            { y: 80, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".success-section-trigger",
                    start: "top 85%",
                    once: true,
                },
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
            }
        );

        // Hero Bottom Entrance
        gsap.fromTo(".hero-bottom-left",
            { x: -100, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".hero-bottom-trigger",
                    start: "top 90%",
                    once: true,
                },
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power4.out",
            }
        );

        gsap.fromTo(".hero-bottom-right",
            { x: 100, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".hero-bottom-trigger",
                    start: "top 90%",
                    once: true,
                },
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power4.out",
            }
        );

        // Final Refresh to catch everything
        ScrollTrigger.refresh();
        setTimeout(() => ScrollTrigger.refresh(), 500);
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-white text-[#111111] mt-[80px]">
            {/* HERO TOP */}
            <section className="relative mt-20 min-h-[91vh] overflow-hidden pt-32 pb-20">
                {/* Background layer */}
                <div className="absolute inset-0">
                    <Image
                        src="/techHero.jpg"
                        alt="Tevso Hero Background"
                        fill
                        priority
                        quality={100}
                        className="object-cover object-center"
                    />

                    {/* Overlay on top of image */}
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.95)_0%,_rgba(0,0,0,0.65)_35%,_rgba(0,0,0,0)_100%)] pointer-events-none" />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-[100px] grid w-full grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-16 lg:px-16">
                    <div className="hero-content max-w-2xl space-y-8 text-left">
                        <h1 className="hero-top-animate font-heading text-[40px] leading-[50px] font-semibold tracking-tight text-white sm:text-[52px] sm:leading-[64px] lg:text-[66px] lg:leading-[80px]">
                            We transform Ideas into results through powerful technologies
                        </h1>

                        <p className="hero-top-animate font-body text-lg leading-relaxed text-white">
                            Turn your ideas into reality. Our team of experts along with a collaborative approach deliver exceptional results.
                        </p>
                    </div>
                </div>
            </section>

            {/* STACK SECTION */}
            <section
                className="stack-section-trigger relative min-h-[700px] overflow-hidden  bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/teckStack.png')" }}
            >
                {/* Background Overlay (Optional for better contrast) */}
                <div className="absolute inset-0 bg-black/20" />

                <div className="relative mx-auto max-w-[1280px] px-6 py-24 sm:px-8 lg:px-12">

                    {/* floating avatar */}


                    <div className="mx-auto max-w-[950px] text-center">
                        <h3 className="stack-section-animate font-['Raleway'] text-[40px] font-bold leading-tight text-white md:text-[54px]">
                            Our Technology Stack
                        </h3>

                        <p className="stack-section-animate mx-auto mt-6 max-w-[720px] font-['Raleway'] text-[15px] leading-[24px] text-white/70 md:text-[17px]">
                            If you dream it we can build it. We use wide ranging technologies and platforms. Our
                            technology stack enables us to implement any feature for our clients.
                        </p>

                        {/* Rectangle White Tabs */}
                        <div className="stack-section-animate relative p-[8px] mx-auto mt-14 inline-flex w-full max-w-[900px] flex-wrap items-center overflow-hidden rounded-[4px] bg-white shadow-2xl">
                            {techTabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 min-w-[80px] px-3 py-2 font-['Raleway'] text-[14px] font-semibold transition-all duration-300 ${activeTab === tab
                                        ? "bg-[#352FE1] text-white"
                                        : "text-[#444444] hover:bg-slate-50"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="mt-20 grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-16 sm:grid-cols-3 lg:grid-cols-5"
                            >
                                {techData[activeTab]?.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex h-20 w-32 items-center justify-center transition-all duration-500 hover:scale-110"
                                    >
                                        <img
                                            src={item.url}
                                            alt={item.name}
                                            className="max-h-[60px] max-w-[110px] object-contain brightness-0 invert opacity-100 transition-all duration-500 group-hover:opacity-100"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>


            {/* PLATFORMS */}
            <section className="platform-section-trigger bg-[#f3f3f3] py-[48px] md:py-[60px]">
                <div className="mx-auto max-w-[1220px] px-6 lg:px-8">
                    <div className="mx-auto max-w-[760px] text-center">
                        <h3 className="platform-animate font-['Raleway'] text-[32px] font-semibold leading-[1.15] text-[#333333] md:text-[36px]">
                            Platforms we build for
                        </h3>
                        <p className="platform-animate mx-auto mt-3 max-w-[660px] font-['Raleway'] text-[15px] font-normal leading-[1.25] text-[#8a8a8a]">
                            We develop software using a variety of platforms to perfectly match your needs.
                            <br className="hidden md:block" />
                            Tailored solutions for iOS, Android, IoT and Web.
                        </p>
                    </div>

                    <div className="mt-[34px] grid grid-cols-1 justify-items-center gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
                        {platformCards.map((card, index) => (
                            <article
                                key={card.title}
                                className={`platform-card group relative w-full max-w-[255px] overflow-hidden rounded-[16px] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,0,0,0.16)] ${index === 2 ? "bg-[#f7f7f7]" : ""
                                    }`}
                            >
                                <div className="relative h-[280px] overflow-hidden rounded-[16px]">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${index === 2 ? "object-contain p-0" : "object-cover"
                                            }`}
                                    />

                                    {index !== 2 && (
                                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(0,0,0,0.22)_100%)]" />
                                    )}

                                    {index === 0 && (
                                        <div className="absolute bottom-4 left-4 font-['Raleway'] text-[16px] font-medium leading-none text-white">
                                            Android
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* SUCCESS */}
            <section className="success-section-trigger bg-[#f4f4f4]">
                <div className="mx-auto max-w-[1280px] px-6 pb-16 sm:px-8 lg:px-12">
                    <div className="text-center">
                        <h3 className="success-animate font-['Raleway'] text-[30px] font-semibold leading-tight text-[#222222] sm:text-[36px]">
                            The secret to our success
                        </h3>
                    </div>

                    <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {successCards.map((card) => (
                            <article
                                key={card.number}
                                className="success-card group relative z-10 overflow-hidden rounded-[18px] border border-black/5 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)]"
                            >
                                {/* Overlapping Circles Background */}
                                <div className="absolute -bottom-10 -right-8 z-0 h-24 w-24 rounded-full bg-[#352FE1] opacity-80 transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:right-0 group-hover:h-full group-hover:w-full group-hover:scale-[10] group-hover:rounded-none group-hover:opacity-100" />
                                <div className="absolute -bottom-4 -right-14 z-0 h-24 w-24 rounded-full bg-[#352FE1] opacity-60 transition-all duration-500 ease-in-out group-hover:opacity-0" />

                                <div className="relative z-10">
                                    <div className="flex justify-end">
                                        <div className="font-['Raleway'] text-[64px] font-bold leading-none text-[#E5E5E5] transition-colors duration-500 group-hover:text-white/20">
                                            {card.number}
                                        </div>
                                    </div>

                                    <h4 className="mt-2 font-['Raleway'] text-[24px] font-bold leading-tight text-[#222222] transition-colors duration-500 group-hover:text-white">
                                        {card.title}
                                    </h4>

                                    <p className="mt-6 font-['Raleway'] text-[15px] leading-[1.6] text-[#666666] transition-colors duration-500 group-hover:text-white">
                                        {card.text}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* HERO BOTTOM */}
            <section
                className="hero-bottom-trigger relative w-full overflow-hidden bg-[#000] py-16 lg:py-20 text-white"
                style={{
                    backgroundImage: 'url("/tech/techherolast.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, #311EE6 0%, rgba(49, 30, 230, 0) 100%)' }}
                />

                <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="hero-bottom-left max-w-[580px] space-y-6 text-left">
                            <h2 className="font-['Raleway'] text-[32px] font-bold leading-[1.08] text-white sm:text-[40px] lg:text-[46px]">
                                We transform Ideas into
                                <br />
                                results through powerful
                                <br />
                                technologies
                            </h2>

                            <p className="max-w-[470px] font-['Raleway'] text-[15px] leading-[22px] text-white/80">
                                Turn your ideas into reality. Our team of experts along with a
                                collaborative approach deliver exceptional results.
                            </p>
                        </div>

                        {/* Right Content - Laptop Visualization */}
                        {/* <div className="hero-bottom-right relative flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[620px]">
                                <img
                                    src="/laptop.png"
                                    alt="Digital transformation visualization"
                                    className="h-auto w-full object-contain"
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

        </section>
    );
}
