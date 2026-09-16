import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import wedges from "@/assets/food-wedges.jpg";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("You're in! Your 50% welcome code is on its way.");
    setEmail("");
  };

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl">
        <img
          src={wedges}
          alt=""
          width={944}
          height={704}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-xl px-6 py-14 text-center">
          <h2 className="text-2xl font-extrabold text-background sm:text-3xl">
            Join our member and get discount up to 50%
          </h2>
          <form
            onSubmit={submit}
            className="mx-auto mt-7 grid max-w-md grid-cols-[minmax(0,1fr)_auto] overflow-hidden rounded-xl bg-card p-1"
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email here"
              aria-label="Email address"
              className="min-w-0 bg-transparent px-4 text-sm outline-none"
            />
            <Button type="submit" className="h-11 shrink-0 rounded-lg px-6 font-semibold">
              SIGN UP
            </Button>
          </form>
          <p className="mt-4 text-sm text-background/70">I'm here member</p>
        </div>
      </div>
    </section>
  );
}
