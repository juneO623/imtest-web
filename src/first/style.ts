import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  /* background-image: url("https://pds.joins.com/news/component/htmlphoto_mmdata/201412/17/htm_2014121717127a010a011.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100vh; */
`;

export const MidBox = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: rgba(0, 200, 0, 0.5); */
  width: 100%;
  height: 600px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const BoxTop = styled.div`
  text-align: left;
  width: 70%;
  height: auto;
`;

export const BoxMid = styled.div`
  width: 25%;
  height: auto;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100px;
`;

export const StartBtn = styled.button`
  width: 80px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    /* transform: translate(0%, -10%); */
    transform: scale(1.2);
    transition: 0.3s all ease-in-out;
  }
`;
