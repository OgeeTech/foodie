import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Menu", href: "#popular" },
  { label: "For Riders", href: "#features" },
  { label: "About", href: "#promo" },
  { label: "Reviews", href: "#faq" },
  { label: "Restaurants", href: "#restaurants" },
];

type NavbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  bagCount: number;
};

export function Navbar({ query, onQueryChange, bagCount }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-card" : "bg-transparent",
      )}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#top" className="font-display text-2xl font-extrabold text-primary">
          Foodie
        </a>

        <ul className="hidden min-w-0 items-center gap-7 justify-self-start pl-8 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 justify-self-end">
          <label className="hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 md:flex">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search restaurants"
              aria-label="Search restaurants"
              className="w-40 bg-transparent text-sm outline-none placeholder:text-muted-foreground lg:w-52"
            />
          </label>
          <Button size="icon" className="relative rounded-xl shadow-glow" aria-label="Open bag">
            <ShoppingBag className="h-4 w-4" />
            {bagCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-ink px-1 text-[11px] font-semibold text-background">
                {bagCount}
              </span>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <Menu className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-5 lg:hidden">
          <div className="flex items-center justify-between py-3">
            <span className="text-sm font-semibold">Browse</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
          <ul className="grid gap-1">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <label className="mt-3 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 md:hidden">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search restaurants"
              aria-label="Search restaurants"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none"
            />
          </label>
        </div>
      )}
    </header>
  );
}
