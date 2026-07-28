"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl p-8 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
          <div className="flex items-center gap-3 mb-5">
            <Mail className="text-purple-500" />
            <span>anushka.shukla1708@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <Phone className="text-purple-500" />
            <span>+91 8851060347</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-purple-500" />
            <span>India</span>
          </div>
        </div>

        <form className="rounded-2xl p-8 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-xl space-y-5">
          <input
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500"
          />

          <input
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500"
          />

          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}