import { motion } from "framer-motion";
import { siteConfig } from "../config/data";
import { Clock, Shirt } from "lucide-react";

export default function Schedule() {
    return (
        <section className="py-24 bg-bg px-4 md:px-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="font-heading text-4xl md:text-5xl text-primary mb-6 text-center"
                >
                    The Celebration Unfolds
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-body text-center text-gray-600 max-w-2xl mb-16 leading-relaxed"
                >
                    {siteConfig.schedule.introText}
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
                    {siteConfig.schedule.events.map((evt, idx) => (
                        <motion.div
                            key={evt.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="bg-white rounded-t-[100px] rounded-b-xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] p-8 flex flex-col items-center border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                        >
                            {/* Top Accent Decoration */}
                            <div className="w-full h-3 bg-gradient-to-r from-gold/70 via-gold to-gold/70 absolute top-0 left-0" />

                            <p className="font-body text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-4 mt-8">
                                {evt.title}
                            </p>

                            <h3 className="font-heading text-3xl text-primary text-center mb-4 h-16 flex items-center justify-center">
                                {evt.eventName}
                            </h3>

                            <div className="w-12 h-[1px] bg-gold/50 mb-6" />

                            <p className="font-heading text-lg text-gray-800 mb-8 font-medium text-center">
                                {evt.date}
                            </p>

                            <div className="flex flex-col gap-5 w-full px-2 lg:px-6">
                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="bg-bg p-2 rounded-full"><Clock className="w-5 h-5 text-gold" /></div>
                                    <span className="font-body text-sm tracking-wide">{evt.time}</span>
                                </div>
                                {evt.dressCode && (
                                    <div className="flex items-center gap-4 text-gray-600">
                                        <div className="bg-bg p-2 rounded-full"><Shirt className="w-5 h-5 text-gold" /></div>
                                        <span className="font-body text-sm tracking-wide">{evt.dressCode}</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
