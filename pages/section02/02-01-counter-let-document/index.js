export default function CounterLetDocument() {
  function onClickCountUp() {
    const result = Number(document.getElementById("qqq").innerText) + 1;
    document.getElementById("qqq").innerText = result;
  }
  function onClickCountDown() {
    const result = Number(document.getElementById("qqq").innerText) - 1;
    document.getElementById("qqq").innerText = result;
  }
  return (
    <>
      <div id="qqq">0</div>
      <button onClick={onClickCountUp}>더하기</button>
      <button onClick={onClickCountDown}>내리기</button>
    </>
  );
}
