import axios from "axios";
import 나만의페이지 from "../../section01/01-01-example";

export default function RestGetPage() {
  function onClcikAsync() {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result); //promiss
  }
  // async function onClcikSync() {
  //   const result = await axios.get("https://koreanjson.com/posts/1");
  //   console.log(result); // 제대로된 결과
  //   console.log(result.data.title);
  // }

  const onClcikSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result); // 제대로된 결과
    console.log(result.data.title);
  };

  return (
    <div>
      <button onClick={onClcikAsync}>rest-api(비동기)요청기하기</button>
      <button onClick={onClcikSync}>rest-api(동기)요청기하기</button>
      <나만의페이지 />
    </div>
  );
}
