import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(40)};
  margin: ${px2vw(20)};
  background-color: #ebebeb;
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
    padding: ${px2vw(30)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
    padding: ${px2vw(20)};
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
