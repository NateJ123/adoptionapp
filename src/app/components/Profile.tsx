"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Signup.module.css'; 
import Buttoner from './Button';

export default function Profile() {
    return (
        <div>
            {/* Profile Header */}
            <Image
                className={styles.image}
                alt="dog_picture"
                src="https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-an-image-of-an-adorable-dog-sticker-clipart-vector-png-image_6901476.png"
                width={100}
                height={100}
            />
            <h1 className={styles.center}> FUREVER HOME</h1>
            <h2 className={styles.center}> PROFILE</h2>
            
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
