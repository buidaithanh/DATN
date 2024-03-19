import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, ActivationPage } from "./routes/Routes";
import { HomePage, UploadFile, ManageDocs as UserManageDocs } from "./pages";
import { AdminViewDoc, ManageDocs } from "./pages/admin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { server } from "./server";
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
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route path="/upload-file" element={<UploadFile />} />
        <Route path="/manage-docs" element={<UserManageDocs />} />
        <Route path="/admin/manage-docs" element={<ManageDocs />} />
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
