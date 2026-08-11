export const ProductList = () => {
  const productList = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 },
    { id: 3, name: 'Tablet', price: 499 },
    { id: 4, name: 'Watch', price: 299 },
  ];

  const productElement = productList
    ?.filter((product) => product?.price > 400)
    ?.map((product) => (
      <div key={product.id}>
        <h3>{product?.name}</h3>
        <p>Price: ${product?.price}</p>
      </div>
    ));

  return (
    <div>
      <h2>Products</h2>
      {productElement}
    </div>
  );
};
