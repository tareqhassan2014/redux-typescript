import React from 'react';

interface IProps {
    name: string;
    email?: string;
    handelRemove: (email: string) => void;
}

const Contact = ({ name, email = 'N/A', handelRemove }: IProps) => {
    return (
        <div>
            <p>
                Name: <strong>{name}</strong>
            </p>
            <p>
                Email: <strong>{email}</strong>
            </p>
            <button onClick={() => handelRemove(email)}>Remove</button>
        </div>
    );
};

export default Contact;
