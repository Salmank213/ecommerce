"use client";

import { useRouter } from "next/router";
import "../Style/Single product 1.css";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  specifications: { key: string; value: string }[];
  features: string[];
};

const product: Product = {
  id: 1,
  name: "Product 1",
  price: 149.99,
  image: "/images/product1.png",
  description:
    "This is a high-quality product designed to meet your needs with exceptional durability and style.",
  specifications: [
    { key: "Material", value: "Premium Leather" },
    { key: "Dimensions", value: "80 x 120 x 60 cm" },
    { key: "Weight", value: "20kg" },
    { key: "Warranty", value: "2 Years" },
  ],
  features: [
    "Durable and long-lasting",
    "Elegant modern design",
    "Easy to maintain",
    "Affordable pricing",
  ],
};

export default function SingleProduct1() {
  const router = useRouter();

  const handleOrderPlacement = () => {
    alert("Order has been placed!");
    router.push("/shop");
  };

  return (
    <div className="product-details">
      <h1 className="product-title">{product.name}</h1>

      <img src={product.image} alt={product.name} className="product-image" />

      <p className="product-price">Price: ${product.price.toFixed(2)}</p>
      <p className="product-description">{product.description}</p>

      <h2>Specifications</h2>
      <ul className="product-specifications">
        {product.specifications.map((spec, index) => (
          <li key={index}>
            <strong>{spec.key}:</strong> {spec.value}
          </li>
        ))}
      </ul>

      <h2>Features</h2>
      <ul className="product-features">
        {product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button className="order-button" onClick={handleOrderPlacement}>
        Place Order
      </button>
    </div>
  );
}
