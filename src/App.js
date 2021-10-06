import {
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useState } from "react";
import "./App.css";
import initializeAuthentication from "./Firebase/firebase.initialize";

function App() {
    const [loggedInuser, setloggedInuser] = useState({});

    initializeAuthentication();
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleClick = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                const { displayName, email, photoURL } = result.user;
                const LoginUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                };
                setloggedInuser(LoginUser);

                // ...
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    // Github login hadnler
    const githubProvider = new GithubAuthProvider();
    const loginGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // The signed-in user info.
                const { displayName, photoURL, email } = result.user;
                const LoginUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                };
                setloggedInuser(LoginUser);
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                console.log(error.message);
                // ...
            });
    };

    // Handle signout

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setloggedInuser({});
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    return (
        <div className="App">
            <h1>Learn firebase for first time </h1>

            {!loggedInuser.name ? (
                <div>
                    <button onClick={handleClick}>Sign In With Google </button>
                    <button onClick={loginGithub}>Sign In With Github </button>
                </div>
            ) : (
                <div>
                    <br />
                    <button onClick={handleSignOut}>SignOut</button>
                    <br />
                </div>
            )}

            {loggedInuser.name ? (
                <div>
                    <h2>Welocme To {loggedInuser.name}</h2>
                    <h3>Email: {loggedInuser.email}</h3>
                    <img src={loggedInuser.photo} alt="" />
                </div>
            ) : (
                <h2>No user found</h2>
            )}
            {console.log(loggedInuser.photo)}
        </div>
    );
}

export default App;
