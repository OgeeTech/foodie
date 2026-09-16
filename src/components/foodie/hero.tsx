import { useState } from "react";
import { MapPin, Star } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroPlate from "@/assets/hero-plate.png";
import heroSalad from "@/assets/hero-salad.png";
import heroNoodles from "@/assets/food-spread.jpg";

export function Hero() {
  const [mode, setMode] = useState<"delivery" | "pickup">("delivery");
  const [address, setAddress] = useState("Dhaka, Bangladesh");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!address.trim()) {
      toast.error("Please enter your delivery address first.");
      return;
    }
    toast.success(
      mode === "delivery"
        ? `Finding restaurants delivering to ${address}`
        : `Showing pickup spots near ${address}`,
    );
    document.getElementById("restaurants")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="bg-hero-wash pb-20 pt-10 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Eat today
            <span className="mt-1 block font-normal text-muted-foreground">Live another day</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Order from 1000+ kitchens around you, track every step of the ride, and get your food
            hot at the door in under 30 minutes.
          </p>

          <form onSubmit={submit} className="mt-8 rounded-2xl bg-card p-3 shadow-float sm:p-4">
            <label className="flex items-center gap-3 rounded-xl border border-border px-4 py-3">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <input
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Enter your delivery address"
                aria-label="Delivery address"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none"
              />
            </label>

            <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <Button
                type="submit"
                onClick={() => setMode("delivery")}
                className={cn(
                  "h-11 rounded-xl text-sm font-semibold",
                  mode === "pickup" && "bg-muted text-muted-foreground hover:bg-muted",
                )}
              >
                DELIVERY
              </Button>
              <span className="text-xs font-medium text-muted-foreground">or</span>
              <Button
                type="submit"
                variant="outline"
                onClick={() => setMode("pickup")}
                className={cn(
                  "h-11 rounded-xl border-primary/40 text-sm font-semibold text-primary hover:bg-accent",
                  mode === "pickup" && "bg-primary text-primary-foreground hover:bg-primary",
                )}
              >
                PICK UP
              </Button>
            </div>
          </form>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="orbit-ring absolute inset-6 hidden sm:block" />
          <div className="orbit-ring absolute inset-16 hidden sm:block" />
          <img
            src={heroPlate}
            alt="Roasted chicken served over herbed pasta"
            width={1024}
            height={1024}
            className="relative mx-auto w-[78%] drop-shadow-2xl"
          />
          <img
            src={heroSalad}
            alt="Grilled chicken salad bowl"
            width={816}
            height={816}
            loading="lazy"
            className="animate-float absolute -right-2 top-10 w-28 drop-shadow-xl sm:w-40"
          />
          <div className="animate-float-delayed absolute -left-2 bottom-2 flex w-56 items-center gap-3 rounded-2xl bg-card p-3 shadow-float sm:bottom-6">
            <img
              src={heroNoodles}
              alt="Seafood noodles bowl"
              width={944}
              height={704}
              loading="lazy"
              className="h-12 w-12 shrink-0 rounded-xl object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Seafood Noodles</p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <Star className="h-3 w-3 fill-gold text-gold" /> 4.8 · 25 min
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
