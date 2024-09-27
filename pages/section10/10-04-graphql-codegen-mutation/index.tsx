import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";
import { useState } from "react";
const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutation() {
  // const [counter, setCounter] = useState<number>(1)
  // const [나의함수] = useMutation<결과타입, 변수타입>(나의그래프큐엘셋팅);
  const [나의함수] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(나의그래프큐엘셋팅);
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // $ = variables
        writer: "훈이",
        title: "hi",
        contents: "hello",
      },
    });
    console.log(result);
  };
  return (
    <>
      <input />
      <button onClick={onClickSubmit}>그래프큐엘 요청하기</button>
    </>
  );
}
