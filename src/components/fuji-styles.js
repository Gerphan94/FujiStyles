import { useState, useEffect } from "react";
import { stylesdata } from "../data/data";

import Card from "./card";


function FujiStyles() {

    console.log('FujiStyles');

    const title = 'Cafe 2'
    const max = stylesdata.length;
    const [curentStyle, setCurrentStyle] = useState(0);
    const [data, setData] = useState(stylesdata[curentStyle]);


    const handleClickNext = () => {
        setCurrentStyle((curentStyle + 1) % max);
        setData(stylesdata[curentStyle]);
    };
    const handleClickPrev = () => {
        setCurrentStyle((curentStyle - 1 + max) % max);
        setData(stylesdata[curentStyle]);
    };



    return (
        <>
            <div className="flex justify-center items-center h-screen p-4 bg-gray-200 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={`/img/img${data.id}.png`}
                        alt="Background"
                        className="w-full h-full object-cover blur-md scale-110"
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-10 md:w-1/3 h-screen bg-transparent flex flex-col p-2 rounded-lg overflow-hidden ">
                    {/* Header */}
                    <div className="">
                        <div className="flex justify-between select-none ">
                        <div className="px-3 py-2  rounded-lg text-white drop-shadow-lg text-2xl font-bold">
                            {data.title}
                        </div>
                        <div className="px-3 py-2  rounded-lg text-white drop-shadow-lg text-2xl font-bold">
                            FUJI STYLE
                        </div>
                    </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                        <Card data={data} />
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between mt-4">
                        <button 
                        className="px-4 py-2 bg-gray-400 text-white rounded"
                        onClick={handleClickPrev}
                        >Previous</button>
                        <button 
                        className="px-4 py-2 bg-gray-400 text-white rounded"
                        onClick={handleClickNext}
                        >Next</button>
                    </div>
                </div>
            </div>


        </>
    )
}
export default FujiStyles;