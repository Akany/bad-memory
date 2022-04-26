import { signOut } from '../../services/auth';

export const SignOut = () => {

    const onSignOut = () => {
        signOut();
    };

    return (
        <button onClick={onSignOut}>SignOut</button>
    );
};
