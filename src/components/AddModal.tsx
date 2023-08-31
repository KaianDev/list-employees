import { AddInputField } from "./AddInputField";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import { useList } from "@/contexts/EmployeesContext";
import { Fields } from "@/types/Fields";

type Props = {
    closeModal: () => void;
};

export const AddModal = ({ closeModal }: Props) => {
    const [inputField, setInputField] = useState<Fields>({
        firstName: "",
        lastName: "",
        wage: "",
        role: "",
    });
    
    const listCtx = useList();

    const handleAddEmployee = () => {
        if (
            inputField.firstName.trim() !== "" &&
            inputField.lastName.trim() !== "" &&
            inputField.role.trim() !== "" &&
            inputField.wage.trim() !== ""
        ) {
            listCtx?.dispatch({
                type: "add",
                payload: {
                    firstName: inputField.firstName,
                    lastName: inputField.lastName,
                    role: inputField.role,
                    wage: inputField.wage,
                },
            });
            closeModal();
            for (let i in inputField) {
                inputField[i as keyof Fields] = "";
            }
        } else {
            alert(
                "Um ou mais campos estão vazios, verifique e tente novamente"
            );
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center border shadow-lg shadow-black/50 bg-black/60 p-3">
            <div className="w-full max-w-3xl bg-slate-500 p-2 rounded-md">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl text-amber-500 font-semibold">
                        Cadastrar Funcionário
                    </h2>
                    <button
                        className=" bg-zinc-600 flex rounded-sm justify-center items-center text-white w-6 h-6 hover:bg-red-500"
                        onClick={closeModal}
                    >
                        <FaX />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <AddInputField
                        label="Nome"
                        id="firstNameField"
                        name="firstName"
                        fields={inputField}
                        setFields={setInputField}
                    />
                    <AddInputField
                        label="Sobrenome"
                        id="lastNameField"
                        name="lastName"
                        fields={inputField}
                        setFields={setInputField}
                    />
                    <AddInputField
                        label="Função"
                        id="roleField"
                        name="role"
                        fields={inputField}
                        setFields={setInputField}
                    />
                    <AddInputField
                        label="Salário"
                        id="wageField"
                        type="number"
                        name="wage"
                        fields={inputField}
                        setFields={setInputField}
                    />
                </div>
                <div className="flex gap-4 justify-end my-2">
                    <button
                        onClick={closeModal}
                        className="px-2 py-1 bg-red-500 rounded-md text-white hover:bg-red-600"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleAddEmployee}
                        className="px-2 py-1 bg-green-500 rounded-md text-white hover:bg-green-600"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
};
