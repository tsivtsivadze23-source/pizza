import React from "react";
import { motion } from "motion/react";

interface PizzaCardProps {
  key?: React.Key;
  title: string;
  ingredients: string;
  price: string;
  image: string;
  color?: string;
}

export default function PizzaCard({ title, ingredients, price, image, color = "bg-white" }: PizzaCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`${color} rounded-3xl p-6 shadow-sm border border-zinc-100 flex flex-col items-center text-center group`}
    >
      <div className="relative w-full aspect-square mb-6">
        <motion.img
          whileHover={{ rotate: 15, scale: 1.1 }}
          src={image}
          alt={title}
          className="w-full h-full object-contain drop-shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>
      <h3 className="font-display text-2xl font-extrabold text-zinc-900 mb-2">{title}</h3>
      <p className="text-zinc-500 text-sm mb-6 flex-grow">{ingredients}</p>
      <div className="w-full flex items-center justify-between mt-auto pt-4 border-t border-zinc-100/50">
        <div className="text-left">
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 block">from</span>
          <span className="text-xl font-bold text-zinc-900">{price}</span>
        </div>
        <button className="bg-brand text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-brand/90 transition-colors shadow-lg shadow-brand/20">
          Order Now
        </button>
      </div>
    </motion.div>
  );
}
