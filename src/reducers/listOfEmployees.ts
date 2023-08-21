import { Employee } from "@/types/Employee";
import { v4 as uuidv4 } from "uuid";

type AddEmployee = {
    type: "add";
    payload: {
        firstName: string;
        lastName: string;
        role: string;
        wage: string;
    };
};

type EditEmployee = {
    type: "edit";
    payload: {
        id: string;
        newFirstName: string;
        newLastName: string;
        newWage: string;
        newRole: string;
    };
};

type RemoveEmployee = {
    type: "remove";
    payload: {
        id: string;
    };
};

type ActionList = AddEmployee | EditEmployee | RemoveEmployee;
export const listOfEmployees = (list: Employee[], action: ActionList) => {
    switch (action.type) {
        case "add":
            return [
                ...list,
                {
                    id: uuidv4(),
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    role: action.payload.role,
                    wage: action.payload.wage,
                },
            ];
        case "edit":
            return list.map((item) => {
                if (item.id === action.payload.id) {
                    (item.firstName = action.payload.newFirstName),
                        (item.lastName = action.payload.newLastName),
                        (item.role = action.payload.newRole),
                        (item.wage = action.payload.newWage);
                }
                return item;
            });
        case "remove":
            return list.filter((item) => item.id !== action.payload.id);
        default:
            return list;
    }
};
