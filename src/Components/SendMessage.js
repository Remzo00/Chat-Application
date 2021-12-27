import React, {useState} from "react";
import { db, auth } from '../firebase'
import firebase from "firebase/compat";

const SendMessage = ({scroll}) => {
    const [msg, setMsg] = useState('')

    const sendMessage = async (e) =>{
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }
    return(
        <div>
            <form onSubmit={sendMessage}>
                <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message..." />
                <button className="btn" type="submit">Send</button>
            </form>
        </div>
    )
}

export default SendMessage