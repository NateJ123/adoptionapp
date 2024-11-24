"use client";
import Banner from './Banner';
import React, { useEffect, useState } from "react";
import Pets from "./Pets";
import styles from "./Favorites.module.css";
type Pet = {
    id: number;
    name: string;
    imageUrl: string;
    age: string;
    shelter: string;
    description: string;
};

export default function Favorites() {
    const [favorites, setFavorites] = useState<Pet[]>([]);

    useEffect(() => {
        // Retrieve full pet objects from localStorage
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");

        // Only update state if storedFavorites is valid
        if (Array.isArray(storedFavorites)) {
            setFavorites(storedFavorites.filter((pet) => pet && pet.id)); // Remove invalid pets
        }
    }, []);

    return (
        <div>
            <Banner/>
            <h1 className={styles.h1}>Favorites</h1>
            {favorites.length > 0 ? (
                    <Pets pets = {favorites}/>
            ) : (
                <p>You don't have any favorite pets yet!</p>
            )}
        </div>
    );
}
