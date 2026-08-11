import { MenuItem } from './MenuItem';

import { useContext } from 'react';
import { UserContext } from './UserContext';

export const Menu = () => {
  const handleOrder = (itemName, itemPrice) => {
    console.log(`You ordered ${itemName} for ${itemPrice}`);
  };
  const user = useContext(UserContext);
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>Our menu</h2>
      <MenuItem name='Pizza' price={12} onOrder={handleOrder} />
      <MenuItem name='Burger' price={8} onOrder={handleOrder} />
      <MenuItem name='Salad' price={6} onOrder={handleOrder} />
    </div>
  );
};
