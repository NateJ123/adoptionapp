"use client"
import Image from 'next/image';
import styles from './Banner.module.css';
import Buttoner from './Button';
import { useRouter } from 'next/navigation';
import Nav from './Nav';
import { doLogout } from './Signinpart';

export default function Banner() {
    const router = useRouter();

    return (
        <div>
            <div className={styles.banner}>
                <Image className = {styles.image} alt = 'dog_picture' src = 'https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-an-image-of-an-adorable-dog-sticker-clipart-vector-png-image_6901476.png' width = {100} height = {100}/>
                <h1 className={styles.h1}> FUREVER HOME</h1>
                <Buttoner type="button" className={styles.logoutButton} onClick={doLogout}> Log Out </Buttoner>
            </div>
            <Nav/>
        </div>
    );
}