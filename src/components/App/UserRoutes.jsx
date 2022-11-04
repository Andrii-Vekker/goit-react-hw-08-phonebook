import { Routes, Route } from "react-router-dom";
import NotFoundPage from "components/pages/NotFoundPage/NotFoundPage";
import RegisterPage from "components/pages/RegisterPage/RegisterPage";
import LoginPage from "components/pages/LoginPage/LoginPage";
import ContactsPage from "components/pages/ContactsPage/ContactsPage";



export default function UserRoutes() {
  return (
     <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
