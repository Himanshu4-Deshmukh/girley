import React, { useState } from 'react';

const OrderPage = () => {
  const [isOrderPlaced, setOrderPlaced] = useState(false);

  const handleCheckboxChange = () => {
    setOrderPlaced(!isOrderPlaced);
  };

  const handleClosePopup = () => {
    setOrderPlaced(false);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h1 className="text-2xl font-bold mb-4">Cash On Delivery</h1>

        {/* Checkbox */}
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={isOrderPlaced}
            onChange={handleCheckboxChange}
            className="form-checkbox mr-2"
          />
          <span className="text-sm">Place Order</span>
        </label>

        {/* Popup */}
        {isOrderPlaced && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-md max-w-md text-center">
              <p className="text-xl font-bold mb-4">Order Placed!</p>
              <p>Your order has been successfully placed.</p>
              <button
                onClick={handleClosePopup}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
