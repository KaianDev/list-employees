import {
    Dispatch,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useReducer,
} from "react";
import { Employee } from "@/types/Employee";
import { ListActions, listOfEmployees } from "@/reducers/listOfEmployees";

const STORAGE_KEY = "employeesContextContent";

type ContextType = {
    employeesList: Employee[];
    dispatch: Dispatch<ListActions>;
};

export const EmployeesContext = createContext<ContextType | null>(null);

interface EmployeeProviderProps {
    children: ReactNode;
}
export function EmployeeProvider({ children }: EmployeeProviderProps) {
    const [employeesList, dispatch] = useReducer(
        listOfEmployees,
        JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(employeesList));
    }, [employeesList]);

    return (
        <EmployeesContext.Provider value={{ employeesList, dispatch }}>
            {children}
        </EmployeesContext.Provider>
    );
}

export const useList = () => useContext(EmployeesContext);
