import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export const UserContext = createContext();

const RootComponent = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [baseUrl, setBaseUrl] = useState("/mehmetsan.github.io");



  const contextValue = {
    showBanner,
    setShowBanner,
    baseUrl,
    setBaseUrl
  };


  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter basename={baseUrl}>
        <App />
      </BrowserRouter>
    </UserContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
