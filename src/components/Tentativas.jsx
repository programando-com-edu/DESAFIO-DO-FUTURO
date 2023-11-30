import { RotateCw } from "lucide-react";
import Button from "./Button";

function Tentativas({stepChange}) {
  return (
    <div className="flex flex-col w-full px-6 gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">
            Questionário
        </h1>

        <p className="font-semibold text-sm">2 tentativas</p>
      </div>

      <div className="flex flex-col gap-3 text-lg">
        <div className="flex justify-between items-center">
            <h2>Tentativa 1</h2>
            <h2>4/10</h2>
        </div>
        <div className="flex justify-between items-center">
            <h2>Tentativa 2</h2>
            <h2>7/10</h2>
        </div>
      </div>

    <Button icon={<RotateCw/>} label="Nova tentativa" onClick={() => stepChange(2)} />

    </div>
  );
}
export default Tentativas;
