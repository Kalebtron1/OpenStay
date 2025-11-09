import React, { useState } from "react";

function Payment() {
  const [amount, setAmount] = useState("");
  const [outgoingPaymentGrant, setOutgoingPaymentGrant] = useState(null);
  const [renterQuoteId, setRenterQuoteId] = useState(null);
  const [platformQuoteId, setPlatformQuoteId] = useState(null);
  const [combinedQuoteAmount, setCombinedQuoteAmount] = useState(null);

  // Inicia el pago
  const startPayment = async () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Por favor, ingrese una cantidad válida mayor que 0.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/openPayments/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(amount) }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error iniciando el pago");
      }

      setOutgoingPaymentGrant(data.outgoingPaymentGrant);
      setRenterQuoteId(data.renterQuote.id);
      setPlatformQuoteId(data.platformQuote.id);
      setCombinedQuoteAmount(data.combinedQuoteAmount);

      // Redirigir al usuario a la interacción (en la misma pestaña)
      if (data.redirectUrl) {
        window.open(data.redirectUrl, "_blank", "width=500,height=700");
      }

    } catch (err) {
      console.error(err);
      alert("Error procesando el pago: " + err.message);
    }
  };

  // Finaliza el pago
  const finishPayment = async () => {
    if (!outgoingPaymentGrant || !renterQuoteId || !platformQuoteId) {
      alert("No hay datos de pago para finalizar. Por favor inicia el pago primero.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/openPayments/finish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grant: outgoingPaymentGrant,
          renterQuote: renterQuoteId,
          platformQuote: platformQuoteId,
          
        }),
        
      });
      console.log(renterQuoteId,platformQuoteId)
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error finalizando el pago");
      }

      alert("Pago completado con éxito!");

    } catch (err) {
      console.error(err);
      alert("Error finalizando el pago: " + err.message);
    }
  };

  return (
    <div className="p-6 text-center">
      
        <input
          type="text"
          placeholder="Cantidad"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={startPayment}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Iniciar Pago
        </button>
        <button
          onClick={finishPayment}
          className="bg-green-600 text-white px-4 py-2 rounded ml-2"
        >
          Finalizar Pago
        </button>
      </div>
      
  );
}

export default Payment;
