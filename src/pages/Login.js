import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSignup, onLogin, onViewProfile } from '../store/actions';
// import { AddressComponent } from "../components/Address-comp";
// import { Profile } from "./Profile";
import { Home } from "./Home";

const Login = () => {
    const { user, phone } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const { token } = user;
    // const { address, wishlist, orders } = profile;

    const [isSignup, setSignup] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (token) {
            dispatch(onViewProfile());
        }
    }, [token, dispatch]);

    const userSignup = () => {
        dispatch(onSignup({ email, password }));
    };

    const userLogin = () => {
        dispatch(onLogin({ email, password, phone }));
    };

    const loginForm = () => {
        return (
            <div className="row bg-secondary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30rem' }}>
                <div className="col col-sm-5 col-md-4 col-lg-3 col-xl-2">
                    <form>
                        <div className="form-group" controlId="formBasicEmail">
                            <label>Email address</label>
                            <input className="form-control" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group" controlId="formBasicPassword">
                            <label>Password</label>
                            <input className="form-control" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="row m-2 float-right">
                            <button className="btn btn-primary mr-2" onClick={() => userLogin()} type="button">
                                Login
                            </button>
                            <button className="btn btn-primary" onClick={() => setSignup(true)} type="button">
                                Signup
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    const signUpForm = () => {
        return (
            <div className="row bg-secondary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30rem' }}>
                <div className="col col-sm-5 col-md-4 col-lg-3 col-xl-2">
                    <form>
                        <div className="form-group" controlId="formBasicEmail">
                            <label>Email address</label>
                            <input className="form-control" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group" controlId="formBasicPassword">
                            <label>Password</label>
                            <input className="form-control" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group" controlId="formBasicPhone">
                            <label>Phone</label>
                            <input className="form-control" type="phone" placeholder="Phone" />
                        </div>
                        <div className="row m-2 float-right">
                            <button className="btn btn-primary mr-2" onClick={() => userLogin()} type="button">
                                Login
                            </button>
                            <button className="btn btn-primary" onClick={() => userSignup()} type="button">
                                Signup
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    if (token) {
        return <Home />; 
    }

    return (
        <div className="container-fluid">
            {isSignup ? signUpForm() : loginForm()}
        </div>
    );
};

export { Login };
