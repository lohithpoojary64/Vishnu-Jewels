export const Footer = () => (
  <footer className="bg-ink-soft border-t border-border/60 pt-20 pb-10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <h3 className="font-display text-3xl text-gold-gradient mb-4">Vishnu Jewels</h3>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">
            Trusted Jewelry Store in Bangalore — premium gold, silver, and diamond collections crafted with care.
          </p>
          <div className="flex items-center gap-2 text-gold">
            <span>★★★★★</span>
            <span className="text-sm text-muted-foreground">4.9 · 122 reviews</span>
          </div>
        </div>
        <div>
          <p className="hairline text-gold mb-5">Address</p>
          <p className="text-muted-foreground font-light leading-relaxed">
            State Highway 35, Ambedkar Nagar,<br />
            Whitefield, Bengaluru,<br />
            Karnataka 560066
          </p>
          <p className="text-muted-foreground/70 text-sm mt-2">Near Hope Farm Junction</p>
        </div>
        <div>
          <p className="hairline text-gold mb-5">Contact</p>
          <a href="tel:+919900000000" className="block text-foreground hover:text-gold transition-colors mb-2">+91 99000 00000</a>
          <a href="https://wa.me/919900000000" className="block text-foreground hover:text-gold transition-colors mb-2">WhatsApp Us</a>
          <p className="text-muted-foreground text-sm mt-3">Opens at 10:45 AM</p>
        </div>
      </div>

      <div className="gold-divider mb-8" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Vishnu Jewels. All rights reserved.</p>
        <p className="hairline text-gold/60">Crafted with elegance</p>
      </div>
    </div>
  </footer>
);
