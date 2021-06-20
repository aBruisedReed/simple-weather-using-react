import React, { useEffect, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import SearchList from './SearchList';
import { getCurrent, useWeatherState, useWeatherDispatch, IsDay } from './Context';
import CurrentWeatherIcon from './CurrentWeatherIcon';

const MainBlock = styled.div`
  width: 100%;
  height: 245px;

  .weatherBox {
    height: 80px;
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%; left: 50%;
    margin: -40px 0 0 -30px;
  }

  .weatherIcon {
    height: 60px;
    width: 60px;
    overflow: hidden;
  }

  .degree {
    font-size: 20px;
    font-weight: 900;
    color: ${props => IsDay()?props.theme.palette.main:props.theme.palette.mainNight}
  }
`;

function Main() {
  const state = useWeatherState();
  const dispatch = useWeatherDispatch();
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    getCurrent(dispatch, state.info.lat, state.info.lon);
  }, [state.info.lat, state.info.lon, dispatch])
  const { searchToggle } = state.info;
  return (
    <MainBlock>
      { !searchToggle ? (
        <div className="weatherBox">
          <div className="weatherIcon">
            <CurrentWeatherIcon
              size={55}
              color={IsDay()?themeContext.palette.main:themeContext.palette.mainNight}
              code={state.info.weatherCode}>
            </CurrentWeatherIcon>
          </div>
          <div className="degree">{state.info.degree}°</div>
        </div>
      ) : (
        <SearchList></SearchList>
      ) }
    </MainBlock>
  );
}

export default Main;

