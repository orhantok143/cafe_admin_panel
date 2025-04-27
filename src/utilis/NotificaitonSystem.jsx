// components/NotificationSystem.jsx
import React, { useState, createContext, useContext } from 'react';
import Notification from './Notification';

const NotificationContext = createContext();

export const useNotifier = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const notify = (type, title, message) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, type, title, message }]);
  };

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotificationContext.Provider value={notify}>
      {children}
      <div className="fixed top-5 right-5 z-50 space-y-3">
        {notifications.map((n) => (
          <Notification key={n.id} {...n} onClose={removeNotification} />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
