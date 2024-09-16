import React from 'react'

export default function Register() {
    return (
        <>
            <div className='container mx-auto text-center'>
                <div className="form-signin w-100 m-auto">
                    <form>
                    <i class="fa-regular fa-circle-user fa-5x mb-3 mt-5"></i>
                        <h1 className="h3 mb-3 fw-normal">Create a new account</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Confirm Password</label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
                        <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
                    </form>
                </div>
            </div>
        </>
    )
}
