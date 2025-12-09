import "../assets/styles/checkout.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Checkout() {
  const handlePay = () => {
    alert("Payment Successful :D");
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
      <Footer/>
    </div>
  );
}
