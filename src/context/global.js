
import React, {createContext, useContext, useEffect} from "react";
import { useReducer } from "react";

const GlobalContext = createContext();
const baseUrl = "https://api.jikan.moe/v4";

const LODING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME"
const GET_AIRING_ANIME = "GET_AIRING_ANIME"
const reducer = (state, action) => {
    switch(action.type){
        case LODING:
            return {...state, loding: true}
        case GET_POPULAR_ANIME:
            return {...state, popularAnime: action.payload, loding: false}
        case GET_UPCOMING_ANIME:
            return {...state, upcomingAnime: action.payload, loding: false}

        default:
            return state;
    }
}

export const GlobalContextProvider = ({children}) =>{
      const initialState = {
        popularAnime: [],
        upcomingAnime: [],
        airingAnime: [],
        pictures: [],
        isSearch: false,
        SearchResult: [],
        loding: false 
      }
      const [state, dispatch] = useReducer(reducer, initialState);




    const getPopularAnime = async () => {
        dispatch({type: LODING})
        const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
        const data = await response.json();
        dispatch({type: GET_POPULAR_ANIME, payload: data.data})
    }
    
    
    useEffect(() => {
        getPopularAnime();
    }, [])
    return(
        <GlobalContext.Provider value={{
           ...state,
         }}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(GlobalContext);
}