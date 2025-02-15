// services/api.tsx
import type { Product } from "./api.model";

const products: Product[] = [
  // Sample product data - Replace with your actual data fetching logic
  {
    id: 1,
    title: "Product 1",
    price: 29.99,
    description: "Description of Product 1",
    category: { id: 1, name: "Clothes", image: "" },
    images: ["/image1.jpg", "/image2.jpg"],
  },
  {
    id: 2,
    title: "Product 2",
    price: 49.99,
    description: "Description of Product 2",
    category: { id: 2, name: "Shoes", image: "" },
    images: ["/image3.jpg"],
  },
  // Add more products here...
];

export async function getProducts(): Promise<Product[]> {
  // Replace this with your actual API call to fetch products
  return products;
}

export async function getProductById(id: number): Promise<Product | undefined> {
  // Replace this with your actual API call to fetch a single product by ID
  return products.find((product) => product.id === id);
}
