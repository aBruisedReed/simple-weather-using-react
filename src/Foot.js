import React from 'react';
import styled from 'styled-components';

const FootBlock = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: ${props => props.theme.palette.main};
`;

function Foot() {
  return (
    <FootBlock>
      <div className="date">2021-06-16</div>
      <div className="time">01:58 AM</div>
    </FootBlock>
  );
}

export default Foot;
