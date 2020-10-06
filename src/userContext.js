import React, {useState, useEffect, createContext} from "react";

import {auth, db} from './firebase'

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [points, setPoints] = useState(0);

 

    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user => {
            if (user) {
                let userReference = db.collection("users").doc(user.uid);
                userReference.get().then(function(doc){
                    if(doc.exists){
                        //TODO: find better way to get userid
                         setCurrentUser({...doc.data(), loggedIn: true, uid: user.uid});
                    }
                    else{
                        userReference.set({username: user.email, points: 0, email: user.email, displayName: "name"})
                        setCurrentUser({...user, username: user.email, points: 0, email: user.email, loggedIn: true});
                    }
                }).catch(function(error){
                    console.log("error getting document", error)
                })
              } 
              else {
                setCurrentUser({username: '', email: '', loggedIn: false});
              }
            }));
            return () => unsubscribe();
    }, []);

 

    return <UserContext.Provider value={{currentUser, setCurrentUser}}>{children}</UserContext.Provider>
}

export default UserProvider;


