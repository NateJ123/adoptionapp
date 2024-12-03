"use client";
import React from 'react';
import Image from 'next/image';
import Button from './Button';
import styles from './Top_Image.module.css';
import { useRouter } from 'next/navigation';

//image and button on top of home page non signed in
export default function Top_Image() {
    const router = useRouter();
    const signup = () => {
        router.push('/signup');
    }
    return( 
        <div className = {styles.flexer}>
            <Image className = {styles.image} alt = 'dog_picture' src = 'https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-an-image-of-an-adorable-dog-sticker-clipart-vector-png-image_6901476.png' width = {100} height = {100}/>
            <Button className = {styles.signup} type = 'button' onClick = {signup}  > Sign Up</Button>
        </div>
    )
}