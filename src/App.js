import Header from "./components/Header";
import { useState, useEffect } from "react";
import Productlist from "./components/Productlist";

function App() {
  const [title, setTitle] = useState("Hi! this is Kelly");

  const changeTitle = () => {
    setTitle("No it's not");
  };

  const [products, setProduct] = useState([
    { id: 1, title: "product 1", price: 254 },
    { id: 2, title: "product 2", price: 254 },
    { id: 3, title: "product 3", price: 254 },
    { id: 4, title: "product 4", price: 254 },
    { id: 5, title: "product 5", price: 254 },
  ]);

  const deleteItem = (productId) => {
    const newProduct = products.filter((product) => product.id !== productId);
    setProduct(newProduct);
  };

  const [name, setName] = useState("Kelly");

  useEffect(() => {
    console.log("Use Effect Running");
  }, [name]);

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}> is it kelly?</button>
      <br />
      <br />
      <Productlist products={products} deleteItem={deleteItem} />
      <br />
      <br />
      <button onClick={() => setName("Siwon")}>Change Name</button>
      <p> {name}</p>
      {/* <Header /> */}
    </div>
  );
}

export default App;
