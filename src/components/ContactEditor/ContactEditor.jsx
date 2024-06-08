// import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/contacts/operations';
// import css from './ContactEditor.module.css';

// export const ContactEditor = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const name = form.elements.name.value;
//     const number = form.elements.number.value;
//     if (name !== '' && number !== '') {
//       dispatch(addContact({ name, number }));
//       form.reset();
//       return;
//     }
//     alert('Name and number cannot be empty. Enter both values!');
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <input name="name" className={css.input} placeholder="Name" />
//       <input name="number" className={css.input} placeholder="Phone Number" />
//       <button type="submit" className={css.button}>
//         Add contact
//       </button>
//     </form>
//   );
// };

//   return (
//     <div>
//       <h2 className={css.title}>Add Contacts</h2>
//       <form className={css.form} onSubmit={handleSubmit}>
//         {error && <p className={css.error}>{error}</p>}
//         <input
//           className={css.field}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces."
//           placeholder="Enter contact name..."
//           required
//         />
//         <input
//           className={css.field}
//           type="tel"
//           name="phone"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           placeholder="Enter phone number..."
//           required
//         />
//         <Button type="submit">Add contact</Button>
//       </form>
//     </div>
//   );
// };
