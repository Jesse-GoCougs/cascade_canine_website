import Image from "next/image";
import { ProductList } from "@/components/product-list";
import { stripe } from "@/lib/stripe";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <main className="min-h-screen">

      {/* Background image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://res.cloudinary.com/ddkhgitza/image/upload/IMG_9631.jpg"
          alt="Products page background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="pb-8">
        <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
          All Products
        </h1>
        <ProductList products={products.data} />
      </div>

    </main>
  );
}