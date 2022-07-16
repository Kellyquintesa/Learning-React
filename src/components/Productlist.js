function Productlist({ products, deleteItem }) {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}{" "}
            <button onClick={() => deleteItem(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productlist;
