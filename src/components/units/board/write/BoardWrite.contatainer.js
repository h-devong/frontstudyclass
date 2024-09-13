import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.contatainer";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";
export default function BoardWrite() {
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
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };
  return (
    <>
      <div>$$$$$$$$$$$$$$여기는 컨테이너#####333</div>
      <BoardWriteUI
        aaa={onClickSubmit}
        bbb={onChangeWriter}
        ccc={onChangeTitle}
        ddd={onChangeContents}
      />
      <div>$$$$$$$$$$$$$$여기는 컨테이너#####333</div>
    </>
  );
}
