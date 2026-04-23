import { MapPin, Navigation, Clock } from "lucide-react";

const MAPS = "https://maps.google.com/?q=Vishnu+Jewels+Whitefield+Bengaluru";

export const Location = () => (
  <section id="location" className="py-24 md:py-32 bg-ink-soft">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="hairline text-gold mb-4">Visit Us</p>
          <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
            Find your way to <span className="text-gold-gradient italic">Vishnu Jewels</span>
          </h2>
          <div className="gold-divider w-24 mb-8" />

          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-gold/40">
                <MapPin className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="hairline text-gold/80 mb-1">Address</p>
                <p className="text-foreground font-light leading-relaxed">
                  State Highway 35, Ambedkar Nagar,<br />
                  Whitefield, Bengaluru, Karnataka 560066
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-gold/40">
                <Navigation className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="hairline text-gold/80 mb-1">Landmark</p>
                <p className="text-foreground font-light">Near Hope Farm Junction</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-gold/40">
                <Clock className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="hairline text-gold/80 mb-1">Hours</p>
                <p className="text-foreground font-light">Opens at 10:45 AM · Daily</p>
              </div>
            </div>
          </div>

          <a
            href={MAPS}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-medium tracking-wide hover:scale-105 transition-transform duration-500 shadow-[var(--shadow-gold)]"
          >
            <Navigation className="w-4 h-4" /> Open in Google Maps
          </a>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 border border-gold/30" />
          <iframe
            title="Vishnu Jewels location"
            src="https://www.google.com/maps?q=Whitefield%20Hope%20Farm%20Junction%20Bengaluru&output=embed"
            className="w-full h-[450px] grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);
