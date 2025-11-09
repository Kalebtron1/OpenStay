import {useState} from "react"
import propertyImage from "../assets/loft.jpg"
import Footer from "../components/footer"

export default function Checkout() {
  const [error, setError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    const walletAddress = e.target.walletAddress.value
    const isValid =
      /^(g|private|example|peer|self|test[1-3]?|local)(\.[a-zA-Z0-9_~-]+)+$/.test(
        walletAddress,
      )
    setError(isValid ? "" : "Please enter a valid wallet address")
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    // TODO: change this, it's just a placeholder to call the backend
    fetch(`${backendUrl}/create-payment-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({walletAddress}),
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-7xl min-h-[800px] bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
  {/* Imagen */}
  <div className="relative min-h-[700px]">
    <img
      src={propertyImage}
      alt="Modern Loft"
      className="w-full h-full object-cover md:rounded-l-3xl"
    />
  </div>

  {/* Detalles */}
  <div className="p-12 md:p-20 flex flex-col justify-between">
    <div>
      <h2 className="text-4xl font-semibold mb-8">Property Details</h2>

      {/* Basic Info */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 text-2xl mb-2">Amenities</h3>
        <p className="text-gray-500 text-lg">2 bathrooms, 1 kitchen, 1 living room</p>
      </div>

      {/* Location */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 text-2xl mb-2">Location</h3>
        <p className="text-gray-500 text-lg mb-1">Modern Loft in Downtown</p>
        <p className="text-gray-500 text-lg mb-1">Cluj-Napoca, Romania</p>
      </div>

      {/* Guests */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 text-2xl mb-4">Guests</h3>
        <div className="flex items-center space-x-4 text-lg text-gray-700">
          <span>Number of guests:</span>
          <input
            type="number"
            placeholder="2"
            disabled
            className="w-20 p-2 border border-gray-300 rounded-md text-center bg-gray-100 text-gray-700"
          />
        </div>
      </div>

      {/* Pricing */}
      <div className="border-t border-gray-200 pt-6 space-y-4 text-lg">
        <div className="flex justify-between">
          <span>5 nights × $250</span>
          <span>$1,250.00</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-semibold text-gray-900 text-xl">
          <span>Total (USD)</span>
          <span>$1,250.00</span>
        </div>
      </div>
    </div>

    {/* Botón Publish */}
    <button
      className="hover:cursor-pointer w-full mt-8 bg-green-500 text-white py-4 rounded-full font-semibold text-xl hover:bg-green-600 transition-colors duration-200"
    >
      Publish
    </button>
  </div>
</div>

    </div>
    
  )
}
