"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    dogName: "",
    product: "",
    message: "",
  });

  // When you add real products, update this list to match your inventory
  const products = [
    "Not sure yet — I have questions",
    "Custom Fitted Romper",
    "Premade Romper",
    "Altered Premade Romper",
  ];
  

  // Update the matching field when the user types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Build a mailto link with the form data and open the user's email client
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Order Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nDog's Name: ${form.dogName}\nProduct Interest: ${form.product || "Not specified"}\n\nMessage:\n${form.message}`
    );

    window.open(`mailto:cascadecanineco@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center justify-center text-center h-full">
        <h3 className="text-2xl font-bold text-white mb-3">Thank you!</h3>
        <p className="text-stone-300">
          Your email client should have opened with your message ready to send.
          We'll get back to you within 24–48 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-amber-300 hover:text-amber-200 underline transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-5"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

      <div>
        <label className="block text-stone-300 text-sm mb-1">Your Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Jane Smith"
          className="w-full bg-white/10 text-white placeholder-stone-400 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
        />
      </div>

      <div>
        <label className="block text-stone-300 text-sm mb-1">Your Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="jane@email.com"
          className="w-full bg-white/10 text-white placeholder-stone-400 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
        />
      </div>

      <div>
        <label className="block text-stone-300 text-sm mb-1">Dog's Name <span className="text-stone-500">(optional)</span></label>
        <input
          type="text"
          name="dogName"
          value={form.dogName}
          onChange={handleChange}
          placeholder="Buddy"
          className="w-full bg-white/10 text-white placeholder-stone-400 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
        />
      </div>

      <div>
        <label className="block text-stone-300 text-sm mb-1">
          Product Interest <span className="text-stone-500">(optional)</span>
        </label>
        <select
          name="product"
          value={form.product}
          onChange={handleChange}
          className="w-full bg-stone-800 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
        >
          <option value="">Select a product...</option>
          {products.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-stone-300 text-sm mb-1">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us which product you're interested in, your dog's size or measurements, and any questions you have..."
          className="w-full bg-white/10 text-white placeholder-stone-400 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}