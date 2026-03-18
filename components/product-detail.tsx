"use client";

import Stripe from "stripe";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/65 -z-10" />

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center relative z-10">
        
        {/* Product Image */}
        {product.images && product.images[0] && (
          <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden border border-white/10">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* Product Info */}
        <div className="md:w-1/2 text-white">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          {product.description && (
            <p className="text-gray-300 mb-4">{product.description}</p>
          )}

          {/* Original Price Formatting */}
          {price && price.unit_amount && (
            <p className="text-lg font-semibold mb-6">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}

          {/* Contact Button */}
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
              Contact Us for Inquiry
            </Button>
          </Link>

          <p className="mt-4 text-sm text-gray-400 italic">
            * Reach out to our team for custom quotes and availability.
          </p>
        </div>
      </div>
    </div>
  );
};