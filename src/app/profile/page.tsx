import React from 'react';
import Profile from '../components/Profile';
import { SessionProvider } from 'next-auth/react';

export default function ProfilePage() { 
    return (
        <SessionProvider>
            <Profile />
        </SessionProvider>
    );
}
