"use client";
import { AddModal } from "@/components/AddModal";
import { EditModal } from "@/components/EditModal";
import { Header } from "@/components/Header";
import { Table } from "@/components/Table";
import { listOfEmployees } from "@/reducers/listOfEmployees";
import { Fields } from "@/types/Fields";
import { useReducer, useState } from "react";

const Page = () => {
    const [list, dispatch] = useReducer(listOfEmployees, []);
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [fields, setFields] = useState<Fields>({
        firstName: "",
        lastName: "",
        role: "",
        wage: "",
    });

    const [editFields, setEditFields] = useState<Fields>({
        firstName: "",
        lastName: "",
        role: "",
        wage: "",
        id: "",
    });

    const handleAddEmployee = () => {
        if (
            fields.firstName.trim() !== "" &&
            fields.lastName.trim() !== "" &&
            fields.wage.trim() !== "" &&
            fields.role.trim() !== ""
        ) {
            dispatch({
                type: "add",
                payload: {
                    firstName: fields.firstName,
                    lastName: fields.lastName,
                    wage: fields.wage,
                    role: fields.role,
                },
            });

            setFields({
                firstName: "",
                lastName: "",
                role: "",
                wage: "",
            });

            setAddModal(false);
        } else {
            alert("Um ou mais campos estão vazios");
        }
    };

    const handleClickCancelBtn = () => {
        setFields({
            firstName: "",
            lastName: "",
            role: "",
            wage: "",
        });
        setAddModal(false);
    };

    const handleRemoveEmployee = (id: string) => {
        const name = list.find((item) => item.id == id);
        if (!name) return false;
        if (
            !window.confirm(
                `Tem certeza que deseja excluir o(a) funcionário(a) ${name.firstName}?`
            )
        ) {
            return false;
        }
        dispatch({
            type: "remove",
            payload: {
                id,
            },
        });
    };

    const handleEditEmployee = (id: string) => {
        if (
            editFields.firstName.trim() !== "" &&
            editFields.lastName.trim() !== "" &&
            editFields.role.trim() !== "" &&
            editFields.wage.trim() !== ""
        ) {
            dispatch({
                type: "edit",
                payload: {
                    id,
                    newFirstName: editFields.firstName,
                    newLastName: editFields.lastName,
                    newRole: editFields.role,
                    newWage: editFields.wage,
                },
            });
        } else {
            alert("Um ou mais campos vazios. Verifique e tente novamente");
        }
    };

    return (
        <div className=" h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black">
            <Header />
            <div className="text-white p-4 flex justify-between items-center w-full sm:max-w-3xl mx-auto">
                <p className="text-lg">Lista de Funcionários</p>
                <button
                    onClick={() => setAddModal(true)}
                    className="px-2 py-1 bg-amber-500 rounded-md hover:bg-amber-600">
                    Cadastrar
                </button>
            </div>

            {/* Table */}
            <Table
                list={list}
                onClickRemoveBtn={handleRemoveEmployee}
                setEditFields={setEditFields}
                setEditModal={setEditModal}
            />

            {addModal && (
                <AddModal
                    fields={fields}
                    setFields={setFields}
                    onClickCancelBtn={handleClickCancelBtn}
                    onClickAddBtn={handleAddEmployee}
                />
            )}
            {editModal && (
                <EditModal
                    setEditModal={setEditModal}
                    editFields={editFields}
                    setEditFields={setEditFields}
                    onEditBtnClick={handleEditEmployee}
                />
            )}
        </div>
    );
};

export default Page;
