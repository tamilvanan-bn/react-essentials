import { MenuItem } from './MenuItem';

import { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import { useDocTitle } from '../hooks/useDocTitle';

export const Menu = () => {
  const handleOrder = (itemName, itemPrice) => {
    console.log(`You ordered ${itemName} for ${itemPrice}`);
  };
  const [count, setCount] = useState(0);
  const user = useContext(UserContext);

  useDocTitle(count);

  return (
    <div>
      <h2>{user.name}</h2>
      <h2>Our menu</h2>
      <MenuItem name='Pizza' price={12} onOrder={handleOrder} />
      <MenuItem name='Burger' price={8} onOrder={handleOrder} />
      <MenuItem name='Salad' price={6} onOrder={handleOrder} />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </button>
    </div>
  );
};
