import { Check, X, RotateCw } from "lucide-react";
import Button from "./Button";
import resultadoIlustracao from "../assets/resultadoIlustracao.png"

function Resultado({stepChange}) {
  return (
    <div className="flex flex-col w-full px-6 gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">
            Resultado
        </h1>

        <p className="font-semibold text-sm">Tentativa 3</p>
      </div>

      <div className="flex flex-col items-center gap-3 text-lg">
        <img src={resultadoIlustracao} alt="" />
        <h1 className="text-center font-semibold text-xl">Questionário respondido com sucesso!!!</h1>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <div className="rounded-full bg-green-dark p-2">
              <Check size={20} color="#f5f5f5" />
            </div>
            9 Acertos
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <div className="rounded-full bg-[#AC3030] p-2">
              <X size={20} color="#f5f5f5" />
            </div>
            1 Erro
          </div>
        </div>
      </div>

    <Button icon={<Check />} label="Finalizar questinoário" onClick={() => stepChange(1)} />
    <Button icon={<RotateCw />} label="Refazer questionário" variant="secondary" onClick={() => stepChange(2)} />

    </div>
  );
}
export default Resultado;
