import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext({
  user: {
    id: 1,
    name: "Anonymous",
    email: "anonymous@anonymous",
    avatar: "",
  },
  updateUser: () => {},
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (user) => {
    if (user && !user.name) {
      user.name = "Anonymous";
    }
    setUser(user);
  };

  const login = (user) => {
    if (user && !user.name) {
      user.name = "Anonymous";
    }
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
