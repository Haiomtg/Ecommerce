import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top bottom-0">
                <div className="col-md-4 d-flex align-items-center">
                    <button href="/" className="mb-3 me-2 mb-md-0 text-body-secondary border-0 bg-transparent">
                        <i class="fa-solid fa-face-smile fa-2x"></i>
                    </button>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <button className="text-body-secondary border-0 bg-transparent">
                            <i class="fa-brands fa-facebook"></i>
                        </button>
                    </li>
                    <li className="ms-3">
                        <button className="text-body-secondary border-0 bg-transparent">
                            <i class="fa-brands fa-twitter"></i>
                        </button>
                    </li>
                    <li className="ms-3">
                        <button className="text-body-secondary border-0 bg-transparent">
                            <i class="fa-brands fa-twitch"></i>
                        </button>
                    </li>
                </ul>
            </footer>
        </>
    )
}
