import { FaX } from "react-icons/fa6";
import { EditInputField } from "./EditInputField";
import { Fields } from "@/types/Fields";

type Props = {
    editFields: Fields;
    setEditFields: (fields: Fields) => void;
    setEditModal: (x: boolean) => void;
    onEditBtnClick: (id: string) => void;
};

export const EditModal = ({
    editFields,
    setEditFields,
    setEditModal,
    onEditBtnClick,
}: Props) => {
    const handleConfirmEditClick = () => {
        if (editFields.id) onEditBtnClick(editFields.id);
        setEditModal(false);
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/60 p-3">
            <div className="w-full max-w-3xl bg-slate-500 p-2 rounded-md">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl text-amber-500 font-semibold">
                        Editar cadastro de Funcionário
                    </h2>
                    <button
                        className=" bg-zinc-600 flex rounded-sm justify-center items-center w-6 h-6 hover:bg-red-500"
                        onClick={() => setEditModal(false)}>
                        <FaX />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <EditInputField
                        label="Nome"
                        id="editFNameField"
                        name="firstName"
                        editFields={editFields}
                        setEditFields={setEditFields}
                    />
                    <EditInputField
                        label="Sobrenome"
                        id="editLNameField"
                        name="lastName"
                        editFields={editFields}
                        setEditFields={setEditFields}
                    />
                    <EditInputField
                        label="Função"
                        id="editRoleField"
                        name="role"
                        editFields={editFields}
                        setEditFields={setEditFields}
                    />
                    <EditInputField
                        label="Salário"
                        type="number"
                        id="editWageField"
                        name="wage"
                        editFields={editFields}
                        setEditFields={setEditFields}
                    />
                </div>
                <div className="flex gap-4 justify-end my-2">
                    <button onClick={() => setEditModal(false)} className="px-2 py-1 bg-red-500 rounded-md hover:bg-red-600">
                        Cancelar
                    </button>
                    <button
                        onClick={handleConfirmEditClick}
                        className="px-2 py-1 bg-green-500 rounded-md hover:bg-green-600">
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};
