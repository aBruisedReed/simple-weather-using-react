import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { IsDay } from './Context';

const FootBlock = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: ${props => IsDay()?props.theme.palette.main:props.theme.palette.mainNight}
`;

function Foot() {
  let timer = null;
  const [time, setTime] = useState(moment());
  useEffect(() => {
    // eslint-disable-next-line
    timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [])
  return (
    <FootBlock>
      <div className="date">{ time.format('YYYY-MM-DD') }</div>
        <div className="time">{ time.format('HH:mm:ss') }</div>
    </FootBlock>
  );
}

export default Foot;
