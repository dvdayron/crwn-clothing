import styled, {css} from 'styled-components';
import {AppCustomButton} from '../custom-button/custom-button.styles';

export const CollectionItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
`;

export const CollectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  ${AppCustomButton}{
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {

    ${CollectionItemImage}{
      opacity: 0.8;
    }

    ${AppCustomButton}{
      opacity: 0.85;
      display: flex;
    }
  }
`;