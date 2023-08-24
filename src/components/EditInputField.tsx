import { Fields } from "@/types/Fields";
import { ChangeEvent } from "react";

type Props = {
    label: string;
    type?: string;
    id: string;
    name: string;
    editFields: Fields;
    setEditFields: (fields: Fields) => void;
};

export const EditInputField = ({
    label,
    type = "text",
    id,
    name,
    editFields,
    setEditFields,
}: Props) => {
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const clone = { ...editFields };
        clone[name as keyof Fields] = e.target.value;
        setEditFields(clone);
    };
    return (
        <div className="my-2 text-white">
            <label className="cursor-pointer my-1 inline-block" htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                className="px-2 py-1 text-lg rounded-md outline-none bg-slate-800 text-white w-full"
                value={editFields[name as keyof Fields]}
                onChange={handleChangeInput}
            />
        </div>
    );
};
