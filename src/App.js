
import { BrowserRouter,Route, Routes } from "react-router-dom";

import AuthProvider from "./store/AuthProvider";
import Layout from "./UI/Layout/layout";
import Home from "./pages/home";
import HelpPage from "./pages/helpPage";
import CreateArticle from "./pages/createArticle";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";
import GetArticleByID from "./pages/getArticleByID";
import AddArticleComment from "./pages/AddArticleComment";
import GetArticleComments from "./pages/getArticleComments";
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/help/article/:id" element={<GetArticleByID />} />
            <Route path="/createArticleComment/:id" element={<AddArticleComment />} />
            <Route path="/help/createArticle" element={<CreateArticle />} />
            <Route path="/help/article/comments/:id" element={<GetArticleComments />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
