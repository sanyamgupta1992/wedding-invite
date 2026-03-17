import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/data";
import { Send } from "lucide-react";

export default function RSVP() {
    const [formData, setFormData] = useState({
        name: "",
        attendance: siteConfig.rsvp.dayOptions[0],
        guests: "1",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Hi Karan & Mitalli! I'm ${formData.name}. Attendance: ${formData.attendance}. Guests: ${formData.guests}. ${formData.message}`;
        const url = `https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <section className="py-24 bg-primary text-white px-4 md:px-8 relative outline-none border-y-8 border-gold">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-heading text-4xl md:text-5xl text-gold mb-6 text-center"
                >
                    RSVP
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-body text-center text-white/80 max-w-xl mb-12 font-light leading-relaxed"
                >
                    {siteConfig.rsvp.introText}
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 w-full bg-white/5 p-8 md:p-12 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl"
                >
                    <div className="flex flex-col gap-2">
                        <label className="font-body text-xs tracking-widest text-gold uppercase">Full Name</label>
                        <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-transparent border-b border-white/30 focus:border-gold outline-none py-2 font-body text-white transition-colors"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-body text-xs tracking-widest text-gold uppercase">Attendance</label>
                        <select
                            value={formData.attendance}
                            onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                            className="bg-transparent border-b border-white/30 focus:border-gold outline-none py-2 font-body text-white transition-colors [&>option]:text-primary"
                        >
                            {siteConfig.rsvp.dayOptions.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-body text-xs tracking-widest text-gold uppercase">Number of Guests</label>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            value={formData.guests}
                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                            className="bg-transparent border-b border-white/30 focus:border-gold outline-none py-2 font-body text-white transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <label className="font-body text-xs tracking-widest text-gold uppercase">Message for the Couple (Optional)</label>
                        <textarea
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="bg-transparent border-b border-white/30 focus:border-gold outline-none py-2 font-body text-white transition-colors resize-none"
                            placeholder="Leave a wish..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-gold text-primary font-body font-semibold tracking-widest uppercase py-4 rounded hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                        <span>Send RSVP via WhatsApp</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
