import { signIn } from '../../services/auth';

export const SignIn = () => {

    const onSignIn = () => {
        signIn();
    };

    return (
        <button onClick={onSignIn}>SignIn</button>
    );
};
