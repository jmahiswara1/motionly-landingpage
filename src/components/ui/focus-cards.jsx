"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-3xl relative bg-white border border-black/5 overflow-hidden min-h-64 h-full w-full transition-all duration-300 ease-out flex flex-col p-8 shadow-sm cursor-pointer",
      hovered !== null && hovered !== index && "blur-[2px] scale-[0.98] opacity-60",
      hovered === index && "shadow-xl border-black/10 -translate-y-1"
    )}>
    <div className={cn("absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 transition-opacity duration-300", hovered === index && "opacity-100")} />

    <div className="w-12 h-12 rounded-2xl bg-[#F8F9FA] border border-black/5 flex items-center justify-center text-2xl relative z-10">
      {card.icon}
    </div>

    <div className="relative z-10 mt-6">
      <h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">
        {card.title}
      </h3>
      <p className="text-[#888888] leading-relaxed">
        {card.description}
      </p>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered} />
      ))}
    </div>
  );
}
