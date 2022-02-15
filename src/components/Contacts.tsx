import React, { useState } from 'react';
import Contact from './Contact';

interface IContact {
    name: string;
    email: string;
}

const Contacts = () => {
    const [contact, setContact] = useState<IContact>({ name: '', email: '' });
    const [contactList, setContactList] = useState<IContact[]>([]);

    const storeContacts = () => {
        setContactList([...contactList, contact]);
        setContact({ name: '', email: '' });
    };

    const setChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handelRemove = (email: string) => {
        const newContactList = contactList.filter(
            (contact) => contact.email !== email
        );

        setContactList(newContactList);
    };

    return (
        <div>
            <h2>☎️ Contact List</h2>
            <input
                type="text"
                value={contact.name}
                onChange={setChange}
                placeholder="Contact Email"
                name="name"
            />
            <input
                type="email"
                value={contact.email}
                onChange={setChange}
                placeholder="Contact Email"
                name="email"
            />

            <button onClick={storeContacts}> Add</button>

            {contactList.map((con, index) => (
                <Contact
                    key={index}
                    name={con.name}
                    email={con.email}
                    handelRemove={handelRemove}
                />
            ))}
        </div>
    );
};

export default Contacts;
