"use client";
import React from 'react';
import Banner from './Banner';
import Pet from './Pet';
import Pets from './Pets';
import { useEffect, useState } from 'react';

type Pet = {
    id: number;
    name: string;
    imageUrl: string;
    age: string;
    shelter: string;
    description: string;
};

export default function Homepage () {

    const [Petser, setPetser] = useState<Pet[]>([]);
    
    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await fetch('/api/pet');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPetser(data.pets);
            } catch (error) {
                console.log('Error from fetchPets:', error);
            }
        };
        fetchPets();
    }, []);
    
    return (
        <div>
            <Banner/>
            <Pets pets={Petser}/>
        </div>  
    );
}
