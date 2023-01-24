import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import LoadingScreen from "../components/shared/LoadingScreen";
import { SAVE_PRIVATE_PATH_FOR_REDIRECT } from "../utilities/global/constants";

const ProtectedRoute = (Component: () => JSX.Element) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setIsLoggedIn(true);
      } catch (err) {
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (!isLoggedIn && !loading) {
    if (window.location.pathname !== "/sign-in") {
      localStorage.setItem(
        SAVE_PRIVATE_PATH_FOR_REDIRECT,
        window.location.pathname
      );
    }

    return <Navigate to="/sign-in" />;
  } else if (isLoggedIn && !loading) {
    return <Component />;
  }
  return <LoadingScreen />;
};

export default ProtectedRoute;
