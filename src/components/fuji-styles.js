import { useState, useEffect } from "react";

import Card from "./card";

const MAX_TOTAL_PAGES = 27;

function FujiStyles() {

    console.log('FujiStyles');

    const title = 'Cafe 2'


    return (
        <>
            <div className=" md:w-1/3 h-screen bg-gray-100 flex flex-col flex-grow">
                <div className="absolute inset-0">
                    <img
                        src="/img/img1.png"
                        alt="Background"
                        className="md:w-1/3 h-screen object-none opacity-30"
                    />
                </div>

                <div className="flex justify-between p-2">
                    <div className="text-left px-3 py-2 bg-gray-300 text-white font-medium rounded-lg">
                        {title}</div>
                    <div className="text-left px-3 py-2 bg-gray-300 text-white font-medium rounded-lg">
                       FUJI STYLE
                    </div>

                </div>

                <div className="flex justify-between p-1 h-full ">

                    <Card />


                </div>
                <div className="flex justify-between p-2">
                    <button>Previous</button>
                    <button>Next</button>

                </div>



            </div>






        </>
    )
}
export default FujiStyles;