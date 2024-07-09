import React,{createContext, useReducer, useEffect} from 'react';
import { getDepartmentService } from '../../application/services/DepartmentService';

const initialState = {
    departments:[],
    isLoading:false,
    error:null
}


const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_DEPARTMENT_REQUEST':
            return {...state, isLoading:true};
        case 'FETCH_DEPARTMENT_SUCCESS':
            return {...state, isLoading:false, departments: action.payload};
        case 'FETCH_DEPARTMENT_FAILURE':
            return {...state, isLoading:false, error: action.payload};
        default:
            return state;
    }
};

export const DepartmentContext = createContext();

export const DepartmentProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        const fetchDepartments = async ()=>{
            dispatch({type: 'FETCH_DEPARTMENT_REQUEST'});
            try {
                const departments = await getDepartmentService.execute();
                dispatch({type:'FETCH_DEPARTMENT_SUCCESS', payload:departments})
            } catch (error) {
                dispatch({type:'FETCH_DEPARTMENT_FAILURE', payload:error})
            }
        }
        fetchDepartments();
    }, []);

    return (
        <DepartmentContext.Provider value={{state, dispatch}}>
            {children}
        </DepartmentContext.Provider>
    );
};