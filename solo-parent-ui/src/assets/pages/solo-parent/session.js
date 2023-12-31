import React, { createContext, useContext, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const SessionContext = createContext();

function SessionProvider({ children }) {
  const [session, setSession] = useState({
    userId: null,
    soloParentFormId: null,
    name: null,
  });

  const setSessionData = (data) => {
    setSession((prevSession) => ({ ...prevSession, ...data }));
  };

  const clearSession = () => {
    setSession({
      userId: null,
      soloParentFormId: null,
      name: null,
    });
  };

  // Function to check if the session is null
  const isSessionValid = () => {
    return session.userId !== null; // Adjust the condition based on your session structure
  };

  return (
    <SessionContext.Provider value={{ session, setSessionData, clearSession }}>
      {children}
      {!isSessionValid() && <Navigate to="/login" />}
    </SessionContext.Provider>
  );
}

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};

export default SessionProvider;
