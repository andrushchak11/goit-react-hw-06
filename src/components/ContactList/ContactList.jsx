import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
}

export default ContactList;
