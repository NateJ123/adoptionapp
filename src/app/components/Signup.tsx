"use client";
import React, { FormEvent } from 'react';
import Image from 'next/image';
import styles from './Signup.module.css';
import Buttoner from './Button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';



export default function Signup() {
    const router = useRouter();
    const bcrypt = require('bcryptjs');

const [user,setuser] = useState({
    username: '',
    password:'',
    phonenumber:'',
    email:'',
    address:''
})

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const hash = await bcrypt.hash(user.password,10);
        
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            }, body: JSON.stringify({...user, password:hash})
        });
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }


        router.push('/')
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { id, value } = e.target;
        setuser(previousState => ({
            ...previousState,
            [id]: value
        }));

    };
        
    return (
        <div>
        <Image className = {styles.image} alt = 'dog_picture' src = 'https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-an-image-of-an-adorable-dog-sticker-clipart-vector-png-image_6901476.png' width = {100} height = {100}/>
        <h1 className = {styles.center}> FUREVER HOME</h1>
        <h2 className = {styles.center}> SIGN UP</h2>
        <form className = {styles.flexer} onSubmit={handleSubmit}>
            <input className={styles.input} type = "text" placeholder = "USERNAME" value = {user.username} id = "username" onChange = {handleChange}></input>
            <input className={styles.input} type = "text" placeholder = "PASSWORD" value = {user.password} id = "password" onChange = {handleChange}></input>
            <input className={styles.input} type = "text" placeholder = "PHONE NUMBER" value = {user.phonenumber} id = "phonenumber" onChange = {handleChange}></input>
            <input className={styles.input} type = "text" placeholder = "EMAIL" value = {user.email} id = "email" onChange = {handleChange}></input>
            <input className={styles.input} type = "text" placeholder = "ADDRESS" value = {user.address} id = "address" onChange = {handleChange}></input>
            <Buttoner className = "button" type = 'submit'> Sign Up </Buttoner>
        </form>

        </div>
    )
}