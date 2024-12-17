import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const MarketplaceListing = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11));
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [offerType, setOfferType] = useState('money');
  const [offerAmount, setOfferAmount] = useState('');
  const [tradeItem, setTradeItem] = useState('');
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getStartDay = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };
  
  const handleDateClick = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else {
      if (day < startDate) {
        setStartDate(day);
        setEndDate(null);
      } else {
        setEndDate(day);
      }
    }
  };

  const handleDateHover = (day) => {
    if (startDate && !endDate) {
      setHoverDate(day);
    }
  };

  const isInRange = (day) => {
    if (startDate && endDate) {
      return day >= startDate && day <= endDate;
    }
    if (startDate && hoverDate && !endDate) {
      return day >= startDate && day <= hoverDate;
    }
    return false;
  };

  const handleSubmitOffer = async (e) => {
    e.preventDefault();
  
    const payload = {
      listing_id: 1, // For demo purposes, hardcoding a listing ID
      type: offerType,
      amount: offerType === 'money' ? parseFloat(offerAmount) : null,
      trade_item: offerType === 'trade' ? tradeItem : null,
    };
  
    try {
      const response = await fetch('http://127.0.0.1:5000/api/offer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  
      const data = await response.json();
      alert(`Offer submitted successfully! Offer ID: ${data.id}`);
  
      // Reset form and modal
      setShowOfferModal(false);
      setOfferAmount('');
      setTradeItem('');
    } catch (error) {
      console.error('Error submitting offer:', error);
      alert('Failed to submit offer. Please try again.');
    }
  };
  

  return (
    <div className="fixed inset-0 bg-white">
      <div className="max-w-md mx-auto h-full flex flex-col">
        {/* Back Button Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center">
          <button 
            onClick={() => navigate(-1)} 
            className="text-2xl mr-4"
          >
            ←
          </button>
          <h1 className="text-lg font-semibold">Listing Details</h1>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-16">
          {/* Main Image Card */}
          <div className="relative bg-white p-4">
            <div className="rounded-lg overflow-hidden shadow-sm">
              <img
                src="/diamonds.jpg"
                alt="Diamond pattern sweater"
                className="w-full h-80 object-cover"
              />
              <button 
                onClick={() => setShowOfferModal(true)}
                className="absolute bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
              >
                MAKE OFFER
              </button>
              
              {/* Image Navigation Dots */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {[0, 1, 2].map((dot, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      currentImage === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="px-4">
            {/* User Info and Product Details */}
            <div className="flex items-center gap-4 mb-3">
              <img
                src="/pfp.png"
                alt="User profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Sally S.</h3>
                <p className="text-gray-600 text-sm">@sally_student</p>
              </div>
            </div>

            {/* Rating and Sales */}
            <div className="flex items-center gap-4 mb-3">
              <span className="flex items-center text-sm">
                ⭐ 4.9
              </span>
              <span className="flex items-center text-sm">
                🛍️ 12 sold
              </span>
            </div>

            {/* Product Info */}
            <div className="mb-3">
              <h2 className="text-lg font-bold mb-1">Multi-Colored Knit Sweater</h2>
              <p className="text-gray-600 text-sm">Size: Small, Lightly Worn, Excellent Condition</p>
              <p className="mt-1 text-sm">Open to <span className="font-semibold">Trades</span> & <span className="font-semibold">Offers</span>!</p>
            </div>

            {/* Calendar */}
            <div className="bg-white rounded-lg p-3 mb-4 shadow">
              <div className="flex justify-between items-center mb-2">
                <button 
                  onClick={goToPreviousMonth}
                  className="text-gray-600 hover:text-blue-600 p-1"
                >
                  ◀
                </button>
                <h3 className="font-semibold text-sm">
                  {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <button 
                  onClick={goToNextMonth}
                  className="text-gray-600 hover:text-blue-600 p-1"
                >
                  ▶
                </button>
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center mb-1">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                  <div key={day} className="text-gray-600 text-xs">{day}</div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {Array(getStartDay(currentDate)).fill(null).map((_, idx) => (
                  <div key={`empty-${idx}`} className="h-6" />
                ))}
                
                {Array.from({ length: getDaysInMonth(currentDate) }, (_, i) => i + 1).map(day => {
                  const isCurrentMonth = currentDate.getMonth() === 11 && currentDate.getFullYear() === 2024;
                  const isAvailable = isCurrentMonth && day >= 14 && day <= 30;
                  const isSelected = day === startDate || day === endDate;
                  const inRange = isInRange(day);
                  
                  return (
                    <button
                      key={day}
                      onClick={() => isAvailable && handleDateClick(day)}
                      onMouseEnter={() => isAvailable && handleDateHover(day)}
                      className={`h-6 relative text-xs flex items-center justify-center
                        ${isSelected 
                          ? 'bg-blue-600 text-white rounded-full z-10' 
                          : inRange
                            ? 'bg-blue-100'
                            : isAvailable
                              ? 'text-blue-600 hover:bg-blue-50' 
                              : 'text-gray-400'
                        }
                        ${inRange && day !== startDate && day !== endDate ? 'rounded-none' : ''}
                        ${inRange && day === startDate ? 'rounded-l-full' : ''}
                        ${inRange && day === endDate ? 'rounded-r-full' : ''}
                        ${inRange && !endDate && day === hoverDate ? 'rounded-r-full' : ''}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
              
              {/* Selected Range Display */}
              {startDate && (
                <div className="mt-2 text-xs text-gray-600">
                  Selected: {startDate} {endDate ? `- ${endDate}` : ''} December
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Offer Modal */}
        {showOfferModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-sm">
              <h3 className="text-lg font-semibold mb-4">Make an Offer</h3>
              
              <form onSubmit={handleSubmitOffer}>
                <div className="mb-4">
                  <div className="flex gap-4 mb-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="offerType"
                        value="money"
                        checked={offerType === 'money'}
                        onChange={(e) => setOfferType(e.target.value)}
                        className="mr-2"
                      />
                      Money Offer
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="offerType"
                        value="trade"
                        checked={offerType === 'trade'}
                        onChange={(e) => setOfferType(e.target.value)}
                        className="mr-2"
                      />
                      Trade Offer
                    </label>
                  </div>

                  {offerType === 'money' ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Offer Amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <input
                          type="number"
                          value={offerAmount}
                          onChange={(e) => setOfferAmount(e.target.value)}
                          placeholder="0.00"
                          className="w-full pl-8 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          min="0"
                          step="0.01"
                          required
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Describe Your Trade Item
                      </label>
                      <textarea
                        value={tradeItem}
                        onChange={(e) => setTradeItem(e.target.value)}
                        placeholder="Describe the item you'd like to trade..."
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
                        required
                      />
                    </div>
                  )}
                </div>

                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowOfferModal(false)}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Submit Offer
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <Navbar />
      </div>
    </div>
  );
};

export default MarketplaceListing;