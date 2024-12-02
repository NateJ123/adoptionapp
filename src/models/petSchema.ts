import mongoose, { Schema, Document, Model } from "mongoose";

interface Pet extends Document {
    id: number,
    name: string,
    imageUrl: string,
    age: string,
    shelter: string,
    description: string
}

const petSchema = new Schema<Pet> ({
    id: {
        type:Number,
        required: true,
        unique: true
    },
    name: {
        type:String,
        required:true,
    },
    imageUrl: {
        type:String,
        required:true,
    },
    age: {
        type:String,
    },
    shelter: {
        type:String,
    },
    description: {
        type:String,
        required:true,
    }
})

const pet2: Model<Pet> = mongoose.models.Pet || mongoose.model<Pet>("Pet", petSchema);
export default pet2;