import { Phone, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const PHONE = "+919900000000";
const WHATSAPP = `https://wa.me/919900000000?text=Hi%20Vishnu%20Jewels`;

export const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please share your name and phone");
      return;
    }
    toast.success("Thank you! We'll be in touch shortly.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="hairline text-gold mb-4">Get in Touch</p>
            <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
              We'd love to <span className="text-gold-gradient italic">hear from you</span>
            </h2>
            <div className="gold-divider w-24 mb-8" />
            <p className="text-muted-foreground font-light mb-10 leading-relaxed">
              Call, WhatsApp, or drop a message — our team is ready to help you find the perfect piece.
            </p>

            <div className="space-y-4">
              <a href={`tel:${PHONE}`} className="flex items-center justify-between p-6 luxe-card group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-gradient flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="hairline text-gold/80">Call Us</p>
                    <p className="font-display text-xl text-foreground">{PHONE}</p>
                  </div>
                </div>
                <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 luxe-card group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-gradient flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="hairline text-gold/80">WhatsApp</p>
                    <p className="font-display text-xl text-foreground">Chat Now</p>
                  </div>
                </div>
                <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </div>
          </div>

          <form onSubmit={submit} className="luxe-card p-8 md:p-10 space-y-6">
            <div>
              <label className="hairline text-gold/80 block mb-3">Your Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground transition-colors"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="hairline text-gold/80 block mb-3">Phone Number</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground transition-colors"
                placeholder="+91 90000 00000"
              />
            </div>
            <div>
              <label className="hairline text-gold/80 block mb-3">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground transition-colors resize-none"
                placeholder="Tell us what you're looking for…"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-medium tracking-wide hover:scale-[1.02] transition-transform duration-500 shadow-[var(--shadow-gold)]"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
