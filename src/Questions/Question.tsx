import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { DATA } from "../data";
import Navbar from "../Navbar/navbar";
import { bingoAtom } from "../store/bingoStore";
import { Category, Container, LeftCategory, RightCategory } from "./style";

const Question = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bingo, setBingo] = useRecoilState(bingoAtom);
  const correctAnswer = DATA[Number(id) - 1].answer;
  // const a = DATA.filter(Number(id) === , Number(id))
  const [answer, setAnswer] = useState(-1);

  // 지금 프로그램 에러 이유..
  // 온클릭에서 네이게이트를 줘서
  // answer값이 바뀌고 그 값과 정답을 비교해서
  // 정답이면 1점 더해주는 연산을 하기 전에
  // 다음 페이지로 넘겨버려서 정답이 꼬임

  // useEffect에 네이게이트를 넣으면
  // -1로 초기화 해줄 때도 네비게이트가 되어서
  // 한 번에 2페이지씩 넘어감

  // -1로 초기화 하지 않으면
  // 그 전 문제의 답을 1로 체크했으면
  // 다음문제에선 1로 체크하면 같은 값이여서
  // 변했다고 인정안하고 다음 페이지로 넘어가지 않음

  useEffect(() => {
    if (correctAnswer === answer) {
      setBingo((prev) => prev + 1);
    }
    setCnt((prev) => prev + 1);
    setAnswer(-1);
  }, [answer]);

  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    if (cnt % 2 == 1) {
      navigate(Number(id) === 12 ? "/end" : `/questions/${Number(id) + 1}`);
    }
  }, [cnt]);

  const validQuestionData = DATA[Number(id) - 1];
  return (
    <Container>
      <Navbar title={validQuestionData.question} />
      {id && (
        <Category>
          <LeftCategory
            onClick={() => {
              setAnswer(0);
            }}
          >
            <ImgWrapper src={validQuestionData.images[0]} alt="왼쪽 사진" />
          </LeftCategory>
          <RightCategory
            onClick={() => {
              setAnswer(1);
            }}
          >
            <ImgWrapper src={validQuestionData.images[1]} alt="오른쪽 사진" />
          </RightCategory>
        </Category>
      )}
    </Container>
  );
};

export const ImgWrapper = styled.img`
  width: 90%;
  object-fit: scale-down;
`;

export default Question;
