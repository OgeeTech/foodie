import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/foodie/navbar";
import { Hero } from "@/components/foodie/hero";
import { Features } from "@/components/foodie/features";
import { Stats } from "@/components/foodie/stats";
import { Restaurants } from "@/components/foodie/restaurants";
import { Promo } from "@/components/foodie/promo";
import { Faq } from "@/components/foodie/faq";
import { AppCta } from "@/components/foodie/app-cta";
import { Newsletter } from "@/components/foodie/newsletter";
import { Footer } from "@/components/foodie/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Foodie — Food delivery from 1000+ kitchens near you" },
      {
        name: "description",
        content:
          "Order from over 1000 restaurants with Foodie. Live rider tracking, 30 minute delivery and daily offers on your favourite meals.",
      },
      { property: "og:title", content: "Foodie — Food delivery in 30 minutes" },
      {
        property: "og:description",
        content:
          "Browse popular restaurants, grab daily discounts and track your order live with Foodie.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const [bag, setBag] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar query={query} onQueryChange={setQuery} bagCount={bag} />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Restaurants
          query={query}
          onQueryChange={setQuery}
          onAdd={() => setBag((value) => value + 1)}
        />
        <Promo onAdd={(_name, qty) => setBag((value) => value + qty)} />
        <Faq />
        <AppCta />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
