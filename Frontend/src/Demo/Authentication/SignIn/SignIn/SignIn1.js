import React, {useState, useEffect} from "react";
import {NavLink} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Login from './Login';
// import Hero from './Hero';
import fire from './fire';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import AdminLayout from "../../../App/layout/AdminLayout";
// import AdminLayout from "../../../App/layout/AdminLayout/NavBar/NavRight/index";

// class SignUp1 extends React.Component {
const SignUp1 = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = (e) => {
        clearErrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
        });
        e.preventDefault(Login);
    };

    const handleSignup = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
                switch(err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password-password":
                        setPasswordError(err.message);
                        break;
                }
        });

    };
    
    const handleLogout = () => {
        fire.auth().signOut();
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if(user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);
    
        return (
            <>
                {user ? (
                    <AdminLayout handleLogout={handleLogout} />
                ) : (
                    <Login 
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword} 
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount} 
                    setHasAccount={setHasAccount}
                    emailError={emailError} 
                    passwordError={passwordError}
                     />
                )};
               
                 
            </>
        )
    
}


export default SignUp1;
