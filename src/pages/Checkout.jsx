import "../assets/styles/checkout.css";
import Header from "../components/Header";

export default function Checkout() {
  const handlePay = () => {
    alert("Payment Successful! (Mockup)");
  };

  return (
    <div>
      <Header />
      <main>
        <div className="checkout">
          <h2>Checkout</h2>
          <img src="/img/tng.jpg" alt="TNG" className="tng-image" />
          <button className="pay-button" onClick={handlePay}>
            Pay
          </button>
        </div>
      </main>
      <footer>
        <p>&copy; 2025 CubeX</p>
      </footer>
    </div>
  );
}

