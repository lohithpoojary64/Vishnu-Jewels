import bridal from "@/assets/col-bridal.jpg";
import bride from "@/assets/gal-bride.jpg";
import diamond from "@/assets/gal-diamond.jpg";
import showroom from "@/assets/showroom.jpg";
import temple from "@/assets/col-temple.jpg";
import bangles from "@/assets/col-bangles.jpg";

export const Gallery = () => (
  <section id="gallery" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="hairline text-gold mb-4">Gallery</p>
        <h2 className="font-display text-4xl md:text-6xl font-light">
          A glimpse into our <span className="text-gold-gradient italic">world</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 md:gap-4 h-[600px] md:h-[700px]">
        <div className="col-span-2 row-span-2 overflow-hidden group relative">
          <img src={bride} alt="Bride wearing Vishnu Jewels bridal set" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" loading="lazy" />
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/60 transition-all" />
        </div>
        <div className="overflow-hidden group">
          <img src={diamond} alt="Diamond solitaire ring" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" loading="lazy" />
        </div>
        <div className="overflow-hidden group">
          <img src={temple} alt="Temple jewelry pendant" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" loading="lazy" />
        </div>
        <div className="overflow-hidden group">
          <img src={bangles} alt="Gold bangles stack" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" loading="lazy" />
        </div>
        <div className="overflow-hidden group">
          <img src={showroom} alt="Vishnu Jewels showroom interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);
