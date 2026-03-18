"use client";

import Stripe from "stripe";
import { ProductCard } from "./product-card";
import { useState, useMemo } from "react";

interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(term);
      const descriptionMatch = product.description?.toLowerCase().includes(term) ?? false;
      return nameMatch || descriptionMatch;
    });
  }, [searchTerm, products]);

  return (
    /* We use 'relative' here so the 'absolute' overlay stays contained within this div */
    <div className="relative min-h-screen p-8">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/65 -z-10" />

      <div className="relative z-10">
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full max-w-md rounded border border-gray-300 bg-white/10 px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {filteredProducts.length > 0 ? (
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-300 mt-10">No products found.</p>
        )}
      </div>
    </div>
  );
};