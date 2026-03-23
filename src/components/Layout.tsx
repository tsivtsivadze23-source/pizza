import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Instagram, Youtube, Twitter, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer id="contact" className="bg-brand text-white pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <h3 className="font-accent text-4xl">Pepper</h3>
              <div className="space-y-4 opacity-90">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 mt-1" />
                  123 Pizza St. Manhattan, New York, NY 10001
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0" />
                  contact@pepper.pizza
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0" />
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-6 uppercase tracking-widest">Menu</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="hover:underline opacity-80 hover:opacity-100">Home</Link></li>
                <li><Link to="/menu/full-menu" className="hover:underline opacity-80 hover:opacity-100">Our Menu</Link></li>
                <li><Link to="/menu/pizza" className="hover:underline opacity-80 hover:opacity-100">Pizzas</Link></li>
                <li><Link to="/menu/deserts" className="hover:underline opacity-80 hover:opacity-100">Desserts</Link></li>
                <li><Link to="/menu/drinks" className="hover:underline opacity-80 hover:opacity-100">Drinks</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-6 uppercase tracking-widest">Useful</h4>
              <ul className="space-y-4">
                <li><Link to="/useful-pages/privacy-policy" className="hover:underline opacity-80 hover:opacity-100">Privacy Policy</Link></li>
                <li><Link to="/useful-pages/terms-conditions" className="hover:underline opacity-80 hover:opacity-100">Terms & Conditions</Link></li>
                <li><Link to="/useful-pages/refunds-cancellation" className="hover:underline opacity-80 hover:opacity-100">Refunds</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-6 uppercase tracking-widest">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 text-sm">
            <p>© 2026 Pepper Pizza. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
