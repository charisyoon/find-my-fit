import React, { useState } from 'react';

const MarketplaceListing = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11)); // December 2024
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  
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

  return (
    <div className="max-w-md mx-auto bg-gray-50 p-4 rounded-xl">
      {/* Main Image Card */}
      <div className="relative mb-4 bg-white rounded-lg shadow">
        <img
          src="https://placehold.co/400x500"
          alt="Multi-colored knit sweater"
          className="w-full h-96 object-cover rounded-t-lg"
        />
        <button 
          className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
        >
          MAKE OFFER
        </button>
        
        {/* Image Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
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

      {/* User Info and Product Details */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://placehold.co/50"
          alt="User profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold">Sally S.</h3>
          <p className="text-gray-600">@sally_student</p>
        </div>
      </div>

      {/* Rating and Sales */}
      <div className="flex items-center gap-4 mb-4">
        <span className="flex items-center">
          ⭐ 4.9
        </span>
        <span className="flex items-center">
          🛍️ 12 sold
        </span>
      </div>

      {/* Product Info */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Multi-Colored Knit Sweater</h2>
        <p className="text-gray-600">Size: Small, Lightly Worn, Excellent Condition</p>
        <p className="mt-2">Open to <span className="font-semibold">Trades</span> & <span className="font-semibold">Offers</span>!</p>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-lg p-4 mb-4 shadow">
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={goToPreviousMonth}
            className="text-gray-600 hover:text-blue-600 p-2"
          >
            ◀
          </button>
          <h3 className="font-semibold">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button 
            onClick={goToNextMonth}
            className="text-gray-600 hover:text-blue-600 p-2"
          >
            ▶
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
            <div key={day} className="text-gray-600 text-sm">{day}</div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {Array(getStartDay(currentDate)).fill(null).map((_, idx) => (
            <div key={`empty-${idx}`} className="h-8" />
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
                className={`h-8 relative text-sm flex items-center justify-center
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
          <div className="mt-4 text-sm text-gray-600">
            Selected: {startDate} {endDate ? `- ${endDate}` : ''} December
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <div className="flex justify-between items-center pt-4">
        <button className="text-gray-600">🏠</button>
        <button className="text-gray-600">❤️</button>
        <button className="text-gray-600">➕</button>
        <button className="text-gray-600">💬</button>
        <button className="text-gray-600">👤</button>
      </div>
    </div>
  );
};

export default MarketplaceListing;