"use client";
import React from 'react';
import Buttoner from './Button';
import styles from './Signinpart.module.css'
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useState } from 'react';






//This is the two headings and inputs and button on main page
export default function Signinpart () {
    const [user,setuser] = useState({
        username: '',
        password:''
    })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { id, value } = e.target;
        setuser(previousState => ({
            ...previousState,
            [id]: value
        }));
    }

    

    
    const router = useRouter();
    const signin = async (event: React.FormEvent) => {
        event.preventDefault();
        if(user.username != "" && user.password != ""){
            try {
                const response = await signIn("credentials", {
                    username: user.username,
                    password: user.password,
                    redirect:false
                });
                if(!response?.ok ||  !response || response?.error){
                    alert("Invalid username or password");
                    return;
                } 
                   
                    router.push('/homepage')
                
            }
            catch (err) {
                console.error("The error is:", err);
                alert("An error occured whilst signing in.")
            }
            
        } else {
            alert("Please enter both a username and password.")
        }
     
    }
    
    return(
        <div>
            <div className = {styles.center}>
                <h1> FUREVER HOME</h1>
                <h2> SIGN IN</h2>
            </div>
            <form className = {styles.flexman} onSubmit = {signin} >
                <input type = "text" className = {styles.border} placeholder = "Username" value = {user.username} id = "username" onChange = {handleChange}/>
                <input type = "text" className = {styles.border} placeholder = "Password" value = {user.password} id = "password"  onChange = {handleChange}/> 
                <Buttoner type = "submit" className = "signin-button"> Sign In</Buttoner>
            </form>
        </div>
    )
}
export async function doCredentialLogin(formData: FormData): Promise <any> {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
        const response  = await signIn("credentials", {
            username,
            password,
            redirect:false
        });
        return response
    } catch (err: any){
        throw err;
    }
}
export async function doLogout(){
    await signOut({redirectTo:"/"})
    }
    