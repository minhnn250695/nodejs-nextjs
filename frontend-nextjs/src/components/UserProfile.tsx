// app/components/UserProfile.tsx
import React from 'react';
import styles from '../styles/Profile.module.scss';
import { UserProfileProps } from '@/models/user.model';


const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className={styles.profileContainer}>
      <h1>User Profile</h1>
      <div className={styles.profileSection}>
        <h2>Personal Information</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
        <p><strong>Phone Number:</strong> {user.phone_number}</p>
        <p><strong>Date of Birth:</strong> {new Date(user.date_of_birth).toLocaleDateString()}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
      </div>

      <div className={styles.profileSection}>
        <h2>Address</h2>
        <p>{user.address.street}, {user.address.district}, {user.address.city}, {user.address.province}, {user.address.postal_code}, {user.address.country}</p>
      </div>

      <div className={styles.profileSection}>
        <h2>Order History</h2>
        {user.order_history.map((order) => (
          <div key={order.order_id} className={styles.order}>
            <p><strong>Order ID:</strong> {order.order_id}</p>
            <p><strong>Order Date:</strong> {new Date(order.order_date).toLocaleDateString()}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <ul>
              {order.items.map((item) => (
                <li key={item.product_id}>
                  {item.quantity} x {item.product_name} - {item.price.toLocaleString()} VND
                </li>
              ))}
            </ul>
            <p><strong>Total Amount:</strong> {order.total_amount.toLocaleString()} VND</p>
            <p><strong>Shipping Cost:</strong> {order.shipping_cost.toLocaleString()} VND</p>
            <p><strong>Delivery Time:</strong> {order.delivery_time}</p>
          </div>
        ))}
      </div>

      <div className={styles.profileSection}>
        <h2>Wishlist</h2>
        <ul>
          {user.wishlist.map((item) => (
            <li key={item.product_id}>
              {item.product_name} - {item.price.toLocaleString()} VND
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.profileSection}>
        <h2>Notifications</h2>
        <ul>
          {user.notifications.map((notification) => (
            <li key={notification.notification_id}>
              {notification.message} - {new Date(notification.date).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
