"use client";

import { useState } from "react";
import { PopupModal } from "react-calendly";
import { PhoneCall, X } from "lucide-react";

export default function FloatingCalendlyChat() {
    const [openBubble, setOpenBubble] = useState(false);
    const [openCalendly, setOpenCalendly] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
                {/* Quick Action Bubble */}
                {openBubble && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 rounded-2xl bg-white p-4 shadow-2xl border border-gray-200">
                        <p className="mb-3 text-sm font-medium text-gray-700">
                            👋 Need to talk?
                        </p>

                        <button
                            onClick={() => {
                                setOpenCalendly(true);
                                setOpenBubble(false);
                            }}
                            className="whitespace-nowrap rounded-xl bg-[#352FE1] px-5 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-[#2d27c7]"
                        >
                            Schedule a 10 min meeting
                        </button>
                    </div>
                )}

                {/* Floating Icon */}
                <button
                    onClick={() => setOpenBubble(!openBubble)}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#352FE1] text-white shadow-xl transition duration-300 hover:scale-110"
                    aria-label="Open quick chat"
                >
                    {openBubble ? <X size={28} /> : <PhoneCall size={28} />}
                </button>
            </div>

            {/* Calendly Popup */}
            {typeof window !== "undefined" && (
                <PopupModal
                    url="https://calendly.com/aliraza-tevsotech/30min"
                    open={openCalendly}
                    onModalClose={() => setOpenCalendly(false)}
                    rootElement={document.body}
                />
            )}
        </>
    );
}