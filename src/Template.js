import React from 'react';
import styled from 'styled-components';
import { IsDay, useWeatherState } from './Context';

const TemplateBlock = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -180px 0 0 -180px;
  background: ${props => 
  IsDay()?props.theme.palette.box:props.theme.palette.boxNight};
  box-shadow: 2px 2px 8px 0 gray;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

function Template({ children }) {
  const state = useWeatherState();
  console.log('loading',state.current.loading);
  // if(state.current.loading) {
  //   console.log('call inside loader');
  //   return (
  //     <TemplateBlock>
  //       <Loader type="TailSpin" color="white" height={100} width={100} timeout={3000} />
  //     </TemplateBlock>
  //   )}
  return (
    <TemplateBlock>
      {children}
    </TemplateBlock>
  );
}

export default React.memo(Template);
