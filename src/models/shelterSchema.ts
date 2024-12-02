import mongoose, {Schema, Document, Model} from 'mongoose';

interface Shelter extends Document {
    id: number,
    name: string,
    contact: {
        email: string,
        phoneNumber: string,
        address: string,
    }
}

const shelterSchema = new Schema<Shelter> ({
    id: {
        type:Number,
        required:true,
        unique:true,
    },
    name: {
        type:String,
        required:true,
        unique:true,
    },
    contact: {
        email: {
            type:String,
            required:true,
            unique:true,
        },
        phoneNumber: {
            type:String,
            required:true,
            unique:true,
        },
        address: {
            type:String,
            required:true,
        },
    }
})

const shelter2: Model<Shelter> = mongoose.models.Shelter || mongoose.model<Shelter>("Shelter", shelterSchema);
export default shelter2;