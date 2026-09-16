import { BadgePercent, Bike, UtensilsCrossed } from "lucide-react";

const items = [
  {
    icon: Bike,
    title: "Fastest Delivery",
    body: "Live rider tracking and a 30 minute promise on every order inside the city.",
  },
  {
    icon: UtensilsCrossed,
    title: "So Much To Choose From",
    body: "Over a thousand kitchens, from street food corners to fine dining tables.",
  },
  {
    icon: BadgePercent,
    title: "Best Offers In Town",
    body: "Daily deals, free delivery days and cashback straight into your Foodie wallet.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="grid gap-5 md:grid-cols-3">
        {items.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
