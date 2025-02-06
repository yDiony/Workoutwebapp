'use client'

import imageicon from "@/app/images/iconimage.png"
import Image from "next/image"
import { Iconnotificacao } from "@/app/components/notificationicon/page"
import CircularProgress from "@/app/components/CircularProgress/page"
import { useState } from "react"
import StepsCircular from "@/app/components/StepsCircular/page"

export default function page() {
    const [totalcalorias, settotalcalorias] = useState(550)
    const [valorprogredidocalorias, setvalorprogredidocalorias] = useState(150)
    const [totalsteps, settotalsteps] = useState(10000)
    const [valorprogredidosteps, setvalorprogredidosteps] = useState(4200)
    return (
        <div className="max-h-[85vh] overflow-y-auto max-w-[100vw] min-h-[80vh] flex flex-col custom:px-[35%] tablet:px-[20%]">
            <div className="w-[100%] flex flex-col items-center justify-center">
                <div className="w-[90%] flex justify-between items-center mt-[5%]">
                    <div className={"rounded-[100%] w-[56px] h-[56px] "}>
                        <Image
                            src={imageicon}
                            alt=""
                        />
                    </div>
                    <Iconnotificacao />
                </div>


                <div className="w-[100%] ">

                <div className="w-[100%] flex flex-col items-center ">
                    <div className="w-[90%] h-[320px] flex flex-col border-[#E0E0E0] border-[1px] border-solid rounded-[15px] mt-[10%]">
                        <div className="m-[16px]">
                            <p className="font-['montserrat'] font-semibold text-[24px]">Calories</p>
                            <p className="font-['montserrat'] font-regular text-[20px] ">{totalcalorias} kCal</p>
                        </div>
                        <div className="w-[100%] flex items-center justify-center mt-[3vh]">
                            <CircularProgress value={valorprogredidocalorias} total={totalcalorias} />
                        </div>
                    </div>
                    <div className="w-[90%] h-[330px] flex flex-col border-[#E0E0E0] border-[1px] border-solid rounded-[15px] mt-[10%]">
                        <div className="m-[16px]">
                            <p className="font-['montserrat'] font-semibold text-[24px]">Steps</p>
                            <p className="font-['montserrat'] font-regular text-[20px] ">{totalsteps} steps</p>
                        </div>
                        <div className="w-[100%] flex items-center justify-center mt-[3vh]">
                            <StepsCircular value={valorprogredidosteps} total={totalsteps} />
                        </div>
                    </div>


                </div>
                </div>


            </div>
        </div>
    )
}