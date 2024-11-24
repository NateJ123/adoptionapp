"use client";

import React, { useEffect, useState } from "react";

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
            <h1>Favorites</h1>
            {favorites.length > 0 ? (
                <ul>
                    {favorites.map((pet) => (
                        <li key={pet.id}> {/* Ensure unique key */}
                            <img
                                src={pet.imageUrl}
                                alt={pet.name}
                                style={{ width: "100px", height: "100px" }}
                            />
                            <h3>{pet.name}</h3>
                            <p>Age: {pet.age}</p>
                            <p>Shelter: {pet.shelter}</p>
                            <p>{pet.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>You don't have any favorite pets yet!</p>
            )}
        </div>
    );
}
