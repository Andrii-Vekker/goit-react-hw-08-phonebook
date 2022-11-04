// import ContactForm from "../Form/ContactForm";
// import ContactsList from "../ContactsList/ContactsList";
// import Filter from "../Filter/Filter";
// import { ToastContainer } from 'react-toastify';
import UserRoutes from "./UserRoutes";
import { Container } from "./App.styled";


import Navigation from "components/Navigation/Navigation";

export default function App() {
  return (
    <Container>
      <Navigation />
      <UserRoutes />
    </Container>
  );
};