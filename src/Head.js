import React from 'react';
import { ImSearch } from 'react-icons/im';
import styled from 'styled-components';

const HeadBlock = styled.div`
  display: flex;
  justify-content: space-between;

  .location {
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.theme.palette.main}
  }

  .searchIcon {
    color: ${props => props.theme.palette.search};
  }
`;

function Head({ search }) {
  return (
    <HeadBlock>
      <div className="location">미추홀구</div>
        <div onClick={search} style={{ cursor: 'pointer '}} className="searchIcon">        
          <ImSearch size={28}/>
        </div>
    </HeadBlock>
  );
}

export default Head;
