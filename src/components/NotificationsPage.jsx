import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const NotificationsPage = () => {
  const navigate = useNavigate();
  
  const notifications = [
    { type: 'follow', user: 'thriftygal', time: '13m', avatar: true, image: 'profile-1.png' },
    { type: 'like', user: 'brainybee23', time: '23m', avatar: false, image: 'clothing-1.png' },
    { type: 'like', user: 'lillyyyycloset', time: '1h', avatar: false, image: 'clothing-2.png' },
    { type: 'follow', user: 'charisparis', time: '2h', avatar: true, image: 'profile-2.png' },
    { type: 'like', user: 'anita312', time: '2h', avatar: false, image: 'clothing-1.png' },
    { type: 'follow', user: 'nancepants', time: '3h', avatar: true, image: 'profile-3.png' },
    { type: 'like', user: 'profsmith', time: '1d', avatar: false, image: 'clothing-3.png' },
  ];

  return (
    <div className="fixed inset-0 bg-white">
      <div className="max-w-md mx-auto h-full flex flex-col">
        {/* Fixed Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center sticky top-0 z-50">
          <button 
            onClick={() => navigate(-1)}
            className="text-2xl mr-4 text-gray-800"
          >
            ←
          </button>
          <h1 className="text-lg font-semibold">Notifications</h1>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-16">
          {notifications.map((notification, index) => (
            <div 
              key={index}
              className="flex items-center p-4 border-b border-gray-200"
            >
              <div className={`${notification.avatar ? 'rounded-full' : 'rounded-lg'} overflow-hidden w-10 h-10 mr-3`}>
                <img 
                  src={`/${notification.image}`}
                  alt={notification.user}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <span className="text-sm text-gray-800">
                  <span className="font-semibold">{notification.user}</span>
                  {' '}
                  {notification.type === 'follow' ? 'started following you' : 'liked your item'}.
                </span>
              </div>
              <span className="text-sm text-gray-500 ml-2">
                {notification.time}
              </span>
            </div>
          ))}
        </div>

        {/* Fixed Navbar */}
        <Navbar />
      </div>
    </div>
  );
};

export default NotificationsPage;