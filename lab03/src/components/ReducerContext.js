import { createContext } from "react";

export const ReducerContext = createContext([{}, () => {}]);

export const initState = {
    students: [],
    groups: [],
    on: "Obserwujesz!",
    off: "Obserwuj",
};

export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "TOGGLE_STUDENT":
            if (!state.students.includes(payload)) {
                state = { ...state, students: state.students.concat(payload) };
            } else {
                state = {
                    ...state,
                    students: state.students.filter((item) => item !== payload),
                };
            }
            console.log(state.students);
            break;
        default:
            console.error("Unknown action type: ", type);
            break;
    }
    return state;
};
