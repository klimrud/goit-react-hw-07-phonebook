import { ContactForm } from './ContactForm/ContactForm.jsx';
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { Toaster, toast } from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import { contactCreate, contactRemove } from 'store/contacts/slice.js';
import { filterChange } from 'store/filter/slice.js';

export const App = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const createContact = contact => {
    if (
      contacts.some(
        el => el.name === contact.name && el.number === contact.number
      )
    ) {
      toast.success(`${contact.name} is already in contacts`);
    } else {
      dispatch(contactCreate(contact));
    }
  };

  const removeContact = contactId => {
    dispatch(
      contactRemove(contacts.filter(contact => contact.id !== contactId))
    );
  };

  const changeFilter = filter => {
    dispatch(filterChange(filter));
  };

  const filteredContacts = () => {
    if (filter) {
      const visibleFriends = contacts.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
      return visibleFriends;
    } else {
      return contacts;
    }
  };

  return (
    <div>
      <h2>Phone book</h2>
      <ContactForm onSubmit={createContact} />

      <h2>Contacts</h2>
      {contacts.length > 1 && (
        <Filter filter={filter} onChange={changeFilter} />
      )}
      {contacts.length > 0 ? (
        <ContactList contacts={filteredContacts()} onDelete={removeContact} />
      ) : (
        <p className="title">No contacts</p>
      )}
      <Toaster
        position="top-left"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: 'rgb(47, 155, 255)',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </div>
  );
};
