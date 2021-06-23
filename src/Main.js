import React, { useEffect, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import SearchList from './SearchList';
import { getCurrent, useWeatherState, useWeatherDispatch, IsDay } from './Context';
import CurrentWeatherIcon from './CurrentWeatherIcon';
import Loader from 'react-loader-spinner';

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

  .loaderBox {
    height: 100px;
    width: 100px;
    position: absolute;
    top: 50%; left: 50%;
    margin: -50px 0 0 -50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Main() {
  const state = useWeatherState();
  const dispatch = useWeatherDispatch();
  const themeContext = useContext(ThemeContext);
  console.log('main call');
  useEffect(() => {
    console.log('useEffect call');
    if(!state.current.loading) {
      console.log('inside if');
      getCurrent(dispatch, state.info.lat, state.info.lon);
    }
    //eslint-disable-next-line
  }, [state.info.location]);
  const { searchToggle } = state.info;
  const mainColor = IsDay()?themeContext.palette.main:themeContext.palette.mainNight;
  
  if(state.current.loading) {
    return (
      <MainBlock>
        <div className="loaderBox">
          <Loader type="Puff" color={mainColor} height={100} width={100} timeout={3000} />
        </div>
      </MainBlock>
    )}
  if(searchToggle) {
    return (
      <MainBlock>
        <SearchList></SearchList>
      </MainBlock>
    );
  } else {
    return (
        <MainBlock>
          <div className="weatherBox">
            <div className="weatherIcon">
              <CurrentWeatherIcon
                size={55}
                color={mainColor}
                code={state.info.weatherCode}>
              </CurrentWeatherIcon>
            </div>
            <div className="degree">{state.info.degree}°</div>
          </div>
        </MainBlock>
    );
  }
}

export default React.memo(Main);

