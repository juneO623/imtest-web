import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  min-height: 100vh;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: gray;
`;

export const LeftCategory = styled.div`
  flex-direction: column;
  display: flex;
  width: 50%;
  height: 100vh;
  background-color: rgba(255, 0, 0, 0.7); // 빨강
  align-items: center;
  justify-content: center;
`;

export const RightCategory = styled.div`
  flex-direction: column;
  display: flex;
  width: 50%;
  height: 100vh;
  background-color: rgba(0, 0, 255, 0.7); // 파랑
  align-items: center;
  justify-content: center;
`;

export const QuestionText = styled.div`
  display: flex;
  text-align: center;
  color: white;
`;

export const Img = styled.div`
  width: auto;
  height: auto;
`;

export const NextBtn = styled.button`
  width: 100px;
  height: 50px;
  float: inline-end;
`;
