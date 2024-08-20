import "../../styles/Profile.module.scss";
import React from "react";
import UserProfile from "../../components/UserProfile";

const user = {
  _id: "64e5a4d5b67f233d8e3e1c56",
  username: "john_doe",
  email: "john.doe@example.com",
  first_name: "John",
  last_name: "Doe",
  phone_number: "+84123456789",
  address: {
    street: "123 Main St",
    city: "Hanoi",
    district: "Hoan Kiem",
    province: "Hanoi",
    postal_code: "100000",
    country: "Vietnam",
  },
  date_of_birth: "1985-04-12",
  gender: "male",
  created_at: "2024-01-15T08:00:00Z",
  updated_at: "2024-08-10T10:00:00Z",
  order_history: [
    {
      order_id: "ORD123456789",
      order_date: "2024-08-01T10:00:00Z",
      status: "shipped",
      items: [
        {
          product_id: "P001",
          product_name: "Wireless Bluetooth Headphones",
          quantity: 1,
          price: 799000,
        },
        {
          product_id: "P002",
          product_name: "Smartwatch",
          quantity: 1,
          price: 1599000,
        },
      ],
      total_amount: 2398000,
      shipping_address: {
        street: "123 Main St",
        city: "Hanoi",
        district: "Hoan Kiem",
        province: "Hanoi",
        postal_code: "100000",
        country: "Vietnam",
      },
      shipping_cost: 50000,
      delivery_time: "5-7 days",
    },
  ],
  wishlist: [
    {
      product_id: "P003",
      product_name: "Bluetooth Speaker",
      price: 499000,
    },
  ],
  notifications: [
    {
      notification_id: "NTF001",
      message: "Your order ORD123456789 has been shipped.",
      date: "2024-08-02T09:00:00Z",
    },
  ],
};

const Profile: React.FC = () => {
  return <UserProfile user={user} />;
};

export default Profile;
