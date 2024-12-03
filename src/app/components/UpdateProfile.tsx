"use client";

import React, { FormEvent } from 'react';
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
export default function UpdateProfile() {
    const bcrypt = require('bcryptjs');
    const router = useRouter();
    const [user,setuser] = useState({
        password:'',
        phonenumber:'',
        email:'',
        address:''
    })

    const handleChange = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const hash = await bcrypt.hash(user.password,10);
        const username = localStorage.getItem('username');
        const response = await fetch('/api/users?username='+username, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },body: JSON.stringify({
                password: hash,
                phonenumber: user.phonenumber,
                email: user.email,
                address: user.address
            })
        });
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json();

        router.push('/profile')
    }

    const changer = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { id, value } = e.target;
        setuser(previousState => ({
            ...previousState,
            [id]: value
        }));

    };
    return (
        <div>
            <Banner/>
            {/* Profile Header */}
            
            <h1 className={styles.center}> PROFILE</h1>
            
            {/* Profile Information */}
            <form className={styles.flexer} onSubmit={handleChange}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Password:</label>
                    <input
                        className={styles.input}
                        type="password"
                        onChange={changer}
                        value={user.password}
                        id='password'
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Phone Number:</label>
                    <input
                        className={styles.input}
                        type="text"
                        onChange={changer}
                        value={user.phonenumber}
                        id='phonenumber'
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Email:</label>
                    <input
                        className={styles.input}
                        type="email"
                        onChange={changer}
                        value={user.email}
                        id='email'
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Address:</label>
                    <input
                        className={styles.input}
                        type="text"
                        onChange={changer}
                        value={user.address}
                        id='address'
                    />
                </div>
                <Buttoner className = "button" type = 'submit'> Submit Changes </Buttoner>
                </form>
            
        </div>
    );
}
