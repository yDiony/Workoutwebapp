'use client'

import imageicon from "@/app/images/iconimage.png"
import Image from "next/image"
import { Iconnotificacao } from "@/app/components/notificationicon/page"
import CircularProgress from "@/app/components/CircularProgress/page"
import { useState } from "react"
import StepsCircular from "@/app/components/StepsCircular/page"
import { motion } from "framer-motion"

export default function Page() {
    const [totalcalorias, settotalcalorias] = useState(50)
    const [valorprogredidocalorias, setvalorprogredidocalorias] = useState(20)
    const [totalsteps, settotalsteps] = useState(10000)
    const [valorprogredidosteps, setvalorprogredidosteps] = useState(4200)
    const [openModal, setopenModal] = useState(false);

    function abrirModal() {
        setopenModal(true);
    }

    function fecharModal() {
        setopenModal(false)
    }

    return (
        <div>
            {openModal && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.3 }}
                    className="z-50 fixed inset-0 h-[85vh] bg-black bg-opacity-80 flex justify-center items-center"
                >
                    <div className="w-[80%] max-w-md bg-white p-6 rounded-lg shadow-lg text-black">
                        <p className="font-[montserrat] ">The calories you want to lose</p>
                        <input className="outline-none" placeholder={`${totalcalorias.toString()} kCal`} type="number" />
                        <p className="font-[montserrat] ">The calories you already lost</p>
                        <input className="outline-none" placeholder={`${valorprogredidocalorias.toString()} kCal`} type="number" />
                        <div className="w-[100%] flex justify-center items-center mt-[10%]">
                            <button className="w-[50%] font-[montserrat] border-black rounded-lg border-solid border-[1px]" onClick={fecharModal}>Ok</button>
                        </div>
                    </div>
                </motion.div>
            )}

            <div className="max-h-[85vh] overflow-y-auto max-w-[100vw] min-h-[80vh] flex flex-col custom:px-[35%] tablet:px-[20%]">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                    className="w-[100%] flex flex-col items-center justify-center"
                >
                    <div className="w-[90%] flex justify-between items-center mt-[5%]">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.6 }}
                            className="rounded-[100%] w-[56px] h-[56px] "
                        >
                            <Image src={imageicon} alt="" />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.7 }}
                        >
                            <Iconnotificacao />
                        </motion.div>
                    </div>

                    <div className="w-[100%]">
                        <div className="w-[100%] flex flex-col items-center">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.8 }}
                                onClick={abrirModal} 
                                className="w-[90%] h-[320px] flex flex-col border-[#E0E0E0] border-[1px] border-solid rounded-[15px] mt-[10%]"
                            >
                                <div className="m-[16px]">
                                    <p className="font-['montserrat'] font-semibold text-[24px]">Calories</p>
                                    <p className="font-['montserrat'] font-regular text-[20px] ">{totalcalorias} kCal</p>
                                </div>
                                <div className="w-[100%] flex items-center justify-center mt-[3vh]">
                                    <CircularProgress value={valorprogredidocalorias} total={totalcalorias} />
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.9 }}
                                className="w-[90%] h-[330px] flex flex-col border-[#E0E0E0] border-[1px] border-solid rounded-[15px] mt-[10%]"
                            >
                                <div className="m-[16px]">
                                    <p className="font-['montserrat'] font-semibold text-[24px]">Steps</p>
                                    <p className="font-['montserrat'] font-regular text-[20px] ">{totalsteps} steps</p>
                                </div>
                                <div className="w-[100%] flex items-center justify-center mt-[3vh]">
                                    <StepsCircular value={valorprogredidosteps} total={totalsteps} />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
