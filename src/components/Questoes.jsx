import { Send } from "lucide-react";
import Button from "./Button";

function Questoes({stepChange}) {
  return (
    <div className="flex flex-col w-full px-6 gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">
            Tentativa 3
        </h1>

        <p className="font-semibold text-sm">10 questões</p>
      </div>

      <div className="flex flex-col gap-3 text-lg">
        <div className="flex flex-col gap-2">
            <h2 className="font-semibold">1. Em qual área científica a reportagem foi realizada?</h2>
            <div className="space-x-2">
                <input type="radio" name="q1" id="q1i1" />
                <label htmlFor="q1i1">Ciências Jurídicas</label>
            </div>
            <div className="space-x-2">
                <input type="radio" name="q1" id="q1i2" />
                <label htmlFor="q1i2">Ciências Tecnológicas</label>
            </div>
            <div className="space-x-2">
                <input type="radio" name="q1" id="q1i3" />
                <label htmlFor="q1i3">Ciências da Saúde</label>
            </div>
            <div className="space-x-2">
                <input type="radio" name="q1" id="q1i4" />
                <label htmlFor="q1i4">Ciências Sociais</label>
            </div>
        </div>
      </div>

    <Button icon={<Send />} label="Enviar respostas" onClick={() => stepChange(3)} />

    </div>
  );
}
export default Questoes;
