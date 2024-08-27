'use client'
import React, { useState } from 'react';
import styles from '../styles/UserAddress.module.scss';

interface Address {
  street: string;
  city: string;
  district: string;
  province: string;
  postal_code: string;
  country: string;
}

interface UserAddressProps {
  address: Address;
  onSave: (newAddress: Address) => void;
}

const UserAddress: React.FC<UserAddressProps> = ({ address, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<Address>(address);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentAddress({
      ...currentAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(currentAddress);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className={styles.addressContainer}>
      <h2>Address</h2>
      {isEditing ? (
        <div className={styles.addressForm}>
          <div className={styles.formGroup}>
            <label>Street:</label>
            <input
              type="text"
              name="street"
              value={currentAddress.street}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={currentAddress.city}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>District:</label>
            <input
              type="text"
              name="district"
              value={currentAddress.district}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Province:</label>
            <input
              type="text"
              name="province"
              value={currentAddress.province}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Postal Code:</label>
            <input
              type="text"
              name="postal_code"
              value={currentAddress.postal_code}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={currentAddress.country}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <button onClick={handleSave} className={styles.saveButton}>Save</button>
        </div>
      ) : (
        <div className={styles.addressDisplay}>
          <p>{currentAddress.street}</p>
          <p>{currentAddress.district}, {currentAddress.city}</p>
          <p>{currentAddress.province}, {currentAddress.postal_code}</p>
          <p>{currentAddress.country}</p>
          <button onClick={handleEdit} className={styles.editButton}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default UserAddress;
