import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img
                            src="data:image/png;base64,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"
                            alt="Nike" className="h-6"/>
                    </div>
                    <div className="hidden lg:flex items-center space-x-8">
                        <div className="group relative">
                            <a href="#" className="text-black text-sm relative py-4 group-hover:text-black transition-colors">
                                New & Featured
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <div className="absolute hidden group-hover:block w-screen left-0 top-full bg-white border-t border-gray-200">
                                <div className="max-w-7xl mx-auto px-8 py-6">
                                    <div className="grid grid-cols-4 gap-8">
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-4">Featured</h3>
                                            <ul className="space-y-2">
                                                <li><a href="#" className="text-gray-600 hover:text-primary">New & Featured Drops</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">New Arrivals</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Bestsellers</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Member Exclusive</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Customize with Nike By You</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Jordan</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-4">Shoes</h3>
                                            <ul className="space-y-2">
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Lifestyle</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Air Force 1</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Air Jordan 1</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Air Max</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Dunk</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Cortez</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Pegasus</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Vomero</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-4">Clothing</h3>
                                            <ul className="space-y-2">
                                                <li><a href="#" className="text-gray-600 hover:text-primary">T-Shirts & Tops</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Shorts</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Pants</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Hoodies & Sweatshirts</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Jackets & Vests</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Tracksuits</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Socks</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative">
                            <a href="#" className="text-black text-sm relative py-4 group-hover:text-black transition-colors">
                                Men
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <div className="absolute hidden group-hover:block w-screen left-0 top-full bg-white border-t border-gray-100">
                                <div className="max-w-7xl mx-auto px-8 py-6">
                                    <div className="grid grid-cols-4 gap-8">
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-4">Featured</h3>
                                            <ul className="space-y-2">
                                                <li><a href="#" className="text-gray-600 hover:text-primary">New & Featured Drops</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">New Arrivals</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Bestsellers</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Member Exclusive</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Customize with Nike By You</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Jordan</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-4">Shoes</h3>
                                            <ul className="space-y-2">
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Lifestyle</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Air Force 1</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Air Jordan 1</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Air Max</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Dunk</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Cortez</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Pegasus</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Vomero</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-4">Clothing</h3>
                                            <ul className="space-y-2">
                                                <li><a href="#" className="text-gray-600 hover:text-primary">T-Shirts & Tops</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Shorts</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Pants</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Hoodies & Sweatshirts</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Jackets & Vests</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Tracksuits</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Socks</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-4">Shop By Sport</h3>
                                            <ul className="space-y-2">
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Running</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Basketball</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Football (Soccer)</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Golf</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Tennis</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Gym and Training</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Yoga</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Skateboarding</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative">
                            <a href="#" className="text-black text-sm relative py-4 group-hover:text-black transition-colors">
                                Women
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <div className="absolute hidden group-hover:block w-screen left-0 top-full bg-white border-t border-gray-100">
                                <div className="max-w-7xl mx-auto px-8 py-6">
                                    <div className="grid grid-cols-4 gap-8">
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-4">Featured</h3>
                                            <ul className="space-y-2">
                                                <li><a href="#" className="text-gray-600 hover:text-primary">New & Featured Drops</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">New Arrivals</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Bestsellers</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Member Exclusive</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Customize with Nike By You</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Jordan</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-4">Clothing</h3>
                                            <ul className="space-y-2">
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Sports Bras</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">T-Shirts & Tops</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Shorts</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Leggings & Tights</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Hoodies & Sweatshirts</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Jackets & Vests</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Tracksuits</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Skirts & Dresses</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Socks</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-4">Shop By Sport</h3>
                                            <ul className="space-y-2">
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Running</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Basketball</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Football </a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Golf</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Tennis</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Gym</a></li>
                                                <li><a href="#" className="text-gray-600 hover:text-primary">Yoga</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="text-black text-sm relative py-4 group hover:text-black transition-colors">
                            Kids
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#" className="text-black text-sm relative py-4 group hover:text-black transition-colors">
                            Sale
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#" className="text-black text-sm relative py-4 group hover:text-black transition-colors">
                            SNKRS
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>
                    <div className="flex items-center space-x-5 pr-10">
                        <div className="relative">
                            <input type="text" placeholder="Search"
                                className="pl-4 pr-10 py-2 w-40 bg-gray-100 rounded-full text-sm focus:outline-none focus:bg-gray-200 transition-colors"/>
                                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <i className="ri-search-line text-[20px] text-gray-500"></i>
                                </button>
                        </div>
                        <button className="text-black hover:text-gray-500 transition-colors w-10 h-10 flex items-center justify-center">
                            <i className="ri-heart-line text-[20px]"></i>
                        </button>
                        <button className="text-black hover:text-gray-500 transition-colors w-10 h-10 flex items-center justify-center">
                            <i className="ri-shopping-bag-line text-[22px]"></i>
                        </button>
                        <button
                            className="lg:hidden text-black hover:text-primary transition-colors w-8 h-8 flex items-center justify-center">
                            <i className="ri-menu-line text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;