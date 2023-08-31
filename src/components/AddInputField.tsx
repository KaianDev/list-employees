import { Fields } from "@/types/Fields";
import { ChangeEvent, useState } from "react";

type Props = {
    label: string;
    type?: string;
    id: string;
    name: string;
    fields: Fields;
    setFields: (fields: Fields) => void;
};

export const AddInputField = ({
    label,
    id,
    type = "text",
    name,
    setFields,
    fields,
}: Props) => {
    const [inputValue, setInputValue] = useState("");

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        const clone: Fields = { ...fields };
        clone[name as keyof Fields] = e.target.value;
        setFields(clone);
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
                value={inputValue}
                onChange={handleChangeInput}
            />
        </div>
    );
};
