import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

const useAuthGuard = (/* user */): void => {
  const location = useLocation();
  const navigate = useNavigate();

  // With authentication hooked up to api this is how we tell if user can access resource
  // const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    // TODO: replace with useIsAuthenticated hook
    const isAuthenticated = (): boolean => true;

    if (!isAuthenticated() && location.pathname !== "/login") {
      navigate("/login");
    }
  }, [location.pathname, navigate]);
};

export default useAuthGuard;
