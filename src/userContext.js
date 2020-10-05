import React, {useState, useEffect, createContext} from "react";

import {auth, db} from './firebase'

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});

    console.log(currentUser)
    
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log(user)
            if (user) {
                const userReference = db.doc(`users/${user.uid}`);
                const snapShot = userReference.get();
                if(!snapShot.exists){
                  userReference.set({username: user.email,  email: user.email, displayName: "name", points: []})
                  setCurrentUser({...user, points: ["2"], username: user.email, email: user.email, loggedIn: true});
                }
    
              } 
              else {
                setCurrentUser({username: '', email: '', loggedIn: false});
              }
            });

    }, []);

    console.log(UserContext)

    return <UserContext.Provider value={{currentUser, setCurrentUser}}>{children}</UserContext.Provider>
}

export default UserProvider;


