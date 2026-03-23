import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "The balance of flavors in their Truffle Temptation pizza is simply divine. It’s a perfect example of how simplicity, when done right, can create an unforgettable culinary experience.",
    author: "Chef Marco Di Luca",
    role: "Executive Chef, Trattoria La Bella (New York)",
    image: "https://framerusercontent.com/images/pebU74xcJF0VEsgm3JfH7G6NYAQ.png"
  },
  {
    quote: "With fresh ingredients and bold flavors, this pizzeria redefines what fast-casual pizza can be. Their BBQ Blaze is a must-try for anyone who loves the perfect mix of sweet and smoky.",
    author: "Emma Gallagher",
    role: "Senior Food Writer, London Eats Magazine",
    image: "https://framerusercontent.com/images/cJlMf5sDtI0CbOfCJQMyUerrZWc.png"
  },
  {
    quote: "Their Mediterranean Marvel pizza took me straight to the coast of Greece. It’s clear they’re passionate about quality and authenticity, with every bite delivering a burst of vibrant, fresh ingredients.",
    author: "Lucas van den Berg",
    role: "Restaurant Critic, The Amsterdam Culinary Journal",
    image: "https://framerusercontent.com/images/th2iELXOzEME2cqduvrTZtJsM.png"
  }
];

export default function TestimonialSlideshow() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto bg-zinc-900 rounded-[2rem] overflow-hidden shadow-2xl">
      <div className="grid md:grid-cols-2 min-h-[500px]">
        <div className="relative h-full min-h-[300px] md:min-h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              src={testimonials[index].image}
              alt={testimonials[index].author}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center relative">
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-white font-light italic leading-relaxed">
                "{testimonials[index].quote}"
              </p>
              <div>
                <h4 className="text-brand text-xl font-bold">{testimonials[index].author}</h4>
                <p className="text-zinc-400 text-sm">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 mt-12">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
