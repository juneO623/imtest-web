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
  const [answer, setAnswer] = useState(-1);

  useEffect(() => {
    if (correctAnswer === answer) {
      setBingo((prev) => prev + 1);
    }
    setAnswer(-1);
  }, [answer]);

  const validQuestionData = DATA[Number(id) - 1];
  return (
    <Container>
      <Navbar title={validQuestionData.question} />
      {id && (
        <Category>
          <LeftCategory
            onClick={() => {
              setAnswer(0);
              navigate(
                Number(id) + 1 === 12 ? "/end" : `/questions/${Number(id) + 1}`
              );
            }}
          >
            <ImgWrapper src={validQuestionData.images[0]} alt="왼쪽 사진" />
          </LeftCategory>
          <RightCategory
            onClick={() => {
              setAnswer(1);
              navigate(
                Number(id) + 1 === 12 ? "/end" : `/questions/${Number(id) + 1}`
              );
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
