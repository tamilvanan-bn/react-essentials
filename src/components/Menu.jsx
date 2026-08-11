import { MenuItem } from './MenuItem';

export const Menu = () => {
  const handleOrder = (itemName, itemPrice) => {
    console.log(`You ordered ${itemName} for ${itemPrice}`);
  };
  return (
    <div>
      <h2>Our menu</h2>
      <MenuItem name='Pizza' price={12} onOrder={handleOrder} />
      <MenuItem name='Burger' price={8} onOrder={handleOrder} />
      <MenuItem name='Salad' price={6} onOrder={handleOrder} />
    </div>
  );
};
