import React from 'react';

const NotificationPanel = ({ notifications }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        {notifications.map((notification) => (
          <div key={notification.id} className="py-3 border-b last:border-b-0">
            <p className="text-sm text-gray-600">{notification.text}</p>
            <span className="text-xs text-gray-400 mt-1">{notification.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;