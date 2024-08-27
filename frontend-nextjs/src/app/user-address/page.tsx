'use client'
import React, { useState } from 'react';
import UserAddress from '../../components/UserAddress';

const initialAddress = {
  street: "123 Main St",
  city: "Hanoi",
  district: "Hoan Kiem",
  province: "Hanoi",
  postal_code: "100000",
  country: "Vietnam"
};

const UserAddressPage = () => {
  const [address, setAddress] = useState(initialAddress);

  const handleSave = (newAddress: typeof initialAddress) => {
    // Update address in the state (or send it to an API)
    setAddress(newAddress);
    console.log('Address saved:', newAddress);
  };

  return <UserAddress address={address} onSave={handleSave} />;
};

export default UserAddressPage;
