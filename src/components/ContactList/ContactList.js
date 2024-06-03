// src/components/ContactList/ContactList.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { fetchContacts } from '../../redux/contacts/operations';
import { getContacts, getSearchQuery } from '../../redux/selectors';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, searchQuery) => {
  if (!searchQuery) {
    return contacts;
  }

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items: contacts, isLoading, error } = useSelector(getContacts);
  const searchQuery = useSelector(getSearchQuery);
  const visibleContacts = getVisibleContacts(contacts, searchQuery);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 className={css.title}>List of Contacts</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <li className={css.listItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Contact } from '../Contact/Contact';
// import { fetchContacts } from '../../redux/contacts/operations';
// import {
//   getContacts,
//   getStatusFilter,
//   getSearchQuery,
// } from '../../redux/contacts/selectors';
// import { statusFilters } from '../../redux/constants'; // Ensure this import
// import css from './ContactList.module.css';

// const getVisibleContacts = (contacts, statusFilter, searchQuery) => {
//   let filteredContacts = contacts;

//   if (searchQuery) {
//     filteredContacts = filteredContacts.filter(contact =>
//       contact.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   }

//   switch (statusFilter) {
//     case statusFilters.active:
//       return filteredContacts.filter(contact => !contact.completed);
//     case statusFilters.completed:
//       return filteredContacts.filter(contact => contact.completed);
//     default:
//       return filteredContacts;
//   }
// };

// export const ContactList = () => {
//   const dispatch = useDispatch();
//   const { items: contacts, isLoading, error } = useSelector(getContacts);
//   const statusFilter = useSelector(getStatusFilter);
//   const searchQuery = useSelector(getSearchQuery);
//   const visibleContacts = getVisibleContacts(
//     contacts,
//     statusFilter,
//     searchQuery
//   );

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h2 className={css.title}>List of Contacts</h2>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       <ul className={css.list}>
//         {visibleContacts.map(contact => (
//           <li className={css.listItem} key={contact.id}>
//             <Contact contact={contact} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

//===================================
// import { useSelector } from 'react-redux';
// import { Contact } from '../Contact/Contact';
// import { selectAllContacts } from '../../redux/contacts/selectors';
// import css from './ContactList.module.css';

// export const ContactList = () => {
//   const contacts = useSelector(selectAllContacts);

//   return (
//     <ul className={css.list}>
//       {contacts.map(({ id, name, number }) => (
//         <li key={id}>
//           <Contact id={id} name={name} number={number} />
//         </li>
//       ))}
//     </ul>
//   );
// };
//=====================================

// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Contact } from '../Contact/Contact';
// import { fetchContacts } from '../../redux/operations';
// import {
//   getContacts,
//   getStatusFilter,
//   getSearchQuery,
// } from '../../redux/selectors';
// import { statusFilters } from '../../redux/constants';
// import css from './ContactList.module.css';

// const getVisibleContacts = (contacts, statusFilter, searchQuery) => {
//   let filteredContacts = contacts;

//   if (searchQuery) {
//     filteredContacts = filteredContacts.filter(contact =>
//       contact.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   }

//   switch (statusFilter) {
//     case statusFilters.active:
//       return filteredContacts.filter(contact => !contact.completed);
//     case statusFilters.completed:
//       return filteredContacts.filter(contact => contact.completed);
//     default:
//       return filteredContacts;
//   }
// };

// export const ContactList = () => {
//   const dispatch = useDispatch();
//   const { items: contacts, isLoading, error } = useSelector(getContacts);
//   const statusFilter = useSelector(getStatusFilter);
//   const searchQuery = useSelector(getSearchQuery);
//   const visibleContacts = getVisibleContacts(
//     contacts,
//     statusFilter,
//     searchQuery
//   );

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h2 className={css.title}>List of Contacts</h2>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       <ul className={css.list}>
//         {visibleContacts.map(contact => (
//           <li className={css.listItem} key={contact.id}>
//             <Contact contact={contact} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
