import { useState } from "react";
import "../styles/admin.css"; 

export default function Admin(){
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      if (response.ok){
        setMessage(`Product added successfully! ID: ${data.id}`);
        setProduct({ name: "", price: "", image: "", description: "", category: "" });
      } 
      else{
        setMessage(`Error: ${data.error}`);
      }
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Panel - Add Product</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="product-form">
        <label>Name:<input type="text" name="name" value={product.name} onChange={handleChange} required/></label>
        <label>Price:<input type="number" name="price" value={product.price} onChange={handleChange} required/></label>
        <label>Image URL:<input type="text" name="image" value={product.image} onChange={handleChange} required/></label>
        <label>Description:<textarea name="description" value={product.description} onChange={handleChange} required/></label>
        <label>Category:<input type="text" name="category" value={product.category} onChange={handleChange} required/></label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
