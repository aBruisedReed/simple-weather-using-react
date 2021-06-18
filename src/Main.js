import React from 'react';
import { FaCloudMoon } from 'react-icons/fa';
import styled from 'styled-components';
import SearchList from './SearchList';

const MainBlock = styled.div`
  width: 100%;
  height: 245px;

  .wetherBox {
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

  .wetherIcon {
    color: ${props=>props.theme.palette.main};
  }

  .degree {
    font-size: 20px;
    font-weight: 900;
    color: ${props=>props.theme.palette.main};
  }
`;

function Main({ toggle }) {
  return (
    <MainBlock>
      { !toggle ? (
        <div className="wetherBox">
          <div className="wetherIcon">
            <FaCloudMoon size={50}/>
          </div>
          <div className="degree">22°</div>
        </div>
      ) : (
        <SearchList></SearchList>
      ) }
    </MainBlock>
  );
}

export default Main;

