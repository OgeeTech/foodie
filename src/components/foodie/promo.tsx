import { useState } from "react";
import { Minus, Plus, Star } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ribs from "@/assets/promo-ribs.jpg";
import wrap from "@/assets/food-wrap.jpg";
import wedges from "@/assets/food-wedges.jpg";

const reviews = [
  {
    name: "Gobi Manchurian",
    rating: "4.5",
    body: "Tender, smoky and still hot when it reached the door. Easily the best order this month.",
    image: wrap,
  },
  {
    name: "Sonti Gosto",
    rating: "4.55",
    body: "The rosemary herb finish is unreal. Portion size is generous for two people.",
    image: wedges,
  },
];

export function Promo({ onAdd }: { onAdd: (name: string, qty: number) => void }) {
  const [qty, setQty] = useState(1);

  return (
    <section id="promo" className="bg-surface py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="max-w-md">
          <p className="text-sm font-semibold text-primary">20% off in your first order</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            Gobi manchurian Ribs Lamb and mutton Rosemary Herb
          </h2>
          <p className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-extrabold">${(39 * qty).toFixed(0)}</span>
            <span className="text-lg text-muted-foreground line-through">
              ${(48 * qty).toFixed(0)}
            </span>
          </p>

          <div className="mt-6 grid grid-cols-[auto_1fr] items-center gap-4 sm:flex">
            <div className="flex items-center gap-1 rounded-xl bg-card p-1 shadow-card">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Decrease quantity"
                onClick={() => setQty((value) => Math.max(1, value - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center text-sm font-semibold">{qty}</span>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Increase quantity"
                onClick={() => setQty((value) => Math.min(20, value + 1))}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button
              className="h-12 rounded-xl px-7 font-semibold shadow-glow"
              onClick={() => {
                onAdd("Rosemary Herb Ribs", qty);
                toast.success(`${qty} × Rosemary Herb Ribs added to your bag`);
              }}
            >
              ADD TO BAG
            </Button>
          </div>

          <p className="mt-8 text-sm font-medium text-muted-foreground">
            Nilabati Hotel & Restaurant
          </p>
        </div>

        <div className="relative">
          <img
            src={ribs}
            alt="Rosemary herb lamb ribs in a cast iron skillet"
            width={1024}
            height={912}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-float"
          />
          <div className="mt-4 grid gap-3 sm:absolute sm:-left-6 sm:top-6 sm:mt-0 sm:w-64 sm:gap-24">
            {reviews.map((review) => (
              <figure key={review.name} className="rounded-2xl bg-card p-3 shadow-float">
                <figcaption className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2">
                  <img
                    src={review.image}
                    alt=""
                    width={944}
                    height={704}
                    loading="lazy"
                    className="h-9 w-9 shrink-0 rounded-lg object-cover"
                  />
                  <span className="truncate text-sm font-semibold">{review.name}</span>
                  <span className="flex shrink-0 items-center gap-1 text-xs font-semibold">
                    <Star className="h-3 w-3 fill-gold text-gold" />
                    {review.rating}
                  </span>
                </figcaption>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{review.body}</p>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
