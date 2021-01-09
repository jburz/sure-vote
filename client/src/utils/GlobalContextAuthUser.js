import { createContext, useContext, useReducer } from "react";

//set up global context
export const GlobalContextAuthUser = createContext();

//set up global provider & reducer
const defaultState = {
    id: ""
};

//reducer 
const reducer = (state, action) => {
    console.log("GlobalContextAuthUser: reducer", { action });
    switch (action.type) {
        case 'UPDATE_USERID':
            return {
                ...state,
                id: action.payload
            };
        default:
            return state;
    }
};

const GlobalProviderAuthUser = (props) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <GlobalContextAuthUser.Provider value={[state, dispatch]} {...props} />
    );
};


export default GlobalProviderAuthUser;

//custom hook for 
export const useGlobalContextAuthUser = () => {
    return useContext(GlobalContextAuthUser);
};