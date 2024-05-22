import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import ContactList from '../components/ContactList';
import { ContactStatus } from '../types/Contact';
import Sidebar from '../components/Sidebar';

/**
 * Contacts component
 * Displays a form to add new contacts and a list of existing contacts.
 */
const Contacts = () => {
  /**
   * State variables for the contact form fields.
   * @type {string} name - The name of the contact.
   * @type {string} email - The email of the contact.
   * @type {string} phone - The phone number of the contact.
   * @type {ContactStatus} status - The status of the contact.
   */
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [status, setStatus] = useState<ContactStatus>(ContactStatus.Active);

  /**
   * Dispatch function from the Redux store.
   * @type {Function} dispatch - The dispatch function from the Redux store.
   */
  const dispatch = useDispatch();

  /**
   * Handles the form submission event.
   * Dispatches the addContact action with the form data and resets the form fields.
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addContact({ name, email, phone, status }));
    setName('');
    setEmail('');
    setPhone('');
    setStatus(ContactStatus.Active);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8 max-h-screen overflow-hidden overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Contacts</h1>
        <form className="flex flex-col gap-4 mb-8" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded"
          />
          <div className="flex items-center space-x-2">
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="status"
                value={ContactStatus.Active}
                checked={status === ContactStatus.Active}
                onChange={() => setStatus(ContactStatus.Active)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span>Active</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="status"
                value={ContactStatus.Inactive}
                checked={status === ContactStatus.Inactive}
                onChange={() => setStatus(ContactStatus.Inactive)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span>Inactive</span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Contact
          </button>
        </form>
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;