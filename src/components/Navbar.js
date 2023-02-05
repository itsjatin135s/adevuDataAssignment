import React, { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="https://public.tableau.com/app/assets/tableau-public-logo-rgb.07774149.svg" />
                        {/* <span className="ml-3 text-xl">Tailblocks</span> */}
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <div
                            className="relative"
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                        >
                            <button
                                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
                            >
                                <span>Create</span>
                                <img className="h-3 w-3 mt-2 ml-2" src="https://icons.veryicon.com/png/o/miscellaneous/small-monochrome-icon/drop-down-arrow-4.png" />
                            </button>
                            {isOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-64 text-left transform translate-x-28 rounded-md bg-white shadow-md">
                                    <div className="py-1">
                                        <a
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            href="#"
                                        >
                                            Web Authorizing
                                        </a>
                                        <a
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            href="#"
                                        >
                                            Download Tableau Desktop Public Edition
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <a className="mr-5 hover:text-gray-900">Resources</a>
                        {/* <a className="mr-5 hover:text-gray-900">Third Link</a>
                        <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
                    </nav>
                    <div className="flex flesx-wrap">
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none font-bold hover:bg-blue-200 hover:text-blue-600 rounded text-base mt-4 md:mt-0">Sign In
                            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg> */}
                        </button>
                        <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none font-bold mt-8 hover:text-blue-600 rounded text-base mt-4 md:mt-0">
                            <img className="w-6 h-6" src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" />
                        </button>
                    </div>
                </div>
            </header >
        </div>
    )
}