"use client";
import React from 'react';
import Buttoner from './Button';
import styles from './Signinpart.module.css'
import { useRouter } from 'next/navigation';

//This is the two headings and inputs and button on main page
export default function Signinpart () {
    const router = useRouter();
    const signin = () => {
        router.push('/homepage');
    }
    return(
        <div>
            <div className = {styles.center}>
                <h1> FUREVER HOME</h1>
                <h2> SIGN IN</h2>
            </div>
            <form className = {styles.flexman}>
                <input type = "text" className = {styles.border} placeholder = "Username"/>
                <input type = "text" className = {styles.border} placeholder = "Password"/> 
                <Buttoner type = "button" className = "signin-button" onClick = {signin}> Sign In</Buttoner>
            </form>
        </div>
    )
}