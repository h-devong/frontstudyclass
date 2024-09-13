import * as S from "./BoardWrite.styles";
export default function BoardWriteUI(props) {
  return (
    <>
      <div>@@@@@@@@@여기는 프레젠터@@@@@@@@@@</div>
      작성자: <S.Input type="text" onChange={props.onChangeWriter} />
      제목: <S.Input type="text" onChange={props.onChangeTitle} />
      내용: <S.Input type="text" onChange={props.onChangeContents} />
      <S.Button onClick={props.onClickSubmit} isActive={props.isActive}>
        그래프큐엘 요청하기
      </S.Button>
      <div>@@@@@@@@@여기는 프레젠터@@@@@@@@@@</div>
    </>
  );
}
