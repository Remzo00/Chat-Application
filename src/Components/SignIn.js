import React from "react";
import firebase from 'firebase/compat'
import { auth } from '../firebase.js'

const signIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider); 
    }
    return(
        <div>
            <button className="sign-in-btn" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default signIn