import { ImPhone } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contactData: { id, name, number } }) {
  const dispatch = useDispatch();

  const delContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <div className={css.person}>
        <div className={css.personName}>
          <IoPerson className={css.icon} />
          <p>{name}</p>
        </div>
        <div className={css.personNumber}>
          <ImPhone className={css.icon} />
          <p>{number}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          delContact(id);
        }}
        className={css.button}
      >
        Delete
      </button>
    </>
  );
}
