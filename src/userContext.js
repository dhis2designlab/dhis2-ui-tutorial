import React, { useState, useEffect, createContext } from "react";

import { auth, db } from "./firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [allCorrect, setAllCorrect] = useState(false);

  useEffect(() => {
    
    const fetchData = auth.onAuthStateChanged((user) => {
      if (user) {
        let userReference = db.collection("users").doc(user.uid);
        userReference.get().then((doc) => {
          if (doc.exists) {
            setCurrentUser({
              email: user.email,
              uid: user.uid,
              loggedIn: true,
            });

            setAllCorrect(doc.data().allCorrect)
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
                    badges: doc.data().badge
                  });
                });

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
        });
      } else {
        setCurrentUser({ loggedIn: false });
      }
    });

    return () => fetchData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        completedCourses,
        setCompletedCourses,
        allCorrect,
        setAllCorrect,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
