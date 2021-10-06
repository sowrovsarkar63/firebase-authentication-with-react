import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import "./App.css";
import initializeAuthentication from "./Firebase/firebase.initialize";

function App() {
    const [loggedInuser, setloggedInuser] = useState({});

    initializeAuthentication();
    const googleProvider = new GoogleAuthProvider();
    const handleClick = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                const LoginUser = result.user;
                setloggedInuser(LoginUser);
                console.log(loggedInuser);
                // ...
            })
            .catch((err) => {
                console.log("sorry!!");
            });
    };
    // Github login hadnler
    /*     const githubProvider = new GithubAuthProvider();
    const loginGithub = () => {
        const auth = getAuth();
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                console.log(error);
                // ...
            });
    }; */
    return (
        <div className="App">
            <h1>Learn firebase for first time </h1>
            <button onClick={handleClick}>Sign In With Google </button>

            {/* <button onClick={}>Sign In With Github</button> */}
            <div>
                <h2>name is {loggedInuser.displayName}</h2>
            </div>
        </div>
    );
}

export default App;
