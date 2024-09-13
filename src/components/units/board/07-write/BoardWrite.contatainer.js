import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);
  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // $ = variables
        writer,
        title,
        contents,
      },
    });
    console.log(result);
  };
  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    if (e.target.value && title && contents) setIsActive(true);
    else setIsActive(false);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (writer && e.target.value && contents) setIsActive(true);
    else setIsActive(false);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
    if (writer && title && e.target.value) setIsActive(true);
    else setIsActive(false);
  };
  return (
    <>
      <div>$$$$$$$$$$$$$$여기는 컨테이너#####333</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isActive={isActive}
      />
      <div>$$$$$$$$$$$$$$여기는 컨테이너#####333</div>
    </>
  );
}
