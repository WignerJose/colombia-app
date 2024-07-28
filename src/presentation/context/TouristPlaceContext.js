import React,{createContext, useReducer, useEffect} from "react";
import { getTouristPlaceService } from "../../application/services/TouristPlaceService";

const initialState = {
    touristPlaces: [],
    isLoading: false,
    error: null
}


const reducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_TOURISTPLACE_REQUEST':
            return {...state, isLoading: true};
        
        case 'FETCH_TOURISTPLACE_SUCCESS':
            return {...state, isLoading: false, touristPlaces: action.payload};
        
        case 'FETCH_TOURISTPLACE_FAILURE':
            return {...state, isLoading: false, error: action.payload};
        
        default:
            return state;

    }
}

export const TouristPlaceContext = createContext();


export const TouristPlaceProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        const fetchTouristPlace = async () =>{
            dispatch({type: 'FETCH_TOURISTPLACE_REQUEST'});
            try{
                const touristPlaces = await getTouristPlaceService.execute();
                dispatch({type: 'FETCH_TOURISTPLACE_SUCCESS', payload: touristPlaces});
            }catch(error){
                dispatch({type: 'FETCH_TOURISTPLACE_FAILURE', payload: error});
            }
        }

        fetchTouristPlace();
    },[]);

    return(
        <TouristPlaceContext.Provider value={{state, dispatch}}>
            {children}
        </TouristPlaceContext.Provider>
    )
}