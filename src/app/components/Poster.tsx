"use client";
import React from 'react';
import Image from 'next/image';
import styles from './Poster.module.css';
import Buttoner from './Button';
import Banner from './Banner';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

type Pet = {
    id: number;
    name: string;
    imageUrl: string;
    age: string;
    shelter: string;
    description: string;
};

type PetProps = {
    addPet: (pet: Pet) => void;
    style?: React.CSSProperties;
};


export default function Poster({addPet, style }: PetProps) {
   
    const [petData, setPetData] = useState({
        name: '',
        imageUrl: '',
        age: '',
        shelter: '',
        description: '',
    });
      
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setPetData({ ...petData, [id]: value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    
        const storedPets = JSON.parse(localStorage.getItem("pets") || "[]");
        const newId = storedPets.length > 0 ? storedPets[storedPets.length - 1].id + 1 : 1;
    
        const newPet: Pet = { id: newId, ...petData } as Pet;
    
        const updatedPets = [...storedPets, newPet];
        localStorage.setItem("pets", JSON.stringify(updatedPets));
    
        // Pass new pet as query parameter and redirect
        router.push(`/homepage?newPet=${encodeURIComponent(JSON.stringify(newPet))}`);
    };
    
    return (
        <div>
        <Banner/>
        <h1 className={styles.header}>Post a Pet</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formField}>
                <input
                    id="name"
                    type="text"
                    placeholder="Name of Pet"
                    value={petData.name}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.formField}>
                <input
                    id="imageUrl"
                    type="text"
                    placeholder="Image URL"
                    value={petData.imageUrl}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.formField}>
                <input
                    id="age"
                    type="text"
                    placeholder="Age (e.g., '3 months')"
                    value={petData.age}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.formField}>
                <input
                    id="shelter"
                    type="text"
                    placeholder="Shelter or Address"
                    value={petData.shelter}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.formField}>
                <textarea
                    id="description"
                    placeholder="A description of your pet!"
                    value={petData.description}
                    onChange={handleChange}
                    rows={3}
                    className={styles.textarea}
                />
            </div>
            <Buttoner className = "submit" type = 'button' onClick = {handleSubmit}> Post A Pet </Buttoner>
            </form>
        </div>
    )
}
