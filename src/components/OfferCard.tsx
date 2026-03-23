import { motion } from "motion/react";

interface OfferCardProps {
  title: string;
  items: string[];
  price: string;
  savings: string;
  images: string[];
  color: string;
  textColor?: string;
}

export default function OfferCard({ title, items, price, savings, images, color, textColor = "text-white" }: OfferCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`${color} rounded-3xl p-8 relative overflow-hidden flex flex-col h-full min-h-[400px]`}
    >
      <div className="relative z-10">
        <h3 className={`font-display text-3xl font-black ${textColor} mb-4`}>{title}</h3>
        <ul className="space-y-2 mb-8">
          {items.map((item, i) => (
            <li key={i} className={`flex items-center gap-2 ${textColor} opacity-90 font-medium`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto relative z-10 flex items-end justify-between">
        <div>
          <button className="bg-white text-zinc-900 px-8 py-3 rounded-full font-bold hover:bg-zinc-100 transition-colors shadow-xl">
            Order Now
          </button>
        </div>
        <div className="text-right">
          <div className={`text-3xl font-black ${textColor}`}>{price}</div>
          <div className={`text-sm font-light ${textColor} opacity-80`}>- Save {savings}</div>
        </div>
      </div>

      {/* Decorative Pizzas */}
      <div className="absolute -bottom-12 -right-12 w-64 h-64 opacity-40 pointer-events-none">
        <img src={images[0]} className="w-full h-full object-contain rotate-12" alt="" referrerPolicy="no-referrer" />
      </div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 opacity-20 pointer-events-none">
        <img src={images[1]} className="w-full h-full object-contain -rotate-12" alt="" referrerPolicy="no-referrer" />
      </div>
    </motion.div>
  );
}
