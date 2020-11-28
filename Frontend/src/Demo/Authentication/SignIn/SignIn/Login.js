import React from 'react';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
// import AdminLayout from "../../../App/layout/AdminLayout";

const Login =(props) => {

    const { 
        email,
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        emailError, 
        hasAccount,
        setHasAccount,
        passwordError
    } = props;

    return (
        // 
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
                                   
                                    
                                    <input type="email" autoFocus required value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                                    <br />
                               
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="password"/>
                                 
                                </div>
                                
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div>
                                <div>
                                <button className="btn btn-primary shadow-2 mb-4" onClick={handleLogin}>Login</button>
                                
                                   

                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
    )
}

export default Login;