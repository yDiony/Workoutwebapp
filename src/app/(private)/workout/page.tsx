'use client'

import { useState, useEffect } from "react";
import { Lixoicon } from "@/app/components/Lixoicon/page";

export default function Page() {
    const [treinos, setTreinos] = useState<{ dia: string; treinos: string[] }[]>([]);
    const [diaEscolhido, setDiaEscolhido] = useState("");
    const [treinosEscolhidos, setTreinosEscolhidos] = useState<string[]>([]);
    const [openModal, setOpenModal] = useState(false);

    const diasDaSemana = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const tiposTreino = ["Chest", "Biceps", "Leg", "Back", "Triceps"];

    useEffect(() => {
        const storedTreinos = localStorage.getItem("treinos");
        if (storedTreinos) {
            setTreinos(JSON.parse(storedTreinos));
        }
    }, []);
    
    useEffect(() => {
        
        const treinosOrdenados = [...treinos].sort((a, b) => diasDaSemana.indexOf(a.dia) - diasDaSemana.indexOf(b.dia));
        
       
        if (JSON.stringify(treinosOrdenados) !== JSON.stringify(treinos)) {
            localStorage.setItem("treinos", JSON.stringify(treinosOrdenados));
            setTreinos(treinosOrdenados); 
        }
    }, [treinos]);

    function abrirModal() {
        setOpenModal(true);
    }

    function fecharModal() {
        setOpenModal(false);
        setDiaEscolhido("");
        setTreinosEscolhidos([]);
    }

    function toggleTreinoSelecionado(treino: string) {
        if (treinosEscolhidos.includes(treino)) {
            setTreinosEscolhidos(treinosEscolhidos.filter(t => t !== treino));
        } else if (treinosEscolhidos.length < 2) {
            setTreinosEscolhidos([...treinosEscolhidos, treino]);
        } else {
            alert("Você só pode selecionar até 2 treinos por dia.");
        }
    }

    function salvarTreino() {
        if (diaEscolhido && treinosEscolhidos.length > 0) {
            if (treinos.some(t => t.dia === diaEscolhido)) {
                alert("Este dia já foi selecionado.");
                return;
            }
            const novosTreinos = [...treinos, { dia: diaEscolhido, treinos: treinosEscolhidos }];
            setTreinos(novosTreinos.sort((a, b) => diasDaSemana.indexOf(a.dia) - diasDaSemana.indexOf(b.dia))); // Ordena os treinos após salvar
            fecharModal();
        } else {
            alert("Selecione um dia e pelo menos um treino.");
        }
    }

    function excluirTreino(dia: string) {
        const novosTreinos = treinos.filter(t => t.dia !== dia);
        setTreinos(novosTreinos);
    }

    return (
        <div>

            <a onClick={abrirModal} className={`pointer absolute bottom-[18vh] right-5 flex justify-center items-center w-[56px] h-[56px] bg-black rounded-[8px] ${openModal ? "hidden" : "block"}`}>
                <p className=" text-white text-[40px]">+</p>
            </a>

            {openModal && (
                <div className="fixed inset-0 h-[85vh] bg-black bg-opacity-80 flex justify-center items-center">
                    <div className="w-[80%]  max-w-md bg-white p-6 rounded-lg shadow-lg text-black">
                        <h2 className="font-[montserrat] text-xl font-semibold mb-4">Select the exercises</h2>
                        <div className="mb-4">
                            <p className="mb-2 font-[montserrat] ">Day of the week:</p>
                            <div className="grid grid-cols-3 gap-2">
                                {diasDaSemana.map((dia, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setDiaEscolhido(dia)}
                                        disabled={treinos.some(t => t.dia === dia)}
                                        className={`font-[montserrat] p-2 rounded-lg border  ${diaEscolhido === dia ? "border-solid border-[2px] border-black" : "bg-white"} ${treinos.some(t => t.dia === dia) ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                                    >
                                        {dia}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="mb-2 font-[montserrat] ">Exercises (max 2):</p>
                            <div className="grid grid-cols-2 gap-2">
                                {tiposTreino.map((treino, index) => (
                                    <button
                                        key={index}
                                        onClick={() => toggleTreinoSelecionado(treino)}
                                        className={`font-[montserrat] p-2 rounded-lg border ${treinosEscolhidos.includes(treino) ? "border-solid border-[2px] border-black" : "bg-white"} hover:bg-gray-200`}
                                    >
                                        {treino}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button onClick={salvarTreino} className="font-[montserrat] px-4 py-2 bg-[white] border-[2px] border-black border-solid rounded-lg hover:bg-gray-200">Confirm</button>
                            <button onClick={fecharModal} className="font-[montserrat] px-4 py-2 bg-black text-[#fff] rounded-lg hover:bg-gray-700">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            <div>
                {treinos.length > 0 ? (
                    <ul>
                        {treinos.map((treino, index) => (
                            <li key={index}>
                                <div className="w-[90%] flex mt-[5%] ml-[5%]">
                                    <div className="w-[100%] flex items-center">
                                        <div className="w-[72px] h-[72px] bg-black items-center justify-center flex rounded-[100%]">
                                            <p className=" font-[montserrat] text-white font-medium text-[16px]">{treino.dia}</p>
                                        </div>
                                        <p className="w-[70%] ml-[5%] font-[montserrat] text-black text-[20px] font-medium">{treino.treinos.join(" and ")}</p>
                                <button onClick={() => excluirTreino(treino.dia)} className=""><Lixoicon /></button> 
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Nenhum treino agendado ainda.</p>
                )}
            </div>
        </div>
    );
}
