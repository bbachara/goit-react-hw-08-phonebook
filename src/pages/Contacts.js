import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { fetchContacts, addContact } from '../redux/contacts/operations';
import { getContacts } from '../redux/contacts/selectors';
import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = ({ name, number }) => {
    dispatch(addContact({ name, number }));
  };

  return (
    <div className={css.container}>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <h1 className={css.title}>Phone Book</h1>
      <SearchBar />

      <ContactForm onSubmit={handleSubmit} />
      <div>{isLoading && 'Request in progress...'}</div>
      {error && <p>Error: {error}</p>}
      <ContactList contacts={items} />
    </div>
  );
}
