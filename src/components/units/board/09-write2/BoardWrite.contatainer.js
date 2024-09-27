import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const router = useRouter();

  const onClickSubmit = async () => {
    try {
      const result = await 나의함수({
        variables: {
          writer,
          title,
          contents,
        },
      });
      console.log(writer, title, contents);
      console.log(result);
      router.push(`/section09/09-04-boards/${result.data.createBoard.number}`);
    } catch (error) {
      console.error("Error while submitting:", error);
    }
  };
  const onClickUpdate = async () => {
    const myVariables = { number: Number(router.query.number) };

    if (writer) myVariables.writer = writer;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;
    //수정하기
    try {
      const result = await updateBoard({
        variables: myVariables,
      });
      console.log(result);
      router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
    } catch (error) {
      console.error("Error while submitting:", error);
    }
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    console.log(writer);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  return (
    <>
      <div>$$$$$$$$$$$$$$여기는 컨테이너#####333</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
        data={props.data} // udenfined or data
      />
      <div>$$$$$$$$$$$$$$여기는 컨테이너#####333</div>
    </>
  );
}
