import React, {useState, useEffect} from "react";
import {NavLink} from 'react-router-dom';
import fire from './fire';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

// class SignUp1 extends React.Component {
    const SignUp1 = () => {
    //render () {
        const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState('');

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code) {
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
    };

    const handleSignup = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                break;
            }
        });
    }
    
    const handleLogout = () => {
        fire.auth().signOut();
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if(user) {
                clearInputs();
                setUser(user);
            } else {
                setUser('');
            }
        })
    }

    useEffect(() => {
        authListener();
    }, []);

    const [state,setState]=useState(false);
  let url="Eth-Lagos/dashboard";

        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <p className="alert alert-light">{emailError} </p>
                                <p className="#">{passwordError} </p> 
                                <div className="input-group mb-3">
                                    {/* <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin}
                                    handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} /> */}
                                    
                                    <input type="email" autoFocus required value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                                    <br />
                                    {/* <p className="alert alert-warning">{emailError} </p>  */}
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="password"/>
                                    {/* <p className="#">{passwordError} </p>  */}
                                </div>
                                {/* <div className="#">
                                    {hasAccount ? (
                                        <div>
                                            <button>SignIn</button>
                                            <p>Dont Have An Account ? <span>Signup</span></p>
                                        </div>
                                    ) : (
                                        <div>
                                            <button>SignUp</button>
                                            <p>Have an account ? <span>Sign In</span></p>
                                        </div>
                                    )}
                                </div> */}
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div>
                                <div>
                                <button className="btn btn-primary shadow-2 mb-4" onClick={handleLogin}><a href={url}>Login</a></button>
                                
                                    {hasAccount? (
                                        <p className="mb-2 text-muted" onClick={handleLogin}>Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p>

                                    ) : (
                                        
                                        <p className="mb-0 text-muted" onClick={handleSignup}>Don’t have an account? <NavLink to="/auth/signup-1" onClick={() => setHasAccount(!hasAccount)}>Signup</NavLink></p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    // }
}

export default SignUp1;
