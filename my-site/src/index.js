import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const UserContext = createContext();

const RootComponent = () => {
  const [displayPage, setDisplayPage] = useState("home");
  const [showBanner, setShowBanner] = useState(true);


  const contextValue = {
    displayPage,
    setDisplayPage,
    showBanner,
    setShowBanner
  };


  return (
    <UserContext.Provider value={contextValue}>
      <App />
    </UserContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
