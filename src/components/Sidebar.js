import { Button } from '@material-tailwind/react';
import React from 'react';

const SideBar = () => {
    return (
        <div className="absolute top-12 right-0 mr-10 h-auto w-64 bg-gray-200 border-r border-gray-300">
            <nav className="py-4 px-2">
                <a href="#" className="block text-gray-700 hover:text-indigo-600 text-xl font-bold">Id</a>

                <div className="flex items-center mb-4 mt-3">
                    <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                </div>
                <div className="flex items-center">
                    <input checked id="default-checkbox" type="checkbox" value="" className="w-5 text-lg h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">1</label>
                </div>
                <div className="flex items-center">
                    <input checked id="default-checkbox" type="checkbox" value="" className="w-5 text-lg mt-3 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">2</label>
                </div>

                <a href="#" className="block mt-4 text-gray-700 hover:text-indigo-600 text-lg font-semibold">Mesaure Name</a>
                <div className="flex items-center mt-2">
                    <button className="bg-purple-400 w-5 h-5"></button>
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Avg_Hotel_Response_bool</label>
                </div>
                <div className="flex items-center mt-3">
                    <button className="bg-green-500 w-5 h-5"></button>
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Review_Score</label>
                </div>
                {/* <a href="#" className="block mt-2 text-gray-700 hover:text-indigo-600 font-medium">Services</a>
                <a href="#" className="block mt-2 text-gray-700 hover:text-indigo-600 font-medium">Contact</a> */}
            </nav>
        </div>
    );
};

export default SideBar;
