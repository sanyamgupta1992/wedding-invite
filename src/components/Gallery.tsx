import { motion } from "framer-motion";
import { siteConfig } from "../config/data";
import { UploadCloud } from "lucide-react";

export default function Gallery() {
    const images = [
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=400&auto=format&fit=crop"
    ];

    return (
        <section className="py-24 bg-bg px-4 md:px-8 relative overflow-hidden">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="font-heading text-4xl md:text-5xl text-primary mb-6"
                >
                    Our Beautiful Moments
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-body text-gray-600 max-w-2xl mb-12 leading-relaxed"
                >
                    {siteConfig.mediaUpload.text}
                </motion.p>

                <motion.a
                    href={siteConfig.mediaUpload.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center justify-center gap-4 bg-primary text-gold px-10 py-4 rounded-full font-body font-medium tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300 shadow-xl group border border-gold/30 hover:border-transparent"
                >
                    <UploadCloud className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                    <span>Upload Photos</span>
                </motion.a>

                {/* Decorative Grid of moments */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20 w-full">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 + (i * 0.1) }}
                            className={`aspect-[3/4] rounded-xl overflow-hidden relative shadow-lg ${i % 2 === 0 ? 'mt-0 md:mt-8' : 'mt-8 md:mt-0'}`}
                        >
                            <img
                                src={img}
                                alt={`Gallery placeholder ${i}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
