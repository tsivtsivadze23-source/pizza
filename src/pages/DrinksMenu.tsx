import { motion } from "motion/react";
import PizzaCard from "../components/PizzaCard";

const drinks = [
  {
    title: "San Pellegrino",
    ingredients: "Classic Italian sparkling mineral water, crisp and refreshing.",
    price: "$3.99",
    image: "https://framerusercontent.com/images/Q7KgJ2XELpQBKayk5G3roq3OtHY.svg" // Placeholder or specific drink image if available
  },
  {
    title: "Perrier",
    ingredients: "Natural sparkling mineral water from France.",
    price: "$3.99",
    image: "https://framerusercontent.com/images/Q7KgJ2XELpQBKayk5G3roq3OtHY.svg"
  },
  {
    title: "Limonata",
    ingredients: "Sparkling lemon beverage with real fruit juice.",
    price: "$4.49",
    image: "https://framerusercontent.com/images/Q7KgJ2XELpQBKayk5G3roq3OtHY.svg"
  },
  {
    title: "Aranciata",
    ingredients: "Sparkling orange beverage with real fruit juice.",
    price: "$4.49",
    image: "https://framerusercontent.com/images/Q7KgJ2XELpQBKayk5G3roq3OtHY.svg"
  }
];

export default function DrinksMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-32 pb-24 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-6xl font-black text-zinc-900 mb-4">Drinks</h1>
          <p className="text-xl text-zinc-500">Refreshing sparkling waters and beverages.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {drinks.map((drink, i) => (
            <PizzaCard
              key={i}
              title={drink.title}
              ingredients={drink.ingredients}
              price={drink.price}
              image={drink.image}
              color="bg-zinc-50"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
