import React, { createContext, useReducer, useState } from 'react';

export const FilterContext = createContext();


let initialState = { state: {} };
export const FilterContextProvider = ({ children }) => {


    const filterReducer = (state, action) => {

        if (action.type === 'SET_FILTER') {

            return {
                state: action.payload
            };
        } else {
            return state
        }
    };
    const [filter, dispatch] = useReducer(filterReducer, initialState);

    return (
        <FilterContext.Provider value={{ data: filter, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
};