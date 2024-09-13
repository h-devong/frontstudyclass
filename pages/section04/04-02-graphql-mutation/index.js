import { useMutation, gql } from "@apollo/client";
const 나의그래프큐엘셋팅 = `
  mutation{
    createBoard(writer:"철수", title: "철수에영", contents: "hihello"){
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutation() {
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log(result);
  };
  return (
    <>
      <button onClick={onClickSubmit}>그래프큐엘 요청하기</button>
    </>
  );
}
