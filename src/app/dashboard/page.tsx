"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

function Dashboard() {
  const [products, setProducts] = useState<
    {
      id: number;
      title: string;
      description: string;
      price: number;
      category: string;
      stock: number;
      brand: string;
      rating: number;
    }[]
  >([]);
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    brand: string;
    rating: number;
  } | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col items-center"
      style={{ background: 'url("/img/productos.jpg")' }}
    >
      <Navbar />

      <main className="bg-white shadow-md rounded-md p-6 w-full max-w-3xl mt-6">
        <select
          className="w-full p-2 border rounded-md mb-4"
          onChange={(e) => {
            const productId = parseInt(e.target.value);
            setSelectedProduct(
              products.find((product) => product.id === productId) || null
            );
          }}
        >
          <option value="">Seleccione un producto</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.title}
            </option>
          ))}
        </select>

        <div className="border rounded-md p-4 bg-gray-50">
          {selectedProduct ? (
            <div>
              <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
              <p>
                <strong>Descripción:</strong> {selectedProduct.description}
              </p>
              <p>
                <strong>Precio:</strong> ${selectedProduct.price.toFixed(2)}
              </p>
              <p>
                <strong>Categoría:</strong> {selectedProduct.category}
              </p>
              <p>
                <strong>Stock:</strong> {selectedProduct.stock}
              </p>
              <p>
                <strong>Marca:</strong> {selectedProduct.brand}
              </p>
              <p>
                <strong>Rating:</strong> {selectedProduct.rating}
              </p>
            </div>
          ) : (
            <p>Seleccione un producto para ver sus detalles.</p>
          )}
        </div>
        <div className="text-center text-gray-700 mt-6">
          Sebastián Yepes Marta - 20212020015
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
