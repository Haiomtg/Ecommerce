import React, { useState } from 'react';
import { useUserContext } from '../../context/UserContext'; // Import the UserContext

export default function SignIn() {
    const { handleLogin } = useUserContext(); // Destructure handleLogin from UserContext
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to hold error messages

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleLogin(username, password); // Call handleLogin on form submission
        } catch (err) {
            setError('Login failed. Please check your credentials.'); // Set error message on failure
        }
    };

    return (
        <>
            <div className='container mx-auto text-center'>
                <div className="form-signin w-100 m-auto mt-5">
                    <form onSubmit={handleSubmit}>
                        <i className="fa-solid fa-circle-user fa-5x mb-3"></i>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}

                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} // Update username state
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update password state
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <button className="btn btn-primary w-100 py-2 mb-3" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </>
    );
}
