import { Apple, Play, Star } from "lucide-react";
import spread from "@/assets/food-spread.jpg";
import fried from "@/assets/food-fried.jpg";

export function AppCta() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
      <div className="relative mx-auto flex w-full max-w-md items-end justify-center gap-4">
        {[spread, fried].map((image, index) => (
          <div
            key={index}
            className={`w-1/2 overflow-hidden rounded-[2rem] border-8 border-ink bg-ink shadow-float ${
              index === 1 ? "translate-y-6" : ""
            }`}
          >
            <img
              src={image}
              alt="Foodie mobile app screen"
              width={944}
              height={704}
              loading="lazy"
              className="aspect-[9/17] w-full object-cover"
            />
          </div>
        ))}
        <span className="absolute -left-2 top-4 flex items-center gap-1 rounded-full bg-card px-3 py-1.5 text-xs font-semibold shadow-card">
          <Star className="h-3 w-3 fill-gold text-gold" /> 4.9 app rating
        </span>
      </div>

      <div className="max-w-md">
        <p className="text-sm font-semibold text-primary">Get to easily find best food</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Download the Foodie App
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Reorder your favourites in two taps, follow your rider on the live map and keep
          every receipt in one place.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#top"
            className="flex items-center gap-3 rounded-xl bg-ink px-5 py-3 text-background transition-opacity hover:opacity-90"
          >
            <Apple className="h-6 w-6 shrink-0" />
            <span className="text-left leading-tight">
              <span className="block text-[10px] uppercase opacity-70">Download on the</span>
              <span className="block text-sm font-semibold">App Store</span>
            </span>
          </a>
          <a
            href="#top"
            className="flex items-center gap-3 rounded-xl bg-ink px-5 py-3 text-background transition-opacity hover:opacity-90"
          >
            <Play className="h-6 w-6 shrink-0" />
            <span className="text-left leading-tight">
              <span className="block text-[10px] uppercase opacity-70">Get it on</span>
              <span className="block text-sm font-semibold">Google Play</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
