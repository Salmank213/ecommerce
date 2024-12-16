// pages/product/[id].tsx

import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Define your Product type
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  specifications: { key: string; value: string }[];
};

const products: Product[] = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: parseFloat((Math.random() * 100 + 50).toFixed(2)),
  image: `/images/product${(i % 8) + 1}.png`, // Example path
  description:
    `This is a detailed description of Product ${i + 1}, showcasing its features and benefits.`,
  features: [
    `Feature 1 for Product ${i + 1}`,
    `Feature 2 for Product ${i + 1}`,
    `Feature 3 for Product ${i + 1}`,
  ],
  specifications: [
    { key: 'Material', value: 'Premium Leather' },
    { key: 'Dimensions', value: '80 x 120 x 60 cm' },
    { key: 'Weight', value: '20kg' },
  ],
}));

export default function SingleProductPage() {
  const router = useRouter();
  const { id } = router.query; // This is the dynamic part of the URL (e.g., /product/1)

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const productId = Number(id);
      const foundProduct = products.find((p) => p.id === productId);
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleOrderPlacement = () => {
    alert('Order has been placed!');
    router.push('/shop');
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

      <Link href="/shop">Back to Shop</Link>
    </div>
  );
}
