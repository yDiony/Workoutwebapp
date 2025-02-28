'use client'


import { useState, useEffect } from "react";
import { Lixoicon } from "@/app/components/Lixoicon/page";
import { AnimatePresence, motion } from "motion/react";

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

    // Salvar treinos no localStorage sempre que `treinos` for alterado
    useEffect(() => {
        localStorage.setItem("treinos", JSON.stringify(treinos));
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
                                    <motion.button disabled={treinos.some(t => t.dia === dia)} onClick={() => setDiaEscolhido(dia)} key={index} className={`font-[montserrat] p-2 rounded-lg border  ${diaEscolhido === dia ? "border-solid border-[2px] border-black" : "bg-white"} ${treinos.some(t => t.dia === dia) ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                        {dia}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="mb-2 font-[montserrat] ">Exercises (max 2):</p>
                            <div className="grid grid-cols-2 gap-2">
                                {tiposTreino.map((treino, index) => (
                                    <motion.button
                                        whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
                                        key={index}
                                        onClick={() => toggleTreinoSelecionado(treino)}
                                        className={`font-[montserrat] p-2 rounded-lg border ${treinosEscolhidos.includes(treino) ? "border-solid border-[2px] border-black" : "bg-white"} hover:bg-gray-200`}
                                    >
                                        {treino}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button name="Calories" onClick={salvarTreino} className="font-[montserrat] px-4 py-2 bg-[white] border-[2px] border-black border-solid rounded-lg hover:bg-gray-200">Confirm</button>
                            <button name="kCal progress" onClick={fecharModal} className="font-[montserrat] px-4 py-2 bg-black text-[#fff] rounded-lg hover:bg-gray-700">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            <div>
                {treinos.length > 0 ? (
                    <ul>
                    {treinos.map((treino, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }} // Inicia com a opacidade 0 e deslocado para baixo
                        animate={{ opacity: 1, y: 0 }} // Anima para opacidade 1 e posição original
                        exit={{ opacity: 0, y: 20 }} // Quando o item sair, ele desaparece e se move para baixo
                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }} // Duração e atraso para cada item
                      >
                        <div className="w-[90%] flex mt-[5%] ml-[5%]">
                          <div className="w-[100%] flex items-center">
                            <div className="w-[72px] h-[72px] bg-black items-center justify-center flex rounded-[100%]">
                              <p className="font-[montserrat] text-white font-medium text-[16px]">{treino.dia}</p>
                            </div>
                            <p className="w-[70%] ml-[5%] font-[montserrat] text-black text-[20px] font-medium">
                              {treino.treinos.join(" and ")}
                            </p>
                            <button onClick={() => excluirTreino(treino.dia)} className="">
                              <Lixoicon />
                            </button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                    <p>Nenhum treino agendado ainda.</p>
                )}
            </div>
        </div>
    );
}
