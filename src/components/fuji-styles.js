import { useState, useEffect } from "react";

import Card from "./card";

const MAX_TOTAL_PAGES = 27;

function FujiStyles() {

    console.log('FujiStyles');

    const title = 'Cafe 2'


    return (
        <>
            <div className="flex justify-center items-center h-screen p-4 bg-gray-200 relative">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/img/img1.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-10 md:w-1/3 h-screen bg-transparent flex flex-col p-2 rounded-lg overflow-hidden ">
                    {/* Header */}
                    <div className="flex justify-between mb-4">
                        <div className="px-3 py-2 bg-gray-300 text-white font-medium rounded-lg">
                            {title}
                        </div>
                        <div className="px-3 py-2 bg-gray-300 text-white font-medium rounded-lg">
                            FUJI STYLE
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow overflow-y-off h-full">
                        <Card />
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between mt-4">
                        <button className="px-4 py-2 bg-gray-400 text-white rounded">Previous</button>
                        <button className="px-4 py-2 bg-gray-400 text-white rounded">Next</button>
                    </div>
                </div>
            </div>


        </>
    )
}
export default FujiStyles;