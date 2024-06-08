import { Contact } from '../Contact/Contact';

import { useSelector } from 'react-redux';

import { getContacts, getSearchQuery } from '../../redux/contacts/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getSearchQuery);

  const filteredContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2 className={css.title}>List of Contacts</h2>

      {filteredContacts.length > 0 ? (
        <div className={css.container}>
          {filteredContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </div>
      ) : (
        <p className={css.text}>No contacts found</p>
      )}
    </div>
  );
};
