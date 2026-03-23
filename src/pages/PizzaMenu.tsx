import { motion } from "motion/react";
import PizzaCard from "../components/PizzaCard";

const pizzas = [
  {
    title: "Cheese Avalanche",
    ingredients: "Mozzarella, cheddar, Parmesan, gouda, ricotta, marinara sauce, oregano",
    price: "$14.99",
    image: "https://framerusercontent.com/images/Q4djsExkm2dVJLND8pnRkbmHKy8.png"
  },
  {
    title: "Buffalo Bliss",
    ingredients: "Buffalo chicken, blue cheese crumbles, mozzarella, ranch dressing, red onions",
    price: "$15.99",
    image: "https://framerusercontent.com/images/fOcW4cqVIKe7O6jovEeqZ46Cg.png"
  },
  {
    title: "Mediterranean Marvel",
    ingredients: "Feta cheese, Kalamata olives, red onions, sun-dried tomatoes, spinach, mozzarella, olive oil, oregano",
    price: "$15.99",
    image: "https://framerusercontent.com/images/vtNegrYfppnZJV5SpQd607Hls8.png"
  },
  {
    title: "Firecracker Inferno",
    ingredients: "Spicy pepperoni, jalapeños, chili flakes, mozzarella, spicy marinara",
    price: "$16.99",
    image: "https://framerusercontent.com/images/BtR1dcXEs8W8m1OBMyVYOONemg.png"
  },
  {
    title: "Truffle Temptation",
    ingredients: "Truffle oil, mushrooms, mozzarella, parmesan, fresh parsley",
    price: "$18.99",
    image: "https://framerusercontent.com/images/EvzWDEqJkdunx7f5YzmUVnArM4.png"
  },
  {
    title: "Garlic Supreme",
    ingredients: "Roasted garlic, mozzarella, white sauce, fresh basil",
    price: "$14.99",
    image: "https://framerusercontent.com/images/Q2rEr3IGpX893CKsEuhm5IGMKk.png"
  }
];

export default function PizzaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-32 pb-24 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-6xl font-black text-zinc-900 mb-4">Pizza Menu</h1>
          <p className="text-xl text-zinc-500">Authentic flavors, fresh ingredients, baked to perfection.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza, i) => (
            <PizzaCard
              key={i}
              title={pizza.title}
              ingredients={pizza.ingredients}
              price={pizza.price}
              image={pizza.image}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
