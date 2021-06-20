import React from 'react';
import styled from 'styled-components';
import { IsDay, useWeatherState, useWeatherDispatch } from './Context';

const SearchItemBlock = styled.div`
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  margin-top: 10px;
  color: ${props => IsDay()?props.theme.palette.main:props.theme.palette.mainNight};
  cursor: pointer;
`;

function SearchItem({ full, location, lat, lon }) {
const dispatch = useWeatherDispatch();
const onClick = () => {
  dispatch({ type: 'SELECT_PLACE', location: location, lat: lat, lon: lon })
}
return ( 
  <SearchItemBlock onClick={onClick}>{full}</SearchItemBlock>
  );
}

export default SearchItem;
