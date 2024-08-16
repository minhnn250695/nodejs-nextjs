// Define the structure of the dimensions field
interface Dimensions {
  length: number;
  width: number;
  height: number;
}

// Define the structure of the discount field
interface Discount {
  percentage: number;
  start_date: string; // ISO 8601 date format
  end_date: string;   // ISO 8601 date format
}

// Define the structure of the shipping field
interface Shipping {
  free_shipping: boolean;
  shipping_cost: number; // Assuming cost is in the smallest currency unit (e.g., VND)
  delivery_time: string;
}

// Define the structure of the product model
export default interface Product {
  _id: string;            // MongoDB ObjectId as a string
  product_id: string;
  name: string;
  description: string;
  category: string;
  price: number;          // Price in the smallest currency unit (e.g., VND)
  currency: string;
  stock_quantity: number;
  seller_id: string;
  brand: string;
  weight: number;         // Weight in kilograms or other unit
  dimensions: Dimensions;
  images: string[];       // Array of image filenames
  rating: number;         // Rating on a scale (e.g., 1 to 5)
  reviews_count: number;
  date_added: string;     // ISO 8601 date format
  last_updated: string;   // ISO 8601 date format
  tags: string[];         // Array of tags
  status: string;         // e.g., 'active' or 'discontinued'
  discount?: Discount;    // Optional field
  shipping: Shipping;
}
