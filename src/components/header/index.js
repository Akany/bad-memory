import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { SignIn } from '../signIn';
import { SignOut } from '../signOut';

export const Header = () => {
    const user = useContext(AuthContext);

    return (
        <>
            {!user && <SignIn/>}
            {user && user.email}
            {user && <SignOut/>}
        </>
    );
};
