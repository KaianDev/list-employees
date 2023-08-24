import { Employee } from "@/types/Employee";
import { TableRow } from "./TableRow";
import { Fields } from "@/types/Fields";
import { it } from "node:test";

type Props = {
    list: Employee[];
    onClickRemoveBtn: (id: string) => void;
    setEditFields: (fields: Fields) => void;
    setEditModal: (x: boolean) => void;
};

export const Table = ({
    list,
    onClickRemoveBtn,
    setEditFields,
    setEditModal,
}: Props) => {
    return (
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
                    {list.map((item) => (
                        <TableRow
                            setEditModal={setEditModal}
                            setEditFields={setEditFields}
                            key={item.id}
                            item={item}
                            onClickRemoveBtn={() => onClickRemoveBtn(item.id)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
