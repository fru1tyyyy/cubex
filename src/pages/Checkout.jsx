import "../styles/checkout.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Checkout() {
  const handlePay = async () => {
    const userId = localStorage.getItem("userId");

    const res = await fetch("http://localhost:5000/api/checkout/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Payment Successful! Email sent.");
    } else {
      alert("Payment done, but email failed.");
    }
  };

  return (
    <div>
      <Header/>
      <main>
        <div className="checkout">
          <h2>Checkout</h2>
          <img src="/img/tng.jpg" alt="TNG" className="tng-image" />
          <button className="pay-button" onClick={handlePay}>Pay</button>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
