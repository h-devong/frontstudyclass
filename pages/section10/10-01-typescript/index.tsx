export default function Typescript() {
  //타입 추론
  let aaa = "fsjfsdfkowe"; // aaa:String
  aaa = 43912;

  //타입명시
  let bbb: string = "반갑습니다";
  bbb = 10;

  //타입명시가 필요한 상황 - 타입 여러개 줄수 있음
  let ccc: number | string = 1090;
  ccc = "1000원";

  //숫자타입
  let ddd: = 10
  ddd = "철수"

  //불린타입
  let eee:boolean = true
  eee = false
  eee = "false" // true로 작동함 ㄹㅈㄷ

  //배열 타입
  let fff: number[] = [1,2,3,4,5]
  let ggg:string[] = ["철수", "영희","훈이"]
  let hhh = ["철수", "영희","훈이", 10] // 타입을 추론해서 어떤타입을 사용하는지 알수 도 있음
  //let hhh: (string| number)[] = ["철수", "영희","훈이", 10]
  //객체 타입
  interface IProfile{
    name: string
    age: number | string
    school: string
    hobby?: string
  }

  const profile: IProfile = {
    name: "훈인",
    age: 8,
    school: "다람쥐초등학교",
  }
  profile.name = "철수 영"

  //함수 타입
  function add(num1: number, num2: number, unit: string): string{
    return num1 + num2 + unit
  }


  const result = add(1000, 2000,"원")

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit
  }


  const result2 = add2(1000, 2000,"원")

  //any타입
  let qqq:any = "철수"
  qqq = 1
  qqq= true
  return <></>;
}
