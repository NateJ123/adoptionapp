"use client";

import Image from "next/image";
import styles from "./Pet.module.css";
import Card from "./Card";
import React, { useState, useEffect } from "react";


type PetProps = {
    pet: {
        id: number;
        name: string;
        imageUrl: string;
        age: string;
        shelter: string;
        description: string;
    };
};

export default function Pet({ pet }: PetProps) {
    const [isFavorited, setIsFavorited] = useState(false);
    const username = localStorage.getItem('username');
    if (!username) {
        console.log('no user')
    } else {
        useEffect(() => {
                const favorites = JSON.parse(localStorage.getItem(username) || "[]");
                const isAlreadyFavorited = favorites.some((fav: any) => fav.id === pet.id);
                setIsFavorited(isAlreadyFavorited);
            }, [pet.id]);
    
        const toggleFavorite = () => {
            setIsFavorited(!isFavorited);
        
            const favorites = JSON.parse(localStorage.getItem(username) || "[]");
            if (!isFavorited) {
                favorites.push(pet); // Add the full pet object
            } else {
                const updatedFavorites = favorites.filter((fav: any) => fav.id !== pet.id); // Remove pet
                localStorage.setItem(username, JSON.stringify(updatedFavorites));
                return; // Exit early after updating localStorage
            }
            localStorage.setItem(username, JSON.stringify(favorites));
        };
   
    return (
        <Card className={styles.pet}>
            <Image
                className={styles.petImg}
                src={pet.imageUrl}
                alt={pet.name}
                width={200}
                height={200}
                priority
            />
            <div className={styles.content}>
                <div className={styles.basic}>
                    <h2> Name: {pet.name} </h2>
                    <h3> Age: {pet.age} </h3>
                    <h3> Currently at: {pet.shelter} </h3>
                </div>
                <div className={styles.desc}>
                    <p> {pet.description} </p>
                </div>
            </div>
            <button className={styles.favoriteButton} onClick={toggleFavorite}>
                {isFavorited ? "Unfavorite" : "Favorite"}
            </button>
        </Card>
    );
    }
}
