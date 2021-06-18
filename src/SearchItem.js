import React from 'react';
import styled from 'styled-components';

const SearchItemBlock = styled.div`
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  margin-top: 10px;
`;

function SearchItem() {
return ( 
  <SearchItemBlock>대한민국 인천광역시 미추홀구 숭의동</SearchItemBlock>
  );
}

export default SearchItem;
