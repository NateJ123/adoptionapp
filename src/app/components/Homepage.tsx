"use client";
import React from 'react';
import styles from './Homepage.module.css';
import Banner from './Banner';
import Pet from './Pet';
import Pets from './Pets';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Poster from './Poster';
type Pet = {
    id: number;
    name: string;
    imageUrl: string;
    age: string;
    shelter: string;
    description: string;
};


const PET_INIT: Pet[] = [
    {
        id: 1,
        name: 'Winston',
        imageUrl: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg',
        age: '3 months',
        shelter: 'Athenspets',
        description: 'Winston is a 3 month year old puppy, potty-trained, good with kids, energetic, and playful.',
    },
    {
        id: 2,
        name: 'Shadow',
        imageUrl: 'https://preview.redd.it/this-cat-looks-like-a-square-pillow-v0-8qsgsnbxqj2b1.jpg?width=1080&crop=smart&auto=webp&s=1b28589a5351394e67f9a552fbbf0d7bce0c075c',
        age: '2 years',
        shelter: 'Athenspets',
        description: 'black cat, 2 years',
    },
    {
        id: 3,
        name: 'Perry',
        imageUrl: 'https://i.pinimg.com/originals/6d/3b/96/6d3b96ede33a7d7b7f9b861877112d4d.png',
        age: 'Unkown',
        shelter: 'None',
        description: 'secret agent',
    }
];

export default function Homepage () {

    const [Petser, setPetser] = useState<Pet[]>(PET_INIT);

    const adderPet = (newPet: Pet) => {
        setPetser((startPets => [...startPets, {...newPet, id:(startPets.length + 1)}]))
    }
    return (
        <div>
            <Banner/>
            <Pets pets={Petser}/>
            <div className = "hidden">
            <Poster addPet = {adderPet}/>
            </div>
        </div>  
    );
}