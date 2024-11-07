    "use client";
    import React from 'react';
    import Image from 'next/image';
    import styles from './Signup.module.css';
    import Buttoner from './Button';
    import Link from 'next/link';
    import { useRouter } from 'next/navigation';
    export default function Signup() {
        const router = useRouter();
        const handleSubmit = () => {
            
            router.push('/')
        }
        
        return (
            <div>
            <Image className = {styles.image} alt = 'dog_picture' src = 'https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-an-image-of-an-adorable-dog-sticker-clipart-vector-png-image_6901476.png' width = {100} height = {100}/>
            <h1 className = {styles.center}> FUREVER HOME</h1>
            <h2 className = {styles.center}> SIGN UP</h2>
            <form className = {styles.flexer}>
                <input type = "text" placeholder = "USERNAME"></input>
                <input type = "text" placeholder = "PASSWORD"></input>
                <input type = "text" placeholder = "PHONE NUMBER"></input>
                <input type = "text" placeholder = "EMAIL"></input>
                <input type = "text" placeholder = "ADDRESS"></input>
                <Buttoner className = "submit" type = 'button' onClick = {handleSubmit}> Sign Up </Buttoner>
            </form>

            </div>
        )
    }