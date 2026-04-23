import { Phone, MessageCircle } from "lucide-react";

export const FloatingActions = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/919900000000?text=Hi%20Vishnu%20Jewels"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
    <a
      href="tel:+919900000000"
      aria-label="Call"
      className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center shadow-[var(--shadow-gold)] hover:scale-110 transition-transform animate-pulse-gold"
    >
      <Phone className="w-6 h-6 text-primary-foreground" />
    </a>
  </div>
);
