import { FaX } from "react-icons/fa6";
import { EditInputField } from "./EditInputField";
import { Fields } from "@/types/Fields";
import { useList } from "@/contexts/EmployeesContext";

type Props = {
    inputField: Fields;
    setInputField: (i: Fields) => void;
    closeModal: () => void;
};

export const EditModal = ({ inputField, setInputField, closeModal }: Props) => {
    const listCtx = useList();

    const handleEditEmployee = () => {
        if (
            inputField.firstName.trim() !== "" &&
            inputField.lastName.trim() !== "" &&
            inputField.role.trim() !== "" &&
            inputField.wage.trim() !== ""
        ) {
            if (inputField.id) {
                listCtx?.dispatch({
                    type: "edit",
                    payload: {
                        id: inputField.id,
                        newFirstName: inputField.firstName,
                        newLastName: inputField.lastName,
                        newRole: inputField.role,
                        newWage: inputField.wage,
                    },
                });
                closeModal();
            }
        } else {
            alert(
                "Um ou mais campos estão vazios, verifique e tente novamente"
            );
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/60 p-3">
            <div className="w-full max-w-3xl bg-slate-500 p-2 rounded-md">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl text-amber-500 font-semibold">
                        Editar cadastro de Funcionário
                    </h2>
                    <button
                        className=" bg-zinc-600 flex rounded-sm justify-center items-center text-white w-6 h-6 hover:bg-red-500"
                        onClick={closeModal}
                    >
                        <FaX />
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <EditInputField
                        label="Nome"
                        id="editFNameField"
                        name="firstName"
                        editFields={inputField}
                        setEditFields={setInputField}
                    />
                    <EditInputField
                        label="Sobrenome"
                        id="editLNameField"
                        name="lastName"
                        editFields={inputField}
                        setEditFields={setInputField}
                    />
                    <EditInputField
                        label="Função"
                        id="editRoleField"
                        name="role"
                        editFields={inputField}
                        setEditFields={setInputField}
                    />
                    <EditInputField
                        label="Salário"
                        type="number"
                        id="editWageField"
                        name="wage"
                        editFields={inputField}
                        setEditFields={setInputField}
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
                        onClick={handleEditEmployee}
                        className="px-2 py-1 text-white bg-green-500 rounded-md hover:bg-green-600"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};
