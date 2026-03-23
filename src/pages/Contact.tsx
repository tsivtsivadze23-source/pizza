import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h1 className="font-display text-6xl font-black text-zinc-900 mb-6">Get in Touch</h1>
              <p className="text-xl text-zinc-500">Have a question or feedback? We'd love to hear from you. Reach out to us anytime.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 rounded-3xl bg-zinc-50 border border-zinc-100">
                <div className="p-4 bg-brand/10 rounded-2xl text-brand">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Visit Us</h3>
                  <p className="text-zinc-500">123 Pizza St. Manhattan, New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-3xl bg-zinc-50 border border-zinc-100">
                <div className="p-4 bg-brand/10 rounded-2xl text-brand">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Email Us</h3>
                  <p className="text-zinc-500">contact@pepper.pizza</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-3xl bg-zinc-50 border border-zinc-100">
                <div className="p-4 bg-brand/10 rounded-2xl text-brand">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Call Us</h3>
                  <p className="text-zinc-500">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-zinc-200 border border-zinc-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 ml-4">First Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-full bg-zinc-50 border-none focus:ring-2 focus:ring-brand outline-none" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 ml-4">Last Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-full bg-zinc-50 border-none focus:ring-2 focus:ring-brand outline-none" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 ml-4">Email Address</label>
                <input type="email" className="w-full px-6 py-4 rounded-full bg-zinc-50 border-none focus:ring-2 focus:ring-brand outline-none" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 ml-4">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-[2rem] bg-zinc-50 border-none focus:ring-2 focus:ring-brand outline-none resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-brand text-white py-5 rounded-full font-bold text-lg hover:bg-brand/90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand/20">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
