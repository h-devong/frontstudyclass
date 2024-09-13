import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  //logic
  function onChangeEmail(event) {
    console.log(event); // 나의 행동
    console.log(event.target); // 작동된 태그
    console.log(event.target.value); //작동된 태그의 입력된 값
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup() {
    console.log(email);
    console.log(password);
    // 1. 검증하기
    if (email.includes("@") === false) {
      // alert("이메일이 올바르지 않습니다");
      // document.getElementById("myError").innerText = "이메일이 올바르지 않습니다"; => 옛날 방식
      setEmailError("메일이 올바르지 않습니다");
    } else {
      // 2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수 즉, api)

      // 3. 성공알람 보여주기
      alert("회원가입을 축하합니다");
    }
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      {/* <div id="myError">{error}</div> => 옛날 방식*/}
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <div id="myError"></div>
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
}
