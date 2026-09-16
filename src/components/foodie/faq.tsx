import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./data";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="mt-8 grid gap-3">
        {faqs.map((item, index) => (
          <AccordionItem
            key={item.q}
            value={`item-${index}`}
            className="rounded-xl border border-border bg-card px-4 shadow-card"
          >
            <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
