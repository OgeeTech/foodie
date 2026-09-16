import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const columns = [
  {
    title: "Support",
    links: ["Account", "Support Center", "Feedback", "Accessibility"],
  },
  {
    title: "Our Menu",
    links: ["Special", "Popular", "Categories"],
  },
  {
    title: "Useful Links",
    links: ["Payment & Tax", "Terms of Service", "Privacy Policy", "About Us"],
  },
];

const socials = [Facebook, Twitter, Instagram, Linkedin];

export function Footer() {
  return (
    <footer className="bg-surface pt-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-10 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-extrabold text-primary">Foodie</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Food from the kitchens you love, delivered hot across the city, seven days a
            week.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((Icon, index) => (
              <a
                key={index}
                href="#top"
                aria-label="Foodie social profile"
                className="grid h-9 w-9 place-items-center rounded-lg bg-card text-muted-foreground shadow-card transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold">{column.title}</h3>
            <ul className="mt-4 grid gap-2.5">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#top"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold">Get in touch</h3>
          <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
            <li>hello@foodie.example</li>
            <li>+880 1777 180686</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs text-muted-foreground lg:px-8">
          © {new Date().getFullYear()} Foodie. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
