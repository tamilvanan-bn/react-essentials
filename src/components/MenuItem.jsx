export const MenuItem = ({ name, price, onOrder }) => {
  const style = {
    border: '2px solid black',
    borderRadius: '10px',
    padding: '10px',
    margin: '20px',
    textAlign: 'center',
    width: '250px',
  };
  return (
    <div style={style}>
      <span>
        {name} - ${price}
      </span>
      <br />
      <button onClick={() => onOrder(name, price)}>Order</button>
    </div>
  );
};
