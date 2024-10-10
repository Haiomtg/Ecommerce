import React, { useState } from 'react';
import { useUserContext } from '../../context/UserContext';

export default function Register() {
    const { handleRegister } = useUserContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState(''); // New state for address
    const [showModal, setShowModal] = useState(false); // State for modal visibility

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.error("Passwords do not match");
            return;
        }
        await handleRegister(email, password, address);
        setShowModal(true); // Show modal on successful registration
    };

    const closeModal = () => {
        setShowModal(false); // Close the modal
    };

    return (
        <>
            <div className='container mx-auto text-center mt-5'>
                <div className="form-signin w-100 m-auto">
                    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
                        <i className="fa-regular fa-circle-user fa-5x mb-3"></i>
                        <h1 className="h3 mb-3 fw-normal">Create a new account</h1>

                        <div className="form-floating mb-3">
                            <input 
                                type="email" 
                                className="form-control" 
                                id="floatingInput" 
                                placeholder="name@example.com" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="floatingPassword" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="confirmPassword" 
                                placeholder="Confirm Password" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                required
                            />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="address" 
                                placeholder="Address" 
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)} 
                                required
                            />
                            <label htmlFor="address">Address</label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
                        <p className="mt-3 mb-3 text-body-secondary">© 2017–2024</p>
                    </form>
                </div>
            </div>

            {/* Bootstrap Modal for Success Message */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="successModalLabel" aria-hidden={!showModal}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="successModalLabel">Registration Successful!</h5>
                            <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            You have registered successfully.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
