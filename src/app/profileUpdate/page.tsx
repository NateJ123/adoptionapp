import React from 'react';
import UpdateProfile from '../components/UpdateProfile';
import { SessionProvider } from 'next-auth/react';

export default function ProfilePage() { 
    return (
        <UpdateProfile />
    );
}
