// src/components/NotificationContainer.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { useNotification } from '../context/NotificationContext';
import '../scss/components/_notifications.scss';

const NotificationContainer: React.FC = () => {
  const { notifications } = useNotification();

  return ReactDOM.createPortal(
    <div className="notification-container">
      {notifications.map(notif => (
        <div key={notif.id} className={`notification ${notif.type}`}>
          {notif.message}
        </div>
      ))}
    </div>,
    document.body
  );
};

export default NotificationContainer;
