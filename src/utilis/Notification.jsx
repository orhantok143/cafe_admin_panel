// components/Notification.jsx
import React, { useEffect } from 'react';
import { CheckCircle, XCircle, Info, AlertTriangle } from 'lucide-react';

const icons = {
  success: <CheckCircle className="text-green-600 w-5 h-5" />,
  error: <XCircle className="text-red-600 w-5 h-5" />,
  warning: <AlertTriangle className="text-yellow-500 w-5 h-5" />,
  info: <Info className="text-blue-600 w-5 h-5" />,
};

const Notification = ({ id, type = 'info', title, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), 4000);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <div
      className={`animate-slide-in w-80 flex items-start gap-3 p-4 rounded-xl shadow-lg bg-white dark:bg-gray-900 border-l-4 transition transform duration-300 animate-slide-in border-${type}-500`}
    >
      <div>{icons[type]}</div>
      <div className="flex-1">
        <p className="font-semibold text-sm capitalize text-gray-800 dark:text-white">{title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-300">{message}</p>
      </div>
      <button onClick={() => onClose(id)} className="text-gray-400 hover:text-gray-600">✕</button>
    </div>
  );
};

export default Notification;
