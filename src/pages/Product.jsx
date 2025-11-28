import "../assets/styles/product.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

export default function Product(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:5000/api/product/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch(() => console.log("Failed to load product"));
    }, [id]);

    const addToCart = () => {
        const qty = parseInt(quantity);
        if(isNaN(qty) || qty <= 0){
            alert("Must choose 1 or more product");
            return;
        }

        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: qty,
            image: product.image
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = cart.find((item) => item.id === product.id);

        if(existingItem){
            existingItem.quantity += qty;
        }
        else{
            cart.push(cartItem);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item added to cart");
    }

    if(!product) return <p style={{textAlign: "center"}}>Loading....</p>;

    return(
        <div>
            <Header/>
            <div className="product-container">
                <div className="product-image">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="product-details">
                    <h2>{product.name}</h2>
                    <p className="price">RM {product.price}</p>
                    <p className="description">{product.description}</p>
                    <div>
                        <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                        <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <footer>
        <p>&copy; 2025 CubeX</p>
      </footer>
        </div>
    )
}