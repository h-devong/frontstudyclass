// 컴포넌트 위에 만든 이유 : 컴포넌트가 리랜더링 되어도 다시 안만들어짐 - 효율적

const FRUITS = [
  { number: 1, title: "딸기" },
  { number: 2, title: "오렌지" },
  { number: 3, title: "한라봉" },
  { number: 4, title: "귤" },
  { number: 5, title: "사과" },
  { number: 6, title: "배" },
  { number: 7, title: "수박" },
  { number: 8, title: "체리" },
  { number: 9, title: "포도" },
  { number: 10, title: "블루베리" },
];
export default function MapFruitsPage() {
  return (
    <>
      <div>
        {FRUITS.map((el) => (
          <div>
            {el.number} {el.title}
          </div>
        ))}
      </div>
    </>
  );
}
