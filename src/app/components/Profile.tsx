"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Signup.module.css'; 
import Banner from './Banner';
import Buttoner from './Button';

export default function Profile() {
    return (
        <div>
            <Banner/>
            {/* Profile Header */}
            
            <h1 className={styles.center}> PROFILE</h1>
            
            {/* Profile Information */}
            <form className={styles.flexer}>
                <div>
                    <label>Username:</label>
                    <input
                        className={styles.input}
                        type="text"
                        value="JohnDoe" 
                        readOnly
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        className={styles.input}
                        type="password"
                        value="********" 
                        readOnly
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        className={styles.input}
                        type="text"
                        value="(123) 456-7890" 
                        readOnly
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        className={styles.input}
                        type="email"
                        value="johndoe@example.com"
                        readOnly
                    />
                </div>
                <div>
                    <label>Address:</label>
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
