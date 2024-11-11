"use client";
import React from 'react';
import Image from 'next/image';
import styles from './Poster.module.css';
import Buttoner from './Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
   
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
        const {id, value} = event.target;
        setPetData({
          ...petData,
          [id]: value
        })
      }
      
    const router = useRouter();
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        const newPet = {id: Date.now(), ...petData };
        console.log(petData);
        //addPet(newPet);
        setPetData({ name: '', imageUrl: '', age: '', shelter: '', description: '' });
        router.push(`/homepage`);
    }
    return (
        <div>
        <Image className = {styles.center} alt = 'dog_picture' src = 'https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-an-image-of-an-adorable-dog-sticker-clipart-vector-png-image_6901476.png' width = {100} height = {100}/>
        <h1 className = {styles.flexer}> Post a Pet</h1>
        
        <form className = {styles.flexer}>
            <input  id = "name" type = "text" placeholder = "NAME OF PET" value ={petData.name} onChange = {handleChange}></input>
            <input  id = "imageUrl" type = "text" placeholder = "IMAGE OF PET" value ={petData.imageUrl} onChange = {handleChange}></input>
            <input  id = "age" type = "text" placeholder = "AGE OF PET" value ={petData.age} onChange = {handleChange}></input>
            <input  id = "shelter" type = "text" placeholder = "SHELTER/ADDRESS" value ={petData.shelter} onChange = {handleChange}></input>
            <input  id = "description" type = "text" placeholder = "DESCRIPTION OF PET" value ={petData.description} onChange = {handleChange}></input>
            <Buttoner className = "submit" type = 'button' onClick = {handleSubmit}> Post A Pet </Buttoner>
        </form>

        </div>
    )
}