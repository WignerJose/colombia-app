import React,{createContext, useReducer, useEffect} from 'react';
import { getContryService } from '../../application/services/CountryService';

const initialState = {
    info:[],
    isLoading:false,
    error:null
}


const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_INFO_REQUEST':
            return {...state, isLoading:true};
        case 'FETCH_INFO_SUCCESS':
            return {...state, isLoading:false, info: action.payload};
        case 'FETCH_INFO_FAILURE':
            return {...state, isLoading:false, error: action.payload};
        default:
            return state;
    }
};

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        const fetchContry = async ()=>{
            dispatch({type: 'FETCH_INFO_REQUEST'});
            try {
                const contry = await getContryService.execute();
                dispatch({type:'FETCH_INFO_SUCCESS', payload:contry})
            } catch (error) {
                dispatch({type:'FETCH_INFO_FAILURE', payload:error})
            }
        }
        fetchContry();
    }, []);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};