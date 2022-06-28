import { useNavigate } from "react-router-dom";
import { BoxMid, BoxTop, Container, MidBox, StartBtn } from "./style";
import king from "../king.png";

const First = () => {
  const navigater = useNavigate();
  return (
    <Container>
      <MidBox>
        <BoxTop>
          <h1>이민고사</h1>
          <h4 style={{ fontSize: "20px" }}>
            김충선 장군님은 조선으로 귀화했습니다.
            <br />
            김충선 장군님이 조선러버 임을 증명하기 위해서 실시되는
            <br />
            이민고사 지금부터 시작합니다 !!
          </h4>
        </BoxTop>
        <BoxMid>
          <img src={king} alt="왕 사진입니다"></img>
        </BoxMid>
        <StartBtn
          onClick={() => {
            navigater("/questions/1");
          }}
        >
          시작하기
        </StartBtn>
      </MidBox>
    </Container>
  );
};

export default First;
