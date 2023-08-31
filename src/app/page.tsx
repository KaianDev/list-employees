"use client";

import { AddModal } from "@/components/AddModal";
import { Header } from "@/components/Header";
import { Table } from "@/components/Table";
import { EmployeeProvider, useList } from "@/contexts/EmployeesContext";
import { useState } from "react";

const Page = () => {
    const [addModal, setAddModal] = useState(false);

    const closeModal = () => {
        setAddModal(false);
    };

    return (
        <div className="h-screen text-white bg-slate-600 sm:bg-gradient-to-b from-gray-700 via-gray-900 to-black">
            <Header />
            <EmployeeProvider>
                <>
                    <div className="p-4 flex justify-between items-center w-full sm:max-w-3xl mx-auto">
                        <p className="text-lg">
                            Lista de Funcionários
                        </p>
                        <button
                            onClick={() => setAddModal(true)}
                            className="px-2 py-1 bg-amber-500 rounded-md hover:bg-amber-600"
                        >
                            Cadastrar
                        </button>
                    </div>
                    <Table />
                    {addModal && <AddModal closeModal={closeModal} />}
                </>
            </EmployeeProvider>
        </div>
    );
};

export default Page;
