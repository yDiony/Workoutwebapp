'use client'

import { Homeicon } from "../homeicon/page";
import { Workouticon } from "../workouticon/page";
import { Statisticicon } from "../statisticicon/page";
import { Profileicon } from "../profileicon/page";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";


export const Navbar = () => {
    const router = useRouter();
    const caminhodousuario = usePathname();
    const [caminhodesejado, setCaminhoDesejado] = useState("");

    function mudarcoresecaminho(novoCaminho: string) {
        if (caminhodousuario === novoCaminho) {
            console.log(`Você já está em ${novoCaminho}`);
        } else {
            setCaminhoDesejado(novoCaminho);
            router.push(novoCaminho);
        }
    }





    return (
        <div className="fixed bottom-0 h-[15vh] flex justify-evenly w-[100%] bg-white z-50 ">
            <button onClick={() => mudarcoresecaminho("/dashboard")} className="flex flex-col items-center justify-center">
                <Homeicon color={caminhodousuario === "/dashboard" ? "black" : "gray"} />
                <p className={`font-[montserrat] font-medium text-[13px] ${caminhodousuario === "/dashboard" ? "text-black" : "text-gray-400"}`}>Home</p>
            </button>
            <button onClick={() => mudarcoresecaminho("/workout")} className="flex flex-col items-center justify-center">
                <Workouticon color={caminhodousuario === "/workout" ? "black" : "gray"} />
                <p className={`font-[montserrat] font-medium text-[13px] ${caminhodousuario === "/workout" ? "text-black" : "text-gray-400"}`}>Workout</p>
            </button>
            <button onClick={() => mudarcoresecaminho("/statistics")} className="flex flex-col items-center justify-center">
                <Statisticicon color={caminhodousuario === "/statistics" ? "black" : "gray"} />
                <p className={`font-[montserrat] font-medium text-[13px] ${caminhodousuario === "/statistics" ? "text-black" : "text-gray-400"}`}>Statistic</p>
            </button>
            <button onClick={() => mudarcoresecaminho("/profile")} className="flex flex-col  items-center justify-center">
                <Profileicon color={caminhodousuario === "/profile" ? "black" : "gray"} />
                <p className={`font-[montserrat] font-medium text-[13px] ${caminhodousuario === "/profile" ? "text-black" : "text-gray-400"}`}>Profile</p>
            </button>
        </div>
    )
}