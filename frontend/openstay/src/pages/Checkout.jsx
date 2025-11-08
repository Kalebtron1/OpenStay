import { useState  } from "react";
import propertyImage from "../assets/loft.jpg"

export default function Checkout() {
  const [error, setError] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <img
            src={propertyImage}
            alt="Modern Loft"
            className="w-full h-full object-cover md:rounded-l-3xl"
          />
        </div>
        <div className="p-6 md:p-10 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold mb-6">Confirm and Pay</h2>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 text-xl">
              Modern Loft in Downtown
            </h3>
            <p className="text-gray-500 text-sm mb-4">San Francisco, CA</p>

            <div className="flex items-center space-x-4 text-sm text-gray-700 mb-4">
              <div className="flex items-center space-x-1">
                <span>📅</span>
                <span>Oct 14 - Oct 19</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>👥</span>
                <span>2 guests</span>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>5 nights × $250</span>
                <span>$1,250.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-gray-900">
                <span>Total (USD)</span>
                <span>$1,250.00</span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="space-y-3 mb-3">
              <label htmlFor="walletAddress">Interledger Wallet Address</label>
              <input
                type="text"
                id="walletAddress"
                name="walletAddress"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              />
            </div>
          </div>
          <div>
            <button
              className="hover:cursor-pointer w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600"
              onClick={() => {
                const isValid = /^0x[a-fA-F0-9]{40}$/.test(value)
                setError(isValid ? "" : "Please enter a valid wallet address")
              }}
            >
              Pay Now
            </button>
            {error ? (
              <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>
            ) : null}
            <p className="text-xs text-gray-500 text-center mt-2">
              🔒 Your payment is secure
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
