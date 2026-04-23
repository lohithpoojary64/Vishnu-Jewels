import { Star, Shield, Gem, Users } from "lucide-react";

const badges = [
  { icon: Star, title: "4.9 ★ Rating", desc: "From 120+ happy customers" },
  { icon: Shield, title: "Trusted in Whitefield", desc: "Honest, transparent service" },
  { icon: Gem, title: "Premium Collections", desc: "Gold · Silver · Diamond" },
  { icon: Users, title: "Friendly Staff", desc: "Professional &amp; supportive" },
];

export const TrustBadges = () => (
  <section className="py-20 bg-ink-soft border-y border-border/40">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((b, i) => (
          <div
            key={b.title}
            className="luxe-card p-6 text-center group"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/40 mb-4 group-hover:bg-gold-gradient transition-all duration-500">
              <b.icon className="w-6 h-6 text-gold group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-xl text-gold-gradient mb-1">{b.title}</h3>
            <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: b.desc }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
