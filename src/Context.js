import React, { useReducer, useContext, createContext } from 'react';
import axios from 'axios';

const initialState = {
  info: {
    location: '서울시',
    lat: 36.387934,
    lon: 120.857758,
    degree: 22,
    weatherCode: '03d',
    searchToggle: false,
    searchList: [],
  },
  current: {
    loading: false,
    data: null,
    error: null
  },
  search: {
    loading: false,
    data: null,
    error: null
  }
}

const loadingState = {
  loading: true,
  data: null,
  error: null
};

const success = data => ({
  loading: false,
  data,
  error: null
});

const error = error => ({
  loading: false,
  data: null,
  error
});

const kelvinToCelsius = k => {
  return k-273.15;
};

function reducer(state, action) {
  switch(action.type) {
    case 'GET_CURRENT': 
      return {
        ...state,
        current: loadingState
      };
    case 'GET_CURRENT_SUCCESS': 
      return {
        ...state,
        current: success(action.data),
        info: {
          ...state.info,
          degree: Math.round(kelvinToCelsius(action.data.main.temp)),
          weatherCode: action.data.weather[0].icon
        }
      };
    case 'GET_CURRENT_ERROR': 
      return {
        ...state,
        current: error(action.error)
      };
    case 'GET_SEARCH': 
      return {
        ...state,
        search: loadingState
      };
    case 'GET_SEARCH_SUCCESS': 
      if(action.data.response.status === "OK") {
      const { features } = action.data.response.result.featureCollection;
        return {
          ...state,
          search: success(features),
          info: {
            ...state.info,
            searchList: features.map(feature => {
            return { 
              locationFull: feature.properties.full_nm,
              location: feature.properties.sig_kor_nm,
              lat: feature.geometry.coordinates[0][0][0][1],
              lon: feature.geometry.coordinates[0][0][0][0],
            };})
          }
        };
      } else {
        return {
          ...state,
          search: success(null)
        }
      }
    case 'GET_SEARCH_ERROR': 
      return {
        ...state,
        search: error(action.error)
      };
    case 'SET_INFO': 
      return {
        ...state,
        info: {
          ...action.info
        }
      }
    case 'SEARCH_TOGGLE':
      return {
        ...state,
        info: {
          ...state.info,
          searchToggle: !state.info.searchToggle,
        }
      }
    case 'SELECT_PLACE':
      return {
        ...state,
        info: {
          ...state.info,
          location: action.location,
          lat: action.lat,
          lon: action.lon,
          searchToggle: false,
          searchList: []
        }
      }
    default: 
      throw new Error(`unhandled action type:${action.type}`);
  }
}

const StateContext = createContext(null);
const DispatchContext = createContext(null);

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useWeatherState() {
  const state = useContext(StateContext);
  if(!state) {
    throw new Error('cannot find context provider');
  }
  return state;
}

export function useWeatherDispatch() {
  const dispatch = useContext(DispatchContext);
  if(!dispatch) {
    throw new Error('cannot find context provider');
  }
  return dispatch;
}

export async function getCurrent(dispatch, lat, lon) {
  dispatch({ type: 'GET_CURRENT' });
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3a78a9a70b98f5070d1a00754090e742`
    );
    dispatch({ type: 'GET_CURRENT_SUCCESS', data: response.data });
  } catch(e) {
    dispatch({ tpye: 'GET_CURRENT_ERROR', error: e});
  }
}

export async function getSearch(dispatch, keyword) {
  dispatch({ type: 'GET_SEARCH' });
  try {
    const response = await axios.get(
      `/req/data?service=data&request=GetFeature&data=LT_C_ADSIGG_INFO&key=348512EB-482A-38CE-9F8C-747076EBE06E&domain=http://localhost:3000/&attrFilter=sig_kor_nm:like:${keyword}&geometry=true`

    );
    dispatch({ type: 'GET_SEARCH_SUCCESS', data: response.data });
  } catch(e) {
    dispatch({ tpye: 'GET_SEARCH_ERROR', error: e});
  }
}

export function IsDay() {
  const state = useWeatherState();
  if(state.info.weatherCode.slice(2) === 'd') {
    return true;
  } else {
    return false;
  }
}
