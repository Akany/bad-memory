import { app } from  '../config/firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut as firebaseSignOut } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export const signIn = () => {
    return signInWithPopup(auth, provider)
        .then((result) => {
            return result.user;
        });
}

export const signOut = () => {
    return firebaseSignOut(auth);
}