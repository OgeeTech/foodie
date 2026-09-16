import { useMemo, useState } from "react";
import { Search, Star } from "lucide-react";
import { toast } from "sonner";
import { restaurants } from "./data";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 6;

type Props = {
  query: string;
  onQueryChange: (value: string) => void;
  onAdd: (name: string) => void;
};

export function Restaurants({ query, onQueryChange, onAdd }: Props) {
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return restaurants;
    return restaurants.filter((item) =>
      [item.name, item.cuisine, ...item.tags].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages - 1);
  const visible = filtered.slice(current * PAGE_SIZE, current * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id="restaurants" className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
        <div className="min-w-0">
          <h2 id="popular" className="text-2xl font-bold sm:text-3xl">
            Popular restaurants near you
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {filtered.length} kitchens open right now
          </p>
        </div>
        <label className="col-span-2 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 sm:w-72">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => {
              onQueryChange(event.target.value);
              setPage(0);
            }}
            placeholder="Search food or restaurant"
            aria-label="Filter restaurants"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none"
          />
        </label>
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          No restaurants match “{query}”. Try another dish or cuisine.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  width={944}
                  height={704}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.discount && (
                  <span className="absolute left-0 top-4 rounded-r-md bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {item.discount}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold">{item.name}</h3>
                    <p className="truncate text-xs text-muted-foreground">
                      {item.cuisine}
                    </p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1 text-xs font-semibold">
                    <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                    {item.rating}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                  <p className="truncate text-sm font-semibold">{item.city}</p>
                  <button
                    onClick={() => {
                      onAdd(item.name);
                      toast.success(`${item.name} added to your bag`);
                    }}
                    className="shrink-0 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Order now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {pages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index)}
              aria-label={`Go to page ${index + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                index === current ? "w-7 bg-primary" : "w-2 bg-border",
              )}
            />
          ))}
        </div>
      )}
    </section>
  );
}
