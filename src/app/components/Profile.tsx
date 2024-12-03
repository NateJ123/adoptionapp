"use client";

import React from 'react';
import styles from './Profile.module.css'; 
import Banner from './Banner';
import { useEffect, useState } from 'react';
import Buttoner from './Button';
import { useRouter } from 'next/navigation';

type User = {
    username: string,
    password:string,
    phonenumber:string,
    email:string,
    address:string
}
export default function Profile() {
    const router = useRouter();
    const [user, setUser] = useState<User | undefined>(undefined);
    useEffect(() => {
        const savedUser = localStorage.getItem('username');
        const fetchUser = async () => {
            try {
                const response = await fetch('/api/users?username=' + savedUser);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUser(data.user);
            } catch (error) {
                console.log('Error from fetchPets:', error);
            }
        };
        if (savedUser) {
            fetchUser();
        }
    }, []);

    const handleChange = () => {
        router.push('/profileUpdate');
    };
    console.log(user);
    if (!user) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <Banner />
            <h1 className={styles.header}>Profile</h1>
            <form className={styles.flexer}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Username:</label>
                    <input
                        className={styles.input}
                        type="text"
<<<<<<< Updated upstream
                        value="JohnDoe"
=======
                        value={user.username} 
>>>>>>> Stashed changes
                        readOnly

                    />
                    
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Password:</label>
                    <input
                        className={styles.input}
                        type="password"
<<<<<<< Updated upstream
                        value="********"
=======
                        value={user.password}
>>>>>>> Stashed changes
                        readOnly

                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Phone Number:</label>
                    <input
                        className={styles.input}
                        type="text"
<<<<<<< Updated upstream
                        value="(123) 456-7890"
=======
                        value={user.phonenumber}
>>>>>>> Stashed changes
                        readOnly

                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Email:</label>
                    <input
                        className={styles.input}
                        type="email"
                        value={user.email}
                        readOnly

                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Address:</label>
                    <input
                        className={styles.input}
                        type="text"
<<<<<<< Updated upstream
                        value="123 Main St, Anytown, USA"
                        readOnly
                    />
                </div>
            </form>
=======
                        value={user.address}
                        readOnly
                    />
                </div>
                <Buttoner className = "button" type = 'button' onClick={handleChange}> Edit Profile </Buttoner>
                </form>
            
>>>>>>> Stashed changes
        </div>
    );
}
