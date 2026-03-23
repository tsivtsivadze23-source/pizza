import { motion } from "motion/react";
import PizzaMenu from "./PizzaMenu";
import DessertsMenu from "./DessertsMenu";
import DrinksMenu from "./DrinksMenu";

export default function FullMenu() {
  return (
    <div className="bg-white">
      <PizzaMenu />
      <div className="h-px bg-zinc-100 max-w-7xl mx-auto" />
      <DessertsMenu />
      <div className="h-px bg-zinc-100 max-w-7xl mx-auto" />
      <DrinksMenu />
    </div>
  );
}
