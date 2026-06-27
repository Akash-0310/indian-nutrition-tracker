import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const TOKEN_KEY = 'tt-token';
const USER_KEY = 'tt-user';

// Apply (or clear) the Authorization header used for every axios request.
function setAuthHeader(token) {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY) || null);
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  // Keep the axios header in sync with the token on mount and on change.
  useEffect(() => {
    setAuthHeader(token);
  }, [token]);

  const persist = (data) => {
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    setAuthHeader(data.token);
  };

  const register = async ({ name, email, password }) => {
    const { data } = await axios.post('/api/auth/register', { name, email, password });
    persist(data);
    return data.user;
  };

  const login = async ({ email, password }) => {
    const { data } = await axios.post('/api/auth/login', { email, password });
    persist(data);
    return data.user;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setAuthHeader(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated: !!token, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
