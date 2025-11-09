import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MakePayment } from '../services/api';

function Payment() {
  const [amountOrigin, setAmountOrigin] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [outgoingPaymentGrant, setOutgoingPaymentGrant] = useState(null);
  const [quote, setQuote] = useState(null);
  const [senderWallet, setSenderWallet] = useState(null);

  const location = useLocation();

  const startPayment = async () => {
    if (!amountOrigin || isNaN(amountOrigin) || Number(amountOrigin) <= 0) {
      alert("Por favor, ingrese una cantidad válida mayor que 0.");
      return;
    }
    try {
      const paymentData = MakePayment({
        amount: Number(amountOrigin),
      });
      const result = await paymentData;

      if (result.redirectUrl) {
        window.open(
            result.redirectUrl,
             "_blank",
            "width=600,height=800,top=0,left=0"
        );
      } else {
        alert(`Payment Result: ${JSON.stringify(result)}`);
      }
    } catch (error) {
      console.error("Error starting payment:", error);
    }
  };

  return (
    <div>
      <h2>Página de Pago</h2>
      <input
        type="text"
        placeholder="Cantidad"
        value={amountOrigin}
        onChange={(e) => setAmountOrigin(e.target.value)}
      />
      <button onClick={startPayment}>Iniciar Pago</button>
    </div>
  );
}

export default Payment;