import ContactForm from "components/Form/ContactForm";
import ContactsList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";
import { useSelector } from "react-redux";
import { isLogin } from "redux/auth/authSelectors";
import { Navigate } from "react-router";




export default function ContactsPage() {
  const isUserLogin = useSelector(isLogin)

// if (!isUserLogin) {
//   return <Navigate to="/"/>
// }

  return (
    <>
      <ContactForm />
      <ContactsList />
      <Filter/>
    </>
  )
}
