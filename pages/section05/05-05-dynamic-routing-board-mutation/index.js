import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    try {
      //try 하다가 실패하면 다음에 잇는 모든 줄들을 모두 무시하고, catch에 내용 실행
      const result = await 나의함수({
        variables: {
          // $ = variables
          writer: "훈이",
          title: "hi",
          contents: "hello",
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number);
      router.push(
        `05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <button onClick={onClickSubmit}>그래프큐엘 요청하기</button>
    </>
  );
}
