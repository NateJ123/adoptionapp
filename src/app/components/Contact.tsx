"use client";
import React from 'react';
import styles from './Contact.module.css';
import Banner from './Banner';
import { useState } from 'react';
import { useEffect } from 'react';

type Center = {
    id: string;
    name: string;
    contact : {
        email: string;
        phoneNumber: string;
        address: string;
    }
}



export default function Contact () {
    const [selectedCenterId, setSelectedCenterId] = useState<string>('');
    const [contactInfo, setContactInfo] = useState<Center['contact'] | null>(null);
    const [message, setMessage] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [centers, setCenters] = useState<Center[]>([]);

    
    useEffect(() => {
        const fetchShelter = async () => {
            try {
                const response = await fetch('/api/shelter');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCenters(data.shelters);
                console.log(data);
                console.log(data.shelters);
            } catch (error) {
                console.log('Error from fetchShelter:', error);
            }
        };
        fetchShelter();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = event.target.value;
        setSelectedCenterId(selectedId);

        const selectedCenter = centers.find(center => center.name === selectedId);
        if (selectedCenter) {
            setContactInfo(selectedCenter.contact)
        } else {
            setContactInfo(null);
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!contactInfo) {
            alert('Please select an adoption center.');
            return;
        }
        alert('Form submitted! A email has been sent to: ' + contactInfo.email);
        const formData = {
            form_email: userEmail,
            to_email: contactInfo.email,
            subject: 'Inquiry about adoption',
            message: message,
        };
        setUserEmail('');
        setMessage('');
        setSelectedCenterId('');
        setContactInfo(null);
    }


    return (
        <div className={styles.body}>
            <Banner/>
            <h1>Contact a Center</h1>
            <div className={styles.select}>
            <label htmlFor='centers'>Choose a Center: </label>
            <select id='centers' name='centers' onChange={handleChange} value={selectedCenterId}>
                <option>-- Select Center --</option>
                {centers.map((center) => (
                    <option key={center.name} value={center.name}>
                        {center.name}
                    </option>
                ))}
            </select>
            </div>
            <div className={styles.contactInfo}>
                {contactInfo && (
                    <div>
                        <h2>Contact Information: </h2>
                        <p><strong>Email:</strong> {contactInfo.email}</p>
                        <p><strong>Phone Number:</strong> {contactInfo.phoneNumber}</p>
                        <p><strong>Address:</strong> {contactInfo.address}</p>
                        <div className={styles.form}>
                        <h2>Send a Message: </h2>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor='userEmail'> Your Email: </label>
                                    <input className={styles.input} type='email' id='userEmail' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required/>
                                </div>
                                <div>
                                    <label htmlFor='message'>Message: </label>
                                    <textarea className={styles.ta}id='message' value={message} onChange={(e) => setMessage(e.target.value)} required/>
                                </div>
                                <button className={styles.button} type='submit'>Send Email</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}