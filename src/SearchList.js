import React from 'react';
import styled from 'styled-components';
import SearchItem from './SearchItem';
import { lighten } from 'polished';

const SeachListBlock = styled.div`
  flex: 1;
  overflow-y: auto;
  height: 100%;

  &::-webkit-scrollbar {
    background-color: ${props => props.theme.palette.box};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => lighten(0.15, props.theme.palette.box)};
    border-radius: 10px;
  }

`;


function SeachList() {
  return (
    <SeachListBlock>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
      <SearchItem></SearchItem>
    </SeachListBlock>
  );
}

export default SeachList;
