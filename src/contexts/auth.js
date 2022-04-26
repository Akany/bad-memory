import React from 'react';
import { app } from '../config/firebase';
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = React.createContext(auth.currentUser);
