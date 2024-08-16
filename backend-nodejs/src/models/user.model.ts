// Define the structure of the address field
interface Address {
    street: string;
    city: string;
    district: string;
    province: string;
    postal_code: string;
    country: string;
  }
  
  // Define the structure of the order item
  interface OrderItem {
    product_id: string;
    product_name: string;
    quantity: number;
    price: number;
  }
  
  // Define the structure of an order
  interface Order {
    order_id: string;
    order_date: string; // ISO 8601 date format
    status: string;
    items: OrderItem[];
    total_amount: number;
    shipping_address: Address;
    shipping_cost: number;
    delivery_time: string;
  }
  
  // Define the structure of a notification
  interface Notification {
    notification_id: string;
    message: string;
    date: string; // ISO 8601 date format
  }
  
  // Define the structure of the user model
  export default interface User {
    _id: string;            // MongoDB ObjectId as a string
    username: string;
    email: string;
    password_hash: string; // Store hashed passwords securely
    first_name: string;
    last_name: string;
    phone_number: string;
    address: Address;
    date_of_birth: string; // ISO 8601 date format
    gender: string;
    created_at: string;    // ISO 8601 date format
    updated_at: string;    // ISO 8601 date format
    order_history: Order[];
    wishlist: {
      product_id: string;
      product_name: string;
      price: number;
    }[];
    notifications: Notification[];
  }
  