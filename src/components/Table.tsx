import { useState } from "react";
import { EditModal } from "./EditModal";
import { TableRow } from "./TableRow";
import { useList } from "@/contexts/EmployeesContext";
import { Fields } from "@/types/Fields";

export const Table = () => {
    const listCtx = useList();
    const [showModal, setShowModal] = useState(false);
    const [inputField, setInputField] = useState<Fields>({
        id: "",
        firstName: "",
        lastName: "",
        role: "",
        wage: "",
    });

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleEditRowClick = (i: Fields) => {
        openModal();
        setInputField(i);
        console.log(inputField);
    };

    return (
        <>
            <div className="px-2">
                <table className="w-full max-w-4xl mx-auto bg-slate-600 rounded-md overflow-hidden border shadow-lg shadow-black/50 text-white">
                    <thead className="bg-slate-800 border-b">
                        <tr className="text-left">
                            <th className="p-2">Nome</th>
                            <th className="p-2 hidden sm:table-cell">Função</th>
                            <th className="p-2">Salário (R$)</th>
                            <th className="p-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listCtx?.employeesList.map((item) => (
                            <TableRow
                                key={item.id}
                                item={item}
                                onClickEdit={handleEditRowClick}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            {showModal && (
                <EditModal
                    inputField={inputField}
                    setInputField={setInputField}
                    closeModal={closeModal}
                />
            )}
        </>
    );
};
