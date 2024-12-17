import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex justify-between items-center p-4 max-w-md mx-auto bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0">
      <button 
        onClick={() => navigate('/')}
        className="flex-1 flex justify-center"
      >
        <img src="/home-icon.png" alt="Home" className="w-6 h-6" />
      </button>
      <button 
        onClick={() => navigate('/notifications')} // Updated to go to notifications
        className="flex-1 flex justify-center"
      >
        <img src="/heart-icon.png" alt="Notifications" className="w-6 h-6" />
      </button>
      <button 
        onClick={() => navigate('/new-listing')}
        className="flex-1 flex justify-center"
      >
        <img src="/plus-icon.png" alt="Add" className="w-6 h-6" />
      </button>
      <button 
        onClick={() => navigate('/messages')}
        className="flex-1 flex justify-center"
      >
        <img src="/message-icon.png" alt="Messages" className="w-6 h-6" />
      </button>
      <button 
        onClick={() => navigate('/profile')}
        className="flex-1 flex justify-center"
      >
        <img src="/person-icon.png" alt="Profile" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Navbar;