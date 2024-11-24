"use client"
import styles from './Nav.module.css';
import Buttoner from './Button';
import { useRouter } from 'next/navigation';

export default function Nav() {
    const router = useRouter();
    const home = () => {
        router.push('/homepage')
    };
    const favorite = () => {
        router.push('/favorites')
    };
    const addAPet = () => {
        router.push('/postAPet')
    };
    const contactCenter = () => {
        router.push('/contact')
    };
    const profile = () => {
        router.push('/profile')
    };
    return (
        <div className={styles.nav}>
            <Buttoner type='button' className='home-button' onClick={home}> Home </Buttoner>
            <Buttoner type='button' className='fav-button' onClick={favorite}> Favorites </Buttoner>
            <Buttoner type='button' className='add-button' onClick={addAPet}> Post a Pet </Buttoner>
            <Buttoner type='button' className='contact-button' onClick={contactCenter}> Contact a Center </Buttoner>
            <Buttoner type='button' className='profile-button' onClick={profile}> Profile </Buttoner>
        </div>
    );
}