import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./App.css";
import initializeAuthentication from "./Firebase/firebase.initialize";

function App() {
    initializeAuthentication();
    const provider = new GoogleAuthProvider();
    const handleClick = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            // ...
        });
    };

    return (
        <div className="App">
            <h1>Learn firebase for first time </h1>
            <button onClick={handleClick}>Sign In With Google </button>
        </div>
    );
}

export default App;
