import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    const [createUser, setCreateUser] = useState(false);

    //For Login
    const [newUser, setNewUser] = useState({
        isSignedIn: false,
        createNewUser: false,
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
        photo: ""
    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const signInUser = {
                    name: displayName,
                    photo: photoURL,
                    email
                }
                setLoggedInUser(signInUser);
                history.replace(from);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });
    }

    const handleFacebookSignIn = () => {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();

        firebase
            .auth()
            .signInWithPopup(facebookProvider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const signInUser = {
                    name: displayName,
                    photo: photoURL,
                    email
                }
                setLoggedInUser(signInUser);
                history.replace(from);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });
    }

    //Log in using email and password
    const handleChange = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...newUser };
            newUserInfo[e.target.name] = e.target.value;
            setNewUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (createUser && newUser.email && newUser.password) {
            firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
                .then((res) => {
                    const newUserInfo = { ...newUser };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setNewUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...newUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setNewUser(newUserInfo);
                });
        }

        if (!createUser && newUser.email && newUser.password) {
            firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password)
                .then(res => {
                    const newUserInfo = { ...newUser };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setNewUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...newUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setNewUser(newUserInfo);
                });
        }

        e.preventDefault();
    }


    return (
        <div className="text-center">
            <div>
                {
                    createUser ? <h1>Sign Up</h1> : <h1>Sign In</h1>
                }
                <input type="checkbox" onChange={() => setCreateUser(!createUser)} name="createNewUser" id="" />
                <label htmlFor="createNewUser">New user sign up</label>
                <form onSubmit={handleSubmit}>
                    {
                        createUser && <input type="text" onChange={handleChange} name="name" id="" placeholder="Enter your name" required />
                    }
                    <br />
                    <input type="text" onChange={handleChange} name="email" id="" placeholder="Enter your email" required />
                    <br />
                    <input type="password" onChange={handleChange} name="password" id="" placeholder="Password" required />
                    <br />
                    <input type="submit" value="Submit" />
                    <br /><br />
                    <p className="text-danger">{newUser.error}</p>
                    {
                        newUser.success && <p className="text-success">User {createUser ? 'created' : 'logged in'} successfully</p>
                    }

                </form>

            </div>
            <div className="mt-5">
                <button onClick={handleFacebookSignIn}>Continue with Facebook</button>
                <br />
                <button onClick={handleGoogleSignIn}>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login; <p>This is login</p>