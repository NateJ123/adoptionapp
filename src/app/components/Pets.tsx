"use client";

import Pet from "./Pet";
import styles from './Pets.module.css';

type Pet = {
    id: number;
    name: string;
    imageUrl: string;
    age: string;
    shelter: string;
    description: string;
};

type PetProps = {
    pets: Pet[];
};

export default function Pets({ pets }: PetProps) {
    return (
        <div className={styles.petList}>
            {pets.map((pet) => (
                <Pet key={pet.id} pet={pet} />
            ))}
        </div>
    );
}
