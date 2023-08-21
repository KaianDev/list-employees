import { Employee } from "@/types/Employee";
import { Fields } from "@/types/Fields";
import React from "react";
import { FaPenToSquare, FaXmark } from "react-icons/fa6";
type Props = {
    item: Employee;
    onClickRemoveBtn: () => void;
    setEditFields: (fiels: Fields) => void;
    setEditModal: (x: boolean) => void;
};

export const TableRow = ({
    item,
    onClickRemoveBtn,
    setEditFields,
    setEditModal,
}: Props) => {
    
    const fullName = `${item.firstName} ${item.lastName}`;

    const handleEditBtnClick = () => {
        setEditFields({
            firstName: item.firstName,
            lastName: item.lastName,
            role: item.role,
            wage: item.wage,
            id: item.id,
        });
        setEditModal(true);
    };

    return (
        <tr className="border-b border-white/60 last:border-none">

            <td className="p-2 first-letter:uppercase">
                <p className="font-semibold">{fullName}</p>
                <p className="text-sm font-semibold sm:hidden text-gray-900">
                    {item.role}
                </p>
            </td>

            <td className="p-2 first-letter:uppercase hidden sm:table-cell">
                {item.role}
            </td>

            <td className="p-2">
                {Number(item.wage).toFixed(2).replace(".", ",")}
            </td>

            <td className="p-2">
                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={handleEditBtnClick}
                        className="flex justify-center items-center bg-amber-500 w-6 h-6 rounded-sm text-lg hover:text-white text-slate-800">
                        <FaPenToSquare />
                    </button>
                    <button
                        onClick={onClickRemoveBtn}
                        className="flex justify-center items-center bg-red-500 w-6 h-6 rounded-sm text-lg hover:text-white text-slate-800">
                        <FaXmark />
                    </button>
                </div>
            </td>

        </tr>
    );
};
