import React from "react";
import { Stepsicon } from "../stepsicon/page";
import { motion } from "motion/react";

interface CircularProgressProps {
  value: number; // Valor atual
  total: number; // Valor total
  size?: number; // Tamanho do círculo (opcional, padrão: 175px)
  strokeWidth?: number; // Espessura da barra (opcional, padrão: 25px)
}

const StepsCircular: React.FC<CircularProgressProps> = ({
  value,
  total,
  size = 175,
  strokeWidth = 25,
}) => {
  const percentage = Math.min(Math.max((value / total) * 100, 0), 100); // Garante que fique entre 0 e 100
  const radius = (size - strokeWidth) / 2; // Raio do círculo
  const circumference = 2 * Math.PI * radius; // Circunferência total
  const progress = (percentage / 100) * circumference; // Comprimento do traço da barra

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Círculo de fundo */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#A1A1AA" // Cor do fundo
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Círculo de progresso */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#000000" // Cor da barra de progresso
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference} // Define o comprimento total do traço
          initial={{ strokeDashoffset: circumference }} // Começa com a barra cheia
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
        <Stepsicon />
        <span className="font-['montserrat'] font-medium text-[14px] text-black mt-[10px]">
          {total - value} steps Left
        </span>
      </div>
    </div>
  );
};

export default StepsCircular;
