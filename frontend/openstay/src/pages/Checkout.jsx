import {useState} from "react"
import propertyImage from "../assets/loft.jpg"

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
  }

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
            <p className="text-gray-500 text-lg mb-6">Instanbul, Türkiye</p>
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
                <span>$1,250.00</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="">
              <div className="space-y-4 mb-4">
                <label htmlFor="walletAddress" className="text-lg">
                  Interledger Wallet Address
                </label>
                <input
                  type="text"
                  id="walletAddress"
                  name="walletAddress"
                  className="w-full mt-2 px-6 py-4 rounded-lg border border-gray-200 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 text-lg"
                />
              </div>
              <div style={{minHeight: "1.5em"}}>
                {error ? (
                  <p className="text-lg text-red-600 font-medium">{error}</p>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              className="hover:cursor-pointer w-full mt-2 bg-green-500 text-white py-4 rounded-full font-semibold text-xl hover:bg-green-600"
            >
              Pay With Interledger
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              🔒 Your payment is secure
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
