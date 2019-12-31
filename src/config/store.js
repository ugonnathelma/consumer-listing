import React, { useReducer } from "react";

const initialState = { companies: [], dispatch: null };

export const store = React.createContext(initialState);

const { Provider } = store;

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE_COMPANIES":
        return { ...state, companies: [...state.companies, ...action.payload] };
      case "UPDATE_COMPANY":
        const newData = action.payload;
        return {
          ...state,
          companies: [
            ...state.companies.map(company => {
              if (company.id === newData.id) return newData;
              return company;
            })
          ]
        };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default { store, StateProvider };
