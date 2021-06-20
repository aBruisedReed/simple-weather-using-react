import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import styled from 'styled-components';
import { IsDay, useWeatherDispatch, useWeatherState, getSearch } from './Context';

const HeadBlock = styled.div`
  display: flex;
  justify-content: space-between;

  .location {
    font-size: 24px;
    font-weight: bold;
    color: ${props => IsDay()?props.theme.palette.main:props.theme.palette.mainNight}
  }

  .searchIcon {
    color: ${props => props.theme.palette.search};
  }
`;

const Input = styled.input`
  font-size: 24px;
  font-weight: bold;
  color: ${props => IsDay()?props.theme.palette.main:props.theme.palette.mainNight};
  background: none;
  outline: none;
  border: none;
`;

function Head() {
  const dispatch = useWeatherDispatch();
  const state = useWeatherState();
  const [input, setInput] = useState('');
  const onChange = (e) => {
    setInput(e.target.value);
    getSearch(dispatch, e.target.value);
  }
  const onSearch = () => {
    dispatch({ type: 'SEARCH_TOGGLE' });
  }
  return (
    <HeadBlock>
      {!state.info.searchToggle ?
        <div className="location">{state.info.location}</div> :
        <Input value={input} onChange={onChange} autoFocus placeholder="지역을 입력하세요."></Input>
      }
      <div onClick={onSearch} style={{ cursor: 'pointer '}} className="searchIcon">        
        <ImSearch size={28}/>
      </div>
    </HeadBlock>
  );
}

export default Head;
