'use client'

import React, { useState } from "react";
import { Fireicon } from "../fireicon/page";
import { motion } from "motion/react";


 const CircularProgress = (props:any) =>  {
  const { value,
   total,
   size = 175,
   strokeWidth = 25,
  } = props;

  const [openModal, setopenModal] = useState(false);
  const percentage = Math.min(Math.max((value / total) * 100, 0), 100); // Garante que fique entre 0 e 100
  const radius = (size - strokeWidth) / 2; // Raio do círculo
  const circumference = 2 * Math.PI * radius; // Circunferência total
  const progress = (percentage / 100) * circumference; // Comprimento do traço da barra
  
  
  const abrirModal = () => {
    setopenModal(true);
  }

  const fecharModal = () => {
    setopenModal(false)
  }

  return (
    <div>
            
      <div onClick={abrirModal} className="z-51 relative flex items-center justify-center" style={{ width: size, height: size }}>



        {/* Círculo de fundo */}
        <svg  width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#A1A1AA"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Círculo de progresso */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#000000"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference} // Define o comprimento total do traço
            initial={{ strokeDashoffset: circumference }} // Começa a animação com a barra cheia
            animate={{
              strokeDashoffset: circumference - progress, // Anima de cheio para o valor de progresso
            }}
            transition={{
              duration: 1, // Duração da animação (ajuste conforme necessário)
              ease: "easeOut", // Tipo de animação (suave)
            }}
            strokeLinecap="round"
            transform={`rotate(90 ${size / 2} ${size / 2})`} // Rotaciona para iniciar do lado direito
          />

        </svg>
        <div className="absolute flex flex-col items-center">
          <Fireicon />
          <span className="font-['montserrat'] font-medium text-[14px] text-black mt-[10px]">
            {total - value} kcal Left
          </span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
