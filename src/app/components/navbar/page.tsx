'use client'

import { Homeicon } from "../homeicon/page";
import { Workouticon } from "../workouticon/page";
import { Statisticicon } from "../statisticicon/page";
import { Profileicon } from "../profileicon/page";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";


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
        <div className="fixed bottom-0 h-[15vh] flex justify-evenly w-[100%] bg-white z-50">
        {[
            { path: "/dashboard", icon: Homeicon, label: "Home" },
            { path: "/workout", icon: Workouticon, label: "Workout" },
            { path: "/statistics", icon: Statisticicon, label: "Statistic" },
            { path: "/profile", icon: Profileicon, label: "Profile" },
        ].map(({ path, icon: Icon, label }) => (
            <motion.button 
                key={path} 
                onClick={() => mudarcoresecaminho(path)} 
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
            >
                <motion.div 
                    whileHover={{ scale: 1.2 }} 
                    transition={{ duration: 0.2 }}
                >
                    <Icon color={caminhodousuario === path ? "black" : "gray"} />
                </motion.div>
                <motion.p 
                    className={`font-[montserrat] font-medium text-[13px] ${caminhodousuario === path ? "text-black" : "text-gray-400"}`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                >
                    {label}
                </motion.p>
            </motion.button>
        ))}
    </div>
    )
}