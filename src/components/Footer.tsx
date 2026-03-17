import { siteConfig } from "../config/data";

export default function Footer() {
    return (
        <footer className="py-16 bg-bg text-center px-4 relative">
            {/* Decorative top border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold/50" />

            <h3 className="font-heading text-xl md:text-2xl text-primary mb-6 tracking-widest uppercase">
                {siteConfig.footer.familyAcknowledgement}
            </h3>

            <p className="font-heading text-lg text-gray-600 max-w-xl mx-auto mb-10 font-style-italic italic leading-relaxed">
                "{siteConfig.footer.closingMessage}"
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-2">
                    <p className="font-heading text-2xl text-gold">{siteConfig.names.initials}</p>
                </div>
                <p className="font-body text-xs tracking-widest text-gray-400 uppercase">
                    Made with love
                </p>
            </div>
        </footer>
    );
}
