import Pet from './Pet';

type Pet = {
    id: number;
    name: string;
    imageUrl: string;
    age: string;
    shelter: string;
    description: string;
};

type PetProps = {
    pets: Pet[]
};

export default function Pets({ pets }: PetProps) {
    return (
        <div>
            {pets.map((pet) => (
                <Pet key={pet.id} pet={pet}/>
            ))}
        </div>
    )
}