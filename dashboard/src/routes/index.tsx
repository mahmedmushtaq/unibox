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
import Category from "../pages/Category";
import Course from "../pages/Course";
import University from "../pages/University";
import Setting from "../pages/Setting";
import ProtectedRoute from "./ProtectedRoute";
import SignOut from "../pages/Authentication/SignOut";
import AddUniversity from "../pages/University/AddUniversity";
import AddCategory from "../pages/Category/AddCategory";
import AddCourse from "../pages/Course/AddCourse";

const Routes = () => {
  const ProtectedDashboard = ProtectedRoute(Dashboard);
  const ProtectedCourse = ProtectedRoute(Course);
  const ProtectedAddUniversity = ProtectedRoute(AddUniversity);
  const ProtectedUniveristy = ProtectedRoute(University);
  const ProtectedCategory = ProtectedRoute(Category);
  const ProtectedAddCategory = ProtectedRoute(AddCategory);
  const ProtectedAddCourse = ProtectedRoute(AddCourse);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RoutesWrapper>
            <Route path="/" element={ProtectedDashboard} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route path="/category" element={ProtectedCategory} />
            <Route path="/category/add" element={ProtectedAddCategory} />
            <Route path="/course" element={ProtectedCourse} />
            <Route path="/course/add" element={ProtectedAddCourse} />
            <Route path="/university" element={ProtectedUniveristy} />
            <Route path="/university/add" element={ProtectedAddUniversity} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/sign-out" element={<SignOut />} />
          </RoutesWrapper>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default Routes;
