import { Route, Routes } from "react-router-dom";
import { useEffect, useDispatch, useNavigate, useSelector } from "react";
import Home from "./screens/Home/index";
import Playground from "./screens/Playground";
import Error404 from "./screens/Error404";
import { GlobalStyle } from "./style/global";
import ModalProvider from "./context/ModalContext";
import PlaygroundProvider from "./context/PlaygroundContext";
import { getUserDetails } from "./services/operations/profileAPI";
import PrivateRoute from "./components/PrivateRoute";

import Navbar from "./components/Navbar";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  

  return (
    <PlaygroundProvider>
      <ModalProvider>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/playground/:folderId/:playgroundId"
            element={
              <PrivateRoute>
                <Playground />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error404 />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </ModalProvider>
    </PlaygroundProvider>
  );
}

export default App;
