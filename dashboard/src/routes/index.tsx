import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import Dashboard from "../pages/Dashboard";
import Support from "../pages/Support";
import Admission from "../pages/Admission";
import University from "../pages/University";
import User from "../pages/User";
import Setting from "../pages/Setting";
import ProtectedRoute from "./ProtectedRoute";
import SignOut from "../pages/Authentication/SignOut";
import ForgotPassword from "../pages/Authentication/ForgotPassword";

const Routes = () => {
  const ProtectedDashboard = ProtectedRoute(Dashboard);
  const ProtectedAdmission = ProtectedRoute(Admission);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RoutesWrapper>
            <Route path="/" element={ProtectedDashboard} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/support" element={<Support />} />
            <Route path="/admission" element={ProtectedAdmission} />
            <Route path="/university" element={<University />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/user" element={<User />} />
            <Route path="/sign-out" element={<SignOut />} />
          </RoutesWrapper>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default Routes;
