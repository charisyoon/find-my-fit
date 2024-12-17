import React, { useState } from 'react';
import Navbar from './Navbar';

const HomePage = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="fixed inset-0 bg-white">
      <div className="max-w-md mx-auto h-full flex flex-col">
        {/* Fixed Header */}
        <div className="text-center text-2xl font-bold py-3 border-b border-gray-200 bg-white sticky top-0 z-50 text-blue-600">
          Find My Fit
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-16">
          <div className="flex justify-around p-3 border-b border-gray-200">
            <div className="story">
              <img src="/Unknown-4.jpg" alt="Story" className="w-[60px] h-[60px] rounded-full border-2 border-blue-600" />
            </div>
            <div className="story">
              <img src="/Unknown-5.jpg" alt="Story" className="w-[60px] h-[60px] rounded-full border-2 border-blue-600" />
            </div>
            <div className="story">
              <img src="/Unknown-6.jpg" alt="Story" className="w-[60px] h-[60px] rounded-full border-2 border-blue-600" />
            </div>
            <div className="story">
              <img src="/Unknown-7.jpg" alt="Story" className="w-[60px] h-[60px] rounded-full border-2 border-blue-600" />
            </div>
            <div className="story">
              <img src="/Unknown-8.jpg" alt="Story" className="w-[60px] h-[60px] rounded-full border-2 border-blue-600" />
            </div>
          </div>

          <div className="relative p-3 border-b border-gray-200">
            <div className="flex items-center">
              <span className="filter-icon mr-3 text-xl">☰</span>
              <input
                type="text"
                className="search-bar flex-1 p-2 border border-gray-200 rounded-full"
                placeholder="Search for any clothing item here"
              />
            </div>

            {showFilters && (
              <div className="filter-menu absolute left-3 right-3 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-40">
                {/* Filter content */}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 p-3">
            <div className="feed-item relative">
              <img src="/tshirt.jpeg" alt="Item" className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute bottom-2 right-2 bg-white border border-black px-2 py-1 text-sm">
                Sale | M
              </div>
            </div>
            <div className="feed-item relative">
              <img src="/boots.jpeg" alt="Item" className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute bottom-2 right-2 bg-white border border-black px-2 py-1 text-sm">
                Borrow | L
              </div>
            </div>
            <div className="feed-item relative">
              <img src="/sweater.jpeg" alt="Item" className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute bottom-2 right-2 bg-white border border-black px-2 py-1 text-sm">
                Trade | S
              </div>
            </div>
            <div className="feed-item relative">
              <img src="/jeans.jpeg" alt="Item" className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute bottom-2 right-2 bg-white border border-black px-2 py-1 text-sm">
                Sale | XL
              </div>
            </div>
            <div className="feed-item relative">
              <img src="/scarf.jpeg" alt="Item" className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute bottom-2 right-2 bg-white border border-black px-2 py-1 text-sm">
                Borrow | M
              </div>
            </div>
            <div className="feed-item relative">
              <img src="/hoodie.jpeg" alt="Item" className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute bottom-2 right-2 bg-white border border-black px-2 py-1 text-sm">
                Trade | L
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Navbar at bottom */}
        <Navbar />
      </div>
    </div>
  );
};

export default HomePage;