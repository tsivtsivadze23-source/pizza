import { motion } from "motion/react";
import PizzaCard from "../components/PizzaCard";

const desserts = [
  {
    title: "Nutella Pizza",
    ingredients: "Pizza dough, Nutella spread, powdered sugar, strawberries (optional), whipped cream",
    price: "$7.99",
    image: "https://framerusercontent.com/images/pRzalLce4KvcQSggYuXBvUC174.png"
  },
  {
    title: "Classic Cannoli",
    ingredients: "Cannoli shells, ricotta cheese, powdered sugar, chocolate chips, vanilla extract",
    price: "$5.99",
    image: "https://framerusercontent.com/images/Ru7hW8Qi1bQ8fHES0Gh6mmxA.png"
  },
  {
    title: "Tiramisu Temptation",
    ingredients: "Ladyfingers, mascarpone cheese, espresso, cocoa powder, sugar, heavy cream",
    price: "$7.49",
    image: "https://framerusercontent.com/images/h1Hhi9tTURbTtNpS1UYhUefZ2o.png"
  }
];

export default function DessertsMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-32 pb-24 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-6xl font-black text-zinc-900 mb-4">Desserts</h1>
          <p className="text-xl text-zinc-500">Sweet endings to your perfect pizza meal.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {desserts.map((dessert, i) => (
            <PizzaCard
              key={i}
              title={dessert.title}
              ingredients={dessert.ingredients}
              price={dessert.price}
              image={dessert.image}
              color="bg-brand-light"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
