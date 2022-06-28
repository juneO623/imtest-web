import { useRecoilState } from "recoil";
import { bingoAtom } from "../store/bingoStore";
import 아오 from "../아오.png";
import 애잔 from "../애잔.png";
import 쌍따봉 from "../쌍따봉.png";
import 최고 from "../최고.png";
import styled from "styled-components";

const End = () => {
  const [bingo, setBingo] = useRecoilState(bingoAtom);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "40px",
      }}
    >
      {bingo < 4 ? (
        <div>
          <ImgWrap src={아오} alt="심각하다" />
          <div>당신은 한국인이 아니군요</div>
        </div>
      ) : bingo < 7 ? (
        <div>
          <ImgWrap src={애잔} alt="한국에 대해 공부가 필요합니다" />
          <div>명예 한국인이군요</div>
        </div>
      ) : bingo < 12 ? (
        <div>
          <ImgWrap src={쌍따봉} alt="굿좝" />
          <div>아주 나이스한 애국자군요</div>
        </div>
      ) : (
        <div>
          <ImgWrap src={최고} alt="만점입니다" />
          <div>당신은 원시인 분장을해도 한국인입니다</div>
        </div>
      )}
      <div>당신의 점수 : {bingo}점</div>
    </div>
  );
};

export const ImgWrap = styled.img`
  width: 100%;
  object-fit: "scale-down";
`;

export default End;
