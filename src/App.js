
import { BrowserRouter,Route, Routes } from "react-router-dom";

import AuthProvider from "./store/AuthProvider";
import Layout from "./UI/Layout/layout";
import Home from "./pages/home";

import MyTickets from "./pages/mytickets";
import SigninPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/mytickets" element={<MyTickets />} />
            <Route path="/login" element={<SigninPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
