interface Address {
  street: string;
  city: string;
  district: string;
  province: string;
  postal_code: string;
  country: string;
}

interface OrderItem {
  product_id: string;
  product_name: string;
  quantity: number;
  price: number;
}

interface Order {
  order_id: string;
  order_date: string;
  status: string;
  items: OrderItem[];
  total_amount: number;
  shipping_address: Address;
  shipping_cost: number;
  delivery_time: string;
}

interface WishlistItem {
  product_id: string;
  product_name: string;
  price: number;
}

interface Notification {
  notification_id: string;
  message: string;
  date: string;
}

export interface UserProfileProps {
  user: {
    _id: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    address: Address;
    date_of_birth: string;
    gender: string;
    created_at: string;
    updated_at: string;
    order_history: Order[];
    wishlist: WishlistItem[];
    notifications: Notification[];
  };
}
