export default function BoardComponent(props) {
  return (
    <div>
      <h1>{props.isEdit ? "수정페이지" : "등록페이지"}</h1>
      제목: <input type="text" /> <br />
      내용: <input type="text" /> <br />
      <button>등록하기</button>
    </div>
  );
}
