import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Support from "../pages/Support";
import Admission from "../pages/Admission";
import University from "../pages/University";
import User from "../pages/User";
import Setting from "../pages/Setting";

const Routes = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RoutesWrapper>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/support" element={<Support />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/university" element={<University />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/user" element={<User />} />
          </RoutesWrapper>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default Routes;
