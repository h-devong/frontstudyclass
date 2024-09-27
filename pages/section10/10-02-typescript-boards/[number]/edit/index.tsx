import { useRouter } from "next/router";
import BoardWrite from "../../../../../src/components/units/board/10-write/BoardWrite.contatainer";
import { gql, useQuery } from "@apollo/client";
const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      contents
      title
    }
  }
`;

export default function GraphqlMutation() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });
  return (
    <>
      <div>##########여기는 페이지#########3</div>
      <BoardWrite isEdit={true} data={data} />
      <div>##########여기는 페이지#########3</div>
    </>
  );
}
