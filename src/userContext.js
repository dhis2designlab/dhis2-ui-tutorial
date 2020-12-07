import React, { useState, useEffect, createContext } from "react";

import { auth, db } from "./firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [completedCourses, setCompletedCourses] = useState([]);

  useEffect(() => {
    const fetchData = auth.onAuthStateChanged((user) => {
    
      if (user) {
        let userReference = db.collection("users").doc(user.uid);
        userReference
          .get()
          .then((doc) => {
            if (doc.exists) {
              setCurrentUser({
                email: user.email,
                uid: user.uid,
                loggedIn: true,
              });
              let fetchedCourses = [];
              userReference
                .collection("points")
                .get()
                .then(function (querySnapshot) {
                  querySnapshot.forEach(function (doc) {
                    fetchedCourses.push({
                      points: doc.data().points,
                      name: doc.data().name,
                      courseImg: doc.data().courseImg,
                    });
                  });
                  console.log(fetchedCourses);

                  setCompletedCourses(fetchedCourses);
                });
            } else {
              userReference.set({ email: user.email, displayName: "name" });
              setCurrentUser({
                email: user.email,
                uid: user.uid,
                loggedIn: true,
              });
            }
          })
         
      } else {
        setCurrentUser({ loggedIn: false });
      }
    });
 
    return () => fetchData();
  }, []);

  console.log("Completed courses" + completedCourses);
  console.log("Current user" + currentUser);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        completedCourses,
        setCompletedCourses,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
