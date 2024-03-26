import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, ActivationPage } from "./routes/Routes";
import {
  AboutUs,
  DocDetail,
  HomePage,
  UploadFile,
  ManageDocs as UserManageDocs,
} from "./pages";
import {
  AdminViewDoc,
  ManageDocs,
  ManageUser,
  Chat,
  Payment,
} from "./pages/admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";
function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/document/:docId" element={<DocDetail />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route path="/upload-file" element={<UploadFile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/manage-docs" element={<UserManageDocs />} />
        <Route path="/admin/manage-docs" element={<ManageDocs />} />
        <Route path="/admin/manage-user" element={<ManageUser />} />
        <Route path="/admin/manage-chat" element={<Chat />} />
        <Route path="/admin/manage-payment" element={<Payment />} />
        <Route
          path="/admin/manage-docs/review/:docId"
          element={<AdminViewDoc />}
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </BrowserRouter>
  );
}

export default App;
