import React from "react";
import { auth } from '../firebase.js'

const signOut = () => {
    return(
        <div>
          <button className="sign-out-btn" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default signOut