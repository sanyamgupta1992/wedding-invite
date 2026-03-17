import { motion } from "framer-motion";
import { siteConfig } from "../config/data";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/45 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
                    alt="Wedding Background"
                    className="w-full h-full object-cover origin-center scale-105"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4 w-full h-full pb-32">
                <div className="flex-1 flex flex-col items-center justify-center pt-24">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="font-body text-xs md:text-sm tracking-[0.4em] uppercase mb-8 text-white/90"
                    >
                        {siteConfig.hero.tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-col items-center gap-3 drop-shadow-md"
                    >
                        <p className="font-heading text-xl md:text-3xl tracking-widest font-light text-white">
                            {siteConfig.dates.mainWeddingDate}
                        </p>
                        <p className="font-body text-sm font-light tracking-widest opacity-90 uppercase text-white/80">
                            {siteConfig.venue.name}
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-24 w-full flex justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
                        className="font-heading text-4xl md:text-6xl text-gold tracking-wider drop-shadow-lg"
                    >
                        {siteConfig.names.coupleNames}
                    </motion.h1>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 z-20 animate-bounce"
            >
                <ChevronDown className="text-white opacity-70 w-10 h-10" strokeWidth={1} />
            </motion.div>
        </section>
    );
}
