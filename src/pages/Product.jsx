import "../styles/product.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");

  const userId = localStorage.getItem("userId"); 

  useEffect(() => {
    fetch(`http://localhost:5000/api/product/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(() => console.log("Failed to load product"));
  }, [id]);

  const fetchReviews = () => {
    fetch(`http://localhost:5000/api/review/${id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(() => console.log("Failed to load reviews"));
  };

  useEffect(() => {
    fetchReviews();
  }, [id]);

  const addToCart = () => {
    const qty = parseInt(quantity);
    if (isNaN(qty) || qty <= 0) {
      alert("Quantity must be 1 or more");
      return;
    }

    if (!userId) return alert("You must login first");

    fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: Number(userId),
        productId: Number(product.id),
        quantity: qty,
      }),
    })
      .then(res => res.json())
      .then(data => alert(data.message || "Item added to cart"))
      .catch(err => {
        console.error("Add to cart error:", err);
        alert("Failed to add to cart");
      });
  };

  const submitReview = () => {
    if (!userId) return alert("You must login first");
    if (!reviewText.trim()) return alert("Review cannot be empty");

    fetch("http://localhost:5000/api/review/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: Number(userId),
        productId: Number(product.id),
        comment: reviewText,
      }),
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        setReviewText("");
        fetchReviews(); 
      })
      .catch(err => console.error("Submit review error:", err));
  };

  if (!product) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div>
      <Header/>
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h2>{product.name}</h2>
          <p className="price">RM {product.price}</p>
          <p className="description">{product.description}</p>
          <input type="number" min="1" value={quantity} onChange={e => setQuantity(e.target.value)}/>
          <button onClick={addToCart}>Add to Cart</button>
          <div className="reviews-section" style={{ marginTop: "20px" }}>
            <h3>User Reviews</h3>
            {reviews.length > 0 ? (
              reviews.map((rev, idx) => {
                const picture = rev.picture
                  ? `http://localhost:5000/upload/${rev.picture}`
                  : "default.jpg";

                const createdAt = rev.created_at
                  ? new Date(rev.created_at).toLocaleString()
                  : "Unknown date";
                const displayName =
                  rev.user_id === Number(userId) ? "You" : rev.userName;

                return (
                  <div key={idx} className="review" style={{ display: "flex", marginBottom: "15px" }}>
                    <img src={picture} alt={displayName} style={{width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px",}}/>
                    <div>
                      <p><strong>{displayName}</strong></p>
                      <p>{rev.comment}</p>
                      <small>{createdAt}</small>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
          <div className="submit-review" style={{ marginTop: "30px" }}>
            <h3>Write a Review</h3>
            <textarea value={reviewText} onChange={e => setReviewText(e.target.value)} placeholder="Write your review..."/>
            <button onClick={submitReview}>Submit Review</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
