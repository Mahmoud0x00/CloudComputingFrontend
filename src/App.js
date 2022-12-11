
import { BrowserRouter,Route, Routes } from "react-router-dom";

import AuthProvider from "./store/AuthProvider";
import Layout from "./UI/Layout/layout";
import Home from "./pages/home";

import MyTickets from "./pages/mytickets";
import SigninPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Logout from "./pages/logout";
import Createticket from "./pages/Createticket";
import Myaccount from "./pages/Myaccount";
import ViewTicket from "./pages/ViewTicket";

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
            <Route path="/logout" element={<Logout />} />
            <Route path="/createticket" element={<Createticket />} />
            <Route path="/myaccount" element={<Myaccount />} />
            <Route path="/tickets/:ticketId" element={<ViewTicket />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
