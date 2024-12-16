"use client";

import React, { useState, useEffect } from 'react';
import '../Style/shop.css';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage: number = 8;

  useEffect(() => {
    const generatedProducts: Product[] = Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: parseFloat((Math.random() * 100 + 50).toFixed(2)),
      image: `images/product${(i % 15) + 1}.png`,
    }));
    setProducts(generatedProducts);
  }, []);

  const startIndex: number = (currentPage - 1) * productsPerPage;
  const displayedProducts: Product[] = products.slice(startIndex, startIndex + productsPerPage);

  const totalPages: number = Math.ceil(products.length / productsPerPage);

  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop Products</h1>

      <div className="product-grid">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}