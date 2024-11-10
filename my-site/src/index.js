import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';

export const UserContext = createContext();

const RootComponent = () => {
  const [showBanner, setShowBanner] = useState(true);

  const contextValue = {
    showBanner,
    setShowBanner,
  };


  return (
    <UserContext.Provider value={contextValue}>
      <HashRouter>
        <App />
      </HashRouter>
    </UserContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
