import { motion } from "motion/react";
import PizzaCard from "../components/PizzaCard";
import OfferCard from "../components/OfferCard";
import TestimonialSlideshow from "../components/TestimonialSlideshow";

const floatingIngredients = [
  { src: "https://framerusercontent.com/images/kP2NqpJxzs3mxd89TNdxyZvyms.png", className: "top-20 left-[5%] w-32", delay: 0 },
  { src: "https://framerusercontent.com/images/WSIxf52atDWJJfphIQ7KE7eYvM.png", className: "bottom-20 right-[5%] w-40", delay: 0.2 },
  { src: "https://framerusercontent.com/images/Oh7T6jN4XYvDVriZHd3zwKwGrUs.png", className: "bottom-40 left-[15%] w-36", delay: 0.4 },
  { src: "https://framerusercontent.com/images/Okjb0nB1GOkYPwcntjxG2t9dOU.png", className: "top-1/2 left-[10%] w-24", delay: 0.6 },
  { src: "https://framerusercontent.com/images/w4TnZiWCs3LkQhqdYmp5AucEXFA.png", className: "top-10 right-[20%] w-28", delay: 0.8 },
  { src: "https://framerusercontent.com/images/4PC0Gy5LJt9gx1LT596KEeOxVk0.png", className: "top-5 left-[20%] w-24", delay: 1 },
  { src: "https://framerusercontent.com/images/NeeY359LTfhcwSN6JhuBh0Y8Bac.png", className: "top-1/2 right-[10%] w-32", delay: 1.2 },
  { src: "https://framerusercontent.com/images/PhZZgLMJNd9CBnmdNFn6oZ4geIo.png", className: "top-24 right-[5%] w-36", delay: 1.4 },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden px-4">
        {floatingIngredients.map((ing, i) => (
          <motion.img
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              y: [0, -20, 0], 
              scale: 1,
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: ing.delay },
              scale: { duration: 0.8, delay: ing.delay },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: ing.delay },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: ing.delay }
            }}
            src={ing.src}
            className={`absolute pointer-events-none opacity-20 md:opacity-100 ${ing.className}`}
            alt=""
            referrerPolicy="no-referrer"
          />
        ))}

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl font-black text-zinc-900 mb-8 leading-[0.9] tracking-tight"
          >
            Your Pizza Party <br />
            <span className="text-brand">Starts Here!</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto"
          >
            Gather your friends and family and enjoy the best pizza in town. Freshly made and delivered hot!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a href="/menu/full-menu" className="inline-block bg-brand text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-brand/90 transition-all hover:scale-105 shadow-2xl shadow-brand/30">
              View Our Menu
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100, rotate: -45 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.6, type: "spring" }}
          className="relative mt-20 md:mt-32 w-full max-w-5xl mx-auto px-4"
        >
          <img
            src="https://framerusercontent.com/images/TselH8OEkb2YNE35eIM1vVAfb6s.png"
            alt="Main Pizza"
            className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Popular Pizzas */}
      <section id="menu" className="py-24 bg-brand-light px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-black text-zinc-900 mb-4">Fan Favorites</h2>
            <p className="text-zinc-600 max-w-xl mx-auto mb-8">From classic combinations to bold flavors, these pizzas top our list for a reason.</p>
            <div className="flex items-center justify-center gap-3">
              <input type="checkbox" id="popular-toggle" className="w-5 h-5 accent-brand rounded" defaultChecked />
              <label htmlFor="popular-toggle" className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Popular</label>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PizzaCard
              title="Cheese Avalanche"
              ingredients="Mozzarella, cheddar, Parmesan, gouda, ricotta, marinara sauce, oregano"
              price="$14.99"
              image="https://framerusercontent.com/images/Q4djsExkm2dVJLND8pnRkbmHKy8.png"
            />
            <PizzaCard
              title="Buffalo Bliss"
              ingredients="Buffalo chicken, blue cheese crumbles, mozzarella, ranch dressing, red onions"
              price="$15.99"
              image="https://framerusercontent.com/images/fOcW4cqVIKe7O6jovEeqZ46Cg.png"
            />
            <PizzaCard
              title="Mediterranean Marvel"
              ingredients="Feta cheese, Kalamata olives, red onions, sun-dried tomatoes, spinach, mozzarella, olive oil, oregano"
              price="$15.99"
              image="https://framerusercontent.com/images/vtNegrYfppnZJV5SpQd607Hls8.png"
            />
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-black text-zinc-900 mb-4 text-balance">Hot Pizza, Hotter Deals</h2>
            <p className="text-zinc-600 max-w-xl mx-auto">From family-sized deals to solo slices, find the perfect offer for your pizza cravings.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <OfferCard
              title="Spicy Duo Deal"
              items={["1 Medium Firecracker Inferno", "1 Medium Buffalo Bliss"]}
              price="$21.99"
              savings="$4"
              color="bg-brand"
              images={[
                "https://framerusercontent.com/images/BtR1dcXEs8W8m1OBMyVYOONemg.png",
                "https://framerusercontent.com/images/fOcW4cqVIKe7O6jovEeqZ46Cg.png"
              ]}
            />
            <OfferCard
              title="Cheese Lovers Pair"
              items={["1 Medium Cheese Avalanche", "1 Medium Truffle Temptation"]}
              price="$22.99"
              savings="$5"
              color="bg-brand-yellow"
              textColor="text-zinc-900"
              images={[
                "https://framerusercontent.com/images/Q4djsExkm2dVJLND8pnRkbmHKy8.png",
                "https://framerusercontent.com/images/EvzWDEqJkdunx7f5YzmUVnArM4.png"
              ]}
            />
            <OfferCard
              title="Veggie Delight Duo"
              items={["1 Medium Mediterranean Marvel", "1 Medium Garlic Supreme"]}
              price="$21.99"
              savings="$4"
              color="bg-brand-green"
              images={[
                "https://framerusercontent.com/images/vtNegrYfppnZJV5SpQd607Hls8.png",
                "https://framerusercontent.com/images/Q2rEr3IGpX893CKsEuhm5IGMKk.png"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-black text-zinc-900 mb-4">Pizza Perfection, Expertly Rated</h2>
            <p className="text-zinc-600 max-w-xl mx-auto">Top foodies and chefs share their thoughts on why our pizzas stand out from the crowd.</p>
          </div>
          <TestimonialSlideshow />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div className="relative h-[400px]">
            <motion.img
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              src="https://framerusercontent.com/images/TselH8OEkb2YNE35eIM1vVAfb6s.png"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
              alt=""
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <h2 className="font-display text-5xl font-black text-zinc-900 leading-tight">Delicious Deals, Just for You</h2>
            <p className="text-xl text-zinc-600">Sign up for our newsletter and receive exclusive offers on new pizzas!</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="youremail@email.com"
                className="flex-grow px-8 py-4 rounded-full bg-zinc-100 border-none focus:ring-2 focus:ring-brand outline-none text-lg"
                required
              />
              <button className="bg-brand text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand/90 transition-all shadow-xl shadow-brand/20">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-black text-zinc-900 mb-4">Our Locations</h2>
            <p className="text-zinc-600 max-w-xl mx-auto">Visit us in any of our global pizza spots.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "New York", image: "https://framerusercontent.com/images/BnAT4P7n1oSmxE65vwU6fOQThfE.png", color: "bg-brand/50" },
              { name: "London", image: "https://framerusercontent.com/images/UzisP2M2Vuyv2kbTHeytJuts6Y.png", color: "bg-brand-yellow/50" },
              { name: "Amsterdam", image: "https://framerusercontent.com/images/Q694D2vHnG6nwl4QxNJsU5YrQBM.png", color: "bg-brand-green/50" },
              { name: "Berlin", image: "https://framerusercontent.com/images/I3stRxu1PzybEmpFdYfiffYx0.png", color: "bg-zinc-800/50" },
              { name: "Bucharest", image: "https://framerusercontent.com/images/mJkaydBoAz7wuW9AAzPckH7tC1A.png", color: "bg-brand-orange/50" },
            ].map((loc, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer"
              >
                <img src={loc.image} className="w-full h-full object-cover" alt={loc.name} referrerPolicy="no-referrer" />
                <div className={`absolute inset-0 ${loc.color} transition-opacity group-hover:opacity-70`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-display text-2xl font-black drop-shadow-lg">{loc.name}</h3>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Map
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-24 bg-zinc-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-black text-zinc-900 mb-4">Find Your Nearest Pizza Spot</h2>
            <p className="text-zinc-600 max-w-xl mx-auto">Locate our stores, check delivery zones, and pick the best option for you!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
              <h4 className="font-display text-2xl font-black mb-4">Delivery Zones</h4>
              <p className="text-zinc-500">We deliver to most areas in Manhattan, Brooklyn, and Queens. Check our interactive map for specific boundaries.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
              <h4 className="font-display text-2xl font-black mb-4">Delivery Methods</h4>
              <p className="text-zinc-500">Choose between standard delivery, express delivery, or contactless drop-off at your doorstep.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
              <h4 className="font-display text-2xl font-black mb-4">Pickup Info</h4>
              <p className="text-zinc-500">Order online and pick up your hot pizza in as little as 15 minutes from any of our locations.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
