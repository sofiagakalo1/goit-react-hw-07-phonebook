import ContactsListItem from './ContactsListItem';
import { getAllContacts } from '../../../redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from '../../../redux/contacts/contacts-operations';
import css from './contactsList.module.css';
import {
  getFilter,
  getFilteredContacts,
} from '../../../redux/filter/filter-selectors';

const ContactsList = () => {
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(filter, contacts);
  // console.log(filteredContacts);
  // console.log(contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const allContacts = filteredContacts.map(({ id, name, number }) => (
    <ContactsListItem key={id} id={id} name={name} number={number} />
  ));
  return <ul className={css.ul}>{allContacts}</ul>;
};

export default ContactsList;
