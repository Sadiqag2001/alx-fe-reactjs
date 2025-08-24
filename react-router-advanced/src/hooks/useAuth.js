import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);

  const login = (username = "DemoUser") => {
    setUser({ name: username });
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout, isAuthenticated: !!user };
}
