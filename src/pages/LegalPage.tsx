import { motion } from "motion/react";
import { useParams } from "react-router-dom";

const content: Record<string, { title: string; body: string }> = {
  "privacy-policy": {
    title: "Privacy Policy",
    body: "Your privacy is important to us. It is Pepper's policy to respect your privacy regarding any information we may collect from you across our website."
  },
  "cookie-policy": {
    title: "Cookie Policy",
    body: "We use cookies to help improve your experience of our website. This cookie policy is part of Pepper's privacy policy, and covers the use of cookies between your device and our site."
  },
  "terms-conditions": {
    title: "Terms & Conditions",
    body: "By accessing our website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws."
  },
  "refunds-cancellation": {
    title: "Refunds & Cancellation",
    body: "We want you to be completely satisfied with your order. If there's an issue with your pizza, please contact us immediately for a refund or replacement."
  }
};

export default function LegalPage() {
  const { slug } = useParams();
  const page = slug ? content[slug] : null;

  if (!page) return <div className="pt-32 text-center">Page not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-32 pb-24 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-5xl font-black text-zinc-900 mb-8">{page.title}</h1>
        <div className="prose prose-zinc lg:prose-xl">
          <p className="text-zinc-600 leading-relaxed">{page.body}</p>
          <p className="text-zinc-600 leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
