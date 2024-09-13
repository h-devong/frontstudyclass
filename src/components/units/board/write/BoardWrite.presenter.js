import * as S from "./BoardWrite.styles";
export default function BoardWrite(props) {
  return (
    <>
      <div>@@@@@@@@@여기는 프레젠터@@@@@@@@@@</div>
      작성자: <S.Input type="text" onChange={props.aaa} />
      제목: <S.Input type="text" onChange={props.bbb} />
      내용: <S.Input type="text" onChange={props.ccc} />
      <S.Button onClick={props.ddd}>그래프큐엘 요청하기</S.Button>
      <div>@@@@@@@@@여기는 프레젠터@@@@@@@@@@</div>
    </>
  );
}
