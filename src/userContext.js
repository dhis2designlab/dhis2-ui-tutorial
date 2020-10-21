import React, {useState, useEffect, createContext} from "react";

import {auth, db } from './firebase'

export const UserContext = createContext();


const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [completedCourses, setCompletedCourses] = useState([])
    const [courses, setCourses] = useState([])
    const [isLoading, setIsLoading] = useState('False')
    const [isError, setIsError] = useState('False')
 
    useEffect(() => {
       
        const fetchData = auth.onAuthStateChanged((user => {
            setIsLoading('True')
            if (user) {
                let userReference = db.collection("users").doc(user.uid)
                console.log(user)
                console.log(userReference.get())
           
                userReference.get().then((doc) => {
                    if(doc.exists ){
                        
                         
                        setCurrentUser({email: user.email, uid: user.uid, loggedIn: true});
                            
     
                    }
                       
                    else {
                        userReference.set({email: user.email, displayName: "name"})
                        setCurrentUser({email: user.email, uid: user.uid, loggedIn: true});
                    }
                  
                }).catch(function(error){
                    console.log("error getting document", error)
                    setIsLoading('False')
                    setIsError('False')
                })
               
              } 
              else {
                setCurrentUser({loggedIn: false});
              }
            }));
            setIsLoading('True')
            return () => fetchData();
    }, []);

    console.log(courses)

    return <UserContext.Provider value={{currentUser, setCurrentUser, courses, setCourses, isLoading}}>{children}</UserContext.Provider>
}

export default UserProvider;


