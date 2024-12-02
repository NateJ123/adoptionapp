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

    const handleSubmit = async (event: React.FormEvent) => {
        
        event.preventDefault();
        
        const response = await fetch('/api/pet', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            }, body: JSON.stringify({...petData, id: Date.now()})
        });
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }

        router.push(`/homepage`);
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
                <input
                    id="description"
                    placeholder="A description of your pet!"
                    value={petData.description}
                    onChange={handleChange}
                    className={styles.textarea}
                />
            </div>
            <Buttoner className = "submit" type = 'button' onClick = {handleSubmit}> Post A Pet </Buttoner>
            </form>
        </div>
    )
}
