import { Button } from "@/components/ui/button";
import heroPlate from "@/assets/hero-plate.jpg";
import salad from "@/assets/hero-salad.jpg";
import spread from "@/assets/food-spread.jpg";
import wrap from "@/assets/food-wrap.jpg";
import fried from "@/assets/food-fried.jpg";

const orbit = [
  { src: spread, alt: "Assorted asian dishes", className: "left-0 top-6 w-20 sm:w-24" },
  { src: wrap, alt: "Chicken wraps", className: "right-4 top-0 w-16 sm:w-20" },
  { src: salad, alt: "Chicken salad", className: "bottom-8 left-8 w-16 sm:w-20" },
  { src: fried, alt: "Fried chicken", className: "bottom-0 right-10 w-20 sm:w-24" },
];

export function Stats() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
      <div className="relative mx-auto aspect-square w-full max-w-md">
        <div className="orbit-ring absolute inset-8" />
        <img
          src={heroPlate}
          alt="Signature roasted chicken plate"
          width={1024}
          height={1024}
          loading="lazy"
          className="absolute left-1/2 top-1/2 w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-float"
        />
        {orbit.map((item) => (
          <img
            key={item.alt}
            src={item.src}
            alt={item.alt}
            width={944}
            height={704}
            loading="lazy"
            className={`absolute aspect-square rounded-full object-cover shadow-card ${item.className}`}
          />
        ))}
      </div>

      <div className="max-w-md">
        <p className="text-sm font-semibold text-primary">Our popular restaurants</p>
        <h2 className="mt-3 text-5xl font-extrabold lg:text-6xl">1000+</h2>
        <h3 className="mt-1 text-2xl font-semibold text-muted-foreground">
          Our delicious food
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Every kitchen on Foodie is visited, rated and re-checked by our team, so the
          plate you order looks exactly like the plate that arrives.
        </p>
        <Button asChild className="mt-7 h-12 rounded-xl px-7 font-semibold shadow-glow">
          <a href="#restaurants">EXPLORE MENU</a>
        </Button>
      </div>
    </section>
  );
}
