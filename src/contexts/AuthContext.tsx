"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (email: string, password: string, rememberMe: boolean) => Promise<void>;
  logout: () => void;
  user: { id: string; email: string } | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);

  // Vérifier si l'utilisateur est connecté à chaque chargement de page
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch("/api/auth/check", {
          method: "GET",
          credentials: "include", // Inclus les cookies
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setIsLoggedIn(false);
      }
    };

    checkUser();
  }, []);

  const login = async (email: string, password: string, rememberMe: boolean) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, rememberMe }),
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        setIsLoggedIn(true);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    fetch("/api/auth/logout", { method: "POST" }).then(() => {
      setIsLoggedIn(false);
      setUser(null);
    });
  };

  const value = React.useMemo(() => ({ isLoggedIn, login, logout, user }), [isLoggedIn, user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
