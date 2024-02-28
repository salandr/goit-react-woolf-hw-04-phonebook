import React from 'react';

const ContactListItem = ({ contact, onRemoveContact }) => (
  <li key={contact.id}>
    {contact.name} : {contact.number}
    <button
      type="button"
      name="delete"
      onClick={() => onRemoveContact(contact.id)}
    >
      delete
    </button>
  </li>
);

const ContactList = ({ contacts, onRemoveContact }) => (
  <div>
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onRemoveContact={onRemoveContact}
        />
      ))}
    </ul>
  </div>
);

export default ContactList;
