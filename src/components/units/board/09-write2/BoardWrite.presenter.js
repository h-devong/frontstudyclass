import * as S from "./BoardWrite.styles";
export default function BoardWriteUI(props) {
  return (
    <>
      <div>@@@@@@@@@여기는 프레젠터@@@@@@@@@@</div>
      작성자:
      <S.Input
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      제목:
      <S.Input
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      내용:
      <S.Input
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <S.Button
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}
      </S.Button>
      <div>@@@@@@@@@여기는 프레젠터@@@@@@@@@@</div>
    </>
  );
}
