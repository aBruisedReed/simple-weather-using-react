import React from 'react';
import styled from 'styled-components';
import SearchItem from './SearchItem';
import { lighten } from 'polished';
import { IsDay, useWeatherState } from './Context';

const SeachListBlock = styled.div`
  flex: 1;
  overflow-y: auto;
  height: 100%;

  &::-webkit-scrollbar {
    background-color: ${props => IsDay()?props.theme.palette.box:props.theme.palette.boxNight}
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => lighten(0.15,IsDay()?props.theme.palette.box:props.theme.palette.boxNight)};
    border-radius: 10px;
  }
`;


function SeachList() {
  const state = useWeatherState();
  if(state.info.searchList.length === 0) {return null};
  return (
    <SeachListBlock>
      {state.info.searchList.map(item => ( 
        <SearchItem
          full={item.locationFull}
          location={item.location}
          lat={item.lat}
          lon={item.lon}
        />
      ))}
      <SearchItem></SearchItem>
    </SeachListBlock>
  );
}

export default SeachList;
