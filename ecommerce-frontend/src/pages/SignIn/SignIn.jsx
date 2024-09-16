import React from 'react'

export default function SignIn() {
    return (
        <>
            <div className='container mx-auto text-center'>
                <div className="form-signin w-100 m-auto mt-5">
                    <form>
                    <i class="fa-solid fa-circle-user fa-5x mb-3"></i>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2 mb-3" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </>
    )
}
