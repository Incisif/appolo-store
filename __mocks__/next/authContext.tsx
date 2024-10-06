import { render } from "@testing-library/react";
import { AuthContext, AuthContextType } from "@/contexts/AuthContext";

export const mockUseAuthProvider = ({
  isLoggedIn = false,
  user = null as AuthContextType["user"], // Typage explicite de user
  login = jest.fn().mockResolvedValue(undefined),
  logout = jest.fn().mockResolvedValue(undefined),
} = {}) => {
  const providerValues: AuthContextType = {
    isLoggedIn,
    user,
    login,
    logout,
  };

  const renderWithAuthContext = (ui: React.ReactElement) => {
    return render(
      <AuthContext.Provider value={providerValues}>
        {ui}
      </AuthContext.Provider>
    );
  };

  return {
    renderWithAuthContext,
    providerValues, // optionnel : pour vérifier si nécessaire dans les tests
  };
};
