import React from 'react'
import {  bannerTwo } from '../../assets'
import ProductList from '../ProductList/ProductList'

export default function Home() {
    return (
        <div className='bg-dark-subtle'>


            {/* Products */}
            <div className="container text-center">
                <div className="row">
                    <div className="col-4">
                        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" >
                            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <i class="fa-solid fa-bars px-2"></i>
                                <span className="fs-4">All</span>
                            </a>
                            <hr />
                            <ul className="nav nav-pills flex-column mb-auto">
                                <li className="nav-item text-start">
                                    <a href="#" className="nav-link text-white p-4" >
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Tiki Bookstore
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Home - Life
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Phones - Tablets
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Toys - Mom & Baby
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Digital Devices - Digital Accessories
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Household Electrical Appliances
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Beauty - Health
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Cars - Motorcycles - Bicycles
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Women's Fashion
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Online Grocery
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Hots
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Watches & Jewelry
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Backpacks and Suitcases
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Voucher - Service
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Women's Fashion Bags
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Men's Fashion Bags
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="#" className="nav-link text-white p-4">
                                        <i class="fa-solid fa-bomb px-2 text-danger"></i>
                                        Home Care
                                    </a>
                                </li>
                            </ul>
                            <hr />
                            <ul className='nav nav-pills flex-column mb-auto'>
                                <li className="text-start">
                                    <a href="" className='nav-link text-gray p-4 '>
                                    Utilities
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="" className='nav-link text-white p-4'>
                                    Card and Wallet Offers
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="" className='nav-link text-white p-4'>
                                    Pay, top up
                                    </a>
                                </li>
                                <li className="text-start">
                                    <a href="" className='nav-link text-white p-4'>
                                    Buy Now Pay Later
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-8">
                        {/* Carousel */}
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={bannerTwo} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={bannerTwo} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={bannerTwo} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className='row'>
                            <ul className='d-flex justify-content-between nav-bar unstyle__list'>
                                <li className="text-center p-2 col-2">
                                    <i className="fa-solid fa-gift d-block"></i>
                                    <a className="unstyle__aTag text-black" href="">TOP DEAL</a>
                                </li>
                                <li className="text-center p-2 col-2">
                                    <i className="fa-solid fa-gift d-block"></i>
                                    <a className="unstyle__aTag text-black" href="">Tiki Trading</a>
                                </li>
                                <li className="text-center p-2 col-2">
                                    <i className="fa-solid fa-gift d-block"></i>
                                    <a className="unstyle__aTag text-black" href="">Coupon super hot</a>
                                </li>
                                <li className="text-center p-2 col-2">
                                    <i className="fa-solid fa-gift d-block"></i>
                                    <a className="unstyle__aTag text-black" href="">Half Price Clearance Sale</a>
                                </li>
                                <li className="text-center p-2 col-2">
                                    <i className="fa-solid fa-gift d-block"></i>
                                    <a className="unstyle__aTag text-black" href="">Hot foreign goods</a>
                                </li>
                                <li className="text-center p-2 col-2">
                                    <i className="fa-solid fa-gift d-block"></i>
                                    <a className="unstyle__aTag text-black" href="">Tech World</a>
                                </li>
                            </ul>
                        </div>
                        <div className='row'>
                            <ProductList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
