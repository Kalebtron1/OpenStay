import React, { useState } from "react";
import propertyImage from "../assets/loft.jpg"

function Payment() {
  const [amount, setAmount] = useState("1250");
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-7xl min-h-[800px] bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">


      <div className="relative min-h-[700px]">
                <img
                  src={propertyImage}
                  alt="Modern Loft"
                  className="w-full h-full object-cover md:rounded-l-3xl"
                />
      </div>
      <div className="p-12 md:p-20 flex flex-col justify-between">
          <h2 className="text-4xl font-semibold mb-10">Confirm and Pay</h2>
          <div className="mb-10">
            <h3 className="font-semibold text-gray-900 text-2xl">
              Modern Loft in Downtown
            </h3>
            <p className="text-gray-500 text-lg mb-6">Cluj-Napoca, Romania</p>
            <div className="flex items-center space-x-8 text-lg text-gray-700 mb-6">
              <div className="flex items-center space-x-2">
                <span>📅</span>
                <span>Oct 14 - Oct 19</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>👥</span>
                <span>2 guests</span>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6 space-y-4 text-lg">
              <div className="flex justify-between">
                <span>5 nights × $250</span>
                
                <span>$1,250.00</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-semibold text-gray-900">
                <span>Total (USD)</span>
                <input
          type="text"
          placeholder="$1250 USD"
          disabled
          value={"$1,250.00" }
          onChange={(e) => setAmount(e.target.value)}
          className="flex-grow p-1 border-0 rounded-none outline-none text-right"
          style={{ minWidth: "50px" }}
          
        />
                
                
              </div>
             </div>
            </div>
          
            
            <button
              onClick={startPayment}
              className="hover:cursor-pointer w-full mt-2 bg-green-500 text-white py-4 rounded-full font-semibold text-xl hover:bg-green-600"
            >
              Pay With Interledger
            </button>
            <button
              onClick={finishPayment}
              className="hover:cursor-pointer w-full mt-2 bg-green-500 text-white py-4 rounded-full font-semibold text-xl hover:bg-green-600"
            >
              Continue
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              🔒 Your payment is secure
            </p>
          
        </div>
      </div>

        
        
        
        
      </div>
      

      
  );
}

export default Payment;
