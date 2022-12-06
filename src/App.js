
import { BrowserRouter,Route, Routes } from "react-router-dom";

import AuthProvider from "./store/AuthProvider";
import Layout from "./UI/Layout/layout";
import Home from "./pages/home";

import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
