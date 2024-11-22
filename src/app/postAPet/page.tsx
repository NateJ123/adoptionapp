"use client";

import { useState } from "react";
import Poster from "../components/Poster";

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
};

export default function Home() {
    const [pets, setPets] = useState<Pet[]>([]);

    const addPet = (newPet: Pet) => {
        setPets((prevPets) => [...prevPets, newPet]);
    };

    return (
        <div>
            <Poster addPet={addPet} />
        </div>
    );
}
