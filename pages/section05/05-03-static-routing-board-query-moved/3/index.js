import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 55) {
      number
      writer
      contents
      title
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD);
  console.log(data);
  return (
    <>
      <div>44w페이지 이동 웬료쓰</div>
      <div>작성자: {data && data.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data ? data.fetchBoard?.contents : "loading..."}</div>
    </>
  );
}
