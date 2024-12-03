import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

import user2 from "@/models/userSchema";
import connectMongoDB from "@/libs/mongodb";

export const {
    
    handlers: {GET, POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            credentials: {
                username: {},
                password: {},
            },
            async authorize (credentials) {
                const bcrypt = require('bcryptjs');
                if(!credentials) return null;

                try {
                    await connectMongoDB();
                    const user = await user2.findOne({username: credentials.username}).lean();
                    
                    if(!user) {
                        console.error("User not found");
                        return null;
                    }
                   
                    const isMatch = await bcrypt.compare(credentials.password, user.password)
                    

                    if(isMatch) {
                        return {
                            id: user._id.toString(),
                            username: user.username,
                        }

                    } else {
                        console.log("Email or password is not correct!")
                        return null;
                    }
                
            } catch(error: any) {
                console.log("An error occured", error);
                return null;
            }
        },
        }),
    ],

});