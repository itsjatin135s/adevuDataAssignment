import React from "react"
import Example from "./Chart"

export default function Content() {
    return (
        <div>
            {/* 2nd header  */}
            <header className="text-gray-600 body-font px-4">
                <div className="mx-auto w-screen flex flex-wrap p flex-col md:flex-row " style={{ justifyContent: "space-between" }}>
                    <nav className="flex flex-wrap text-base ">
                        <a className="mr-1 text-xl font-bold">HotelDash</a>
                        <a className="mr-1 text-xl">By</a>
                        <a className="mr-1 text-xl text-blue-600 underline underline-offset-4 hover:text-blue-700">Dev Sharma</a>
                        {/* <a className="hover:text-gray-900">Fourth Link</a> */}
                    </nav>
                    <div className="lg:w-auto inline-flex mr-20">
                        <button className="inline-flex cursor-not-allowed tooltip ml-8 border-0 py-1 px-0 focus:outline-none rounded text-base mt-4 md:mt-0">
                            <img className="w-5 h-6" src="https://cdn-icons-png.flaticon.com/512/4903/4903167.png" />
                            <span className="tooltiptext mt-4">Disabled by Auther</span>
                        </button>
                        <button className="inline-flex tooltip ml-8 border-0 py-1 px-0 focus:outline-none rounded text-base mt-4 md:mt-0">
                            <img className="w-5 h-5 m-auto" src="https://www.pngkit.com/png/detail/153-1536260_png-file-svg-transparent-star-icon-png.png" />
                            <span className="tooltiptext mt-4">Add Favorite</span>
                        </button>
                        <button className="inline-flex tooltip ml-8 border-0 py-1 px-0 focus:outline-none rounded text-base mt-4 md:mt-0">
                            <img className="w-5 h-5 m-auto" src="https://icons.veryicon.com/png/o/miscellaneous/foundation-icon-5/link-86.png" />
                            <span className="tooltiptext mt-4">Share</span>
                        </button>
                        <button className="inline-flex tooltip ml-8 border-0 py-1 px-0 focus:outline-none rounded text-base mt-4 md:mt-0">
                            <img className="w-5 h-5 m-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Circle-icons-download.svg/1024px-Circle-icons-download.svg.png" />
                            <span className="tooltiptext mt-4">Download</span>
                        </button>
                        <button className="inline-flex tooltip ml-8 border-0 py-1 px-0 focus:outline-none rounded text-base mt-4 md:mt-0">
                            <img className="w-5 h-6 m-auto" src="https://www.clipartmax.com/png/middle/221-2216894_call-for-worms-award-nominations-award-icon-png.png" />
                            <span className="tooltiptext mt-4">Nominate for the Viz of the Day</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Tabs */}
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 p-5">
            </div>
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Metrics</a>
                </li>
                <li className="mr-2">
                    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">RevPar v Rev</a>
                </li>
                <li className="mr-2">
                    <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Review v Hotel Resp</a>
                </li>
                <li className="mr-2">
                    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Occ % v Avail</a>
                </li>
                <li>
                    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Map</a>
                </li>
            </ul>
            {/* <Example /> */}
        </div>
    )
}