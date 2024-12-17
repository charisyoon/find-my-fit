import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('Offering');
  const navigate = useNavigate();

  const gridItems = [
    { image: 'coogi.jpg' },
    { image: 'overalls.jpg' },
    { image: 'cord.jpg' },
    { image: 'quarter.jpg' },
    { image: 'sun.jpg' },
    { image: 'skirt.jpg' },
    { image: 'faces.jpg' },
    { image: 'diamonds.jpg', isListing: true },
    { image: 'jacket.jpg' }
  ];

  return (
    <div className="fixed inset-0 bg-white">
      <div className="max-w-md mx-auto h-full flex flex-col">
        {/* Rest of the header remains the same */}
        <div className="flex justify-end p-4 bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="space-x-4">
            <button className="text-xl">☰</button>
            <button className="text-xl">💬</button>
            <button className="text-xl">📅</button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-16">
          <div className="p-6">
            <div className="text-center">
              <img
                src="/pfp.png"
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />
              <h2 className="text-2xl font-bold mt-4">sally_student</h2>
              <div className="text-yellow-400 my-2">★★★★★</div>
              <p className="text-gray-600">
                Hi! I'm a junior at Barnard studying CS. I love sustainable fashion and am open to buying/selling, trading, or even loaning. DM me for info!
              </p>
            </div>

            <div className="flex mt-6 border-b border-gray-200">
              {['Offering', 'Seeking', 'Sold'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 font-semibold ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {gridItems.map((item, i) => (
                <div 
                  key={i} 
                  className={`aspect-square rounded-lg overflow-hidden border border-gray-200 ${
                    item.isListing ? 'cursor-pointer hover:opacity-90' : ''
                  }`}
                  onClick={() => item.isListing && navigate('/marketplace/diamonds')}
                >
                  <img
                    src={`/${item.image}`}
                    alt={`Item ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default ProfilePage;