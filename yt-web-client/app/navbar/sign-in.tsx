import { signInWithGoogle, signOut } from '../firebase/firebase';
import styles from './signIn.module.css';
import { User } from 'firebase/auth';

//defining the props for the SignIn component
//props are used to pass data from parent component to child component with parent component being Navbar and child component being SignIn
interface SignInProps {
  user: User | null;
}

export default function SignIn({ user }: SignInProps) {

  return (
    <div>
      {user ? (
        // If user is signed in, show a welcome message (or something else)
        <button className={styles.signin} onClick={signOut}>
          Sign Out
        </button>
      ) : (
        // If user is not signed in, show sign-in button
        <button className={styles.signin} onClick={signInWithGoogle}>
          Sign in
        </button>
      )}
    </div>
  );
}

//The SignIn component is a functional component that takes in a user prop and returns a button that either signs the user in or out depending on their current authentication state.