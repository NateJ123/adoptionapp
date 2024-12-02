"use client";

import React from 'react';
import styles from './Profile.module.css'; 
import Banner from './Banner';

export default function Profile() {
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
                        value="JohnDoe"
                        readOnly
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Password:</label>
                    <input
                        className={styles.input}
                        type="password"
                        value="********"
                        readOnly
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Phone Number:</label>
                    <input
                        className={styles.input}
                        type="text"
                        value="(123) 456-7890"
                        readOnly
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Email:</label>
                    <input
                        className={styles.input}
                        type="email"
                        value="johndoe@example.com"
                        readOnly
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Address:</label>
                    <input
                        className={styles.input}
                        type="text"
                        value="123 Main St, Anytown, USA"
                        readOnly
                    />
                </div>
            </form>
        </div>
    );
}
