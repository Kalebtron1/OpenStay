import propertyImage from "../assets/loft.jpg"

export default function Checkout() {
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

            {/* Price Details */}
            <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>5 nights × $250</span>
                <span>$1,250.00</span>
              </div>
              <div className="flex justify-between">
                <span>Cleaning fee</span>
                <span>$75.00</span>
              </div>
              <div className="flex justify-between">
                <span>Service fee</span>
                <span>$185.50</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-gray-900">
                <span>Total (USD)</span>
                <span>$1,510.50</span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-lg">Pay with</h4>

            <div className="space-y-3 mb-3">
              {[
                { name: "Visa ending in 4242", selected: true },
                { name: "Google Pay" },
                { name: "PayPal" },
              ].map((option, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center p-3 border rounded-lg cursor-pointer ${
                    option.selected
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200"
                  }`}
                >
                  <span className="text-sm text-gray-800">{option.name}</span>
                  <input
                    type="radio"
                    checked={option.selected}
                    readOnly
                    className="text-green-500 accent-green-500"
                  />
                </div>
              ))}
            </div>

            <button className="text-green-600 font-medium text-sm">
              + Add payment method
            </button>
          </div>

          {/* Pay Now Button */}
          <div>
            <button className="w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600">
              Pay Now
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              🔒 Your payment is secure
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
