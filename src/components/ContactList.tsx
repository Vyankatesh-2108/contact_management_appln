import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, updateContact } from '../redux/contactsSlice';
import { RootState } from '../redux/store';
import { Contact, ContactStatus } from '../types/Contact';

/**
 * ContactList component
 * Displays a list of contacts with options to edit and delete each contact.
 */
const ContactList = () => {
  // Get the contacts from the Redux store
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  // State to keep track of the contact being edited
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  /**
   * Handles the edit button click event.
   * Sets the editingContact state to the selected contact.
   * @param contact The contact to be edited.
   */
  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
  };

  /**
   * Handles the save button click event.
   * Dispatches the updateContact action with the updated contact.
   * Resets the editingContact state to null.
   * @param updatedContact The updated contact object.
   */
  const handleSave = (updatedContact: Contact) => {
    dispatch(updateContact(updatedContact));
    setEditingContact(null);
  };

  /**
   * Handles the status change event.
   * Finds the contact by contactId and updates its status.
   * Dispatches the updateContact action with the updated contact.
   * @param contactId The ID of the contact to update.
   * @param status The new status value.
   */
  const handleStatusChange = (contactId: string, status: ContactStatus) => {
    const updatedContact = contacts.find((contact) => contact.id === contactId);
    if (updatedContact) {
      dispatch(updateContact({ ...updatedContact, status }));
    }
  };

  return (
    <ul className="space-y-4">
      {contacts.map((contact: Contact) => (
        <li
          key={contact.id}
          className="bg-white shadow-md rounded-md p-4 flex justify-between items-center"
        >
          {editingContact?.id === contact.id ? (
            // Render the editing form for the selected contact
            <>
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  value={editingContact.name}
                  onChange={(e) =>
                    setEditingContact({ ...editingContact, name: e.target.value })
                  }
                  className="px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  value={editingContact.email}
                  onChange={(e) =>
                    setEditingContact({ ...editingContact, email: e.target.value })
                  }
                  className="px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="tel"
                  value={editingContact.phone}
                  onChange={(e) =>
                    setEditingContact({ ...editingContact, phone: e.target.value })
                  }
                  className="px-4 py-2 border border-gray-300 rounded-md"
                />
                <div className="flex space-x-2">
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      value={ContactStatus.Active}
                      checked={editingContact.status === ContactStatus.Active}
                      onChange={() =>
                        setEditingContact({ ...editingContact, status: ContactStatus.Active })
                      }
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span>Active</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      value={ContactStatus.Inactive}
                      checked={editingContact.status === ContactStatus.Inactive}
                      onChange={() =>
                        setEditingContact({ ...editingContact, status: ContactStatus.Inactive })
                      }
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span>Inactive</span>
                  </label>
                </div>
              </div>
              <button
                onClick={() => handleSave(editingContact)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            </>
          ) : (
            // Render the contact details and action buttons
            <>
              <div className="space-y-1">
                <div className="text-lg font-bold">{contact.name}</div>
                <div>{contact.email}</div>
                <div>{contact.phone}</div>
                <div className="flex space-x-2">
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      value={ContactStatus.Active}
                      checked={contact.status === ContactStatus.Active}
                      onChange={() => handleStatusChange(contact.id, ContactStatus.Active)}
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span>Active</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      value={ContactStatus.Inactive}
                      checked={contact.status === ContactStatus.Inactive}
                      onChange={() => handleStatusChange(contact.id, ContactStatus.Inactive)}
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span>Inactive</span>
                  </label>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => dispatch(removeContact(contact.id))}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(contact)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;