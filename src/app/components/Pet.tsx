"use client"
import Image from 'next/image';
import styles from './Pet.module.css';
import Card from './Card';

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
export default function Pet({pet}: PetProps) {
    return (
        <Card className={styles.pet}>
            <Image className={styles.petImg}
                src={pet.imageUrl}
                alt={pet.name}
                width = {200}
                height = {200}
                priority
            />
            <div className={styles.basic}>
                <h2> {pet.name} </h2>
                <h3> {pet.age} </h3>
                <h3> {pet.shelter} </h3>
            </div>
            <div>
                <p> {pet.description} </p>
            </div>
        </Card>
    )
}