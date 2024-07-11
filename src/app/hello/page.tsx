import Introduce from "@/components/hello/Introduce";

export default function HelloPage() {

  // 변수라는 걸 알아보자.
  // 변수 =  메모리에 어떤 값을 나중에 쓰려고 저장하는거야. 
  // 방법은
  // const   -> 상수 == 안바뀜
  // let -> 바뀜 ㄱㅊ
  // var -> 이거는 안쓰는게 좋아.

let 이연희 = 1;
// 데이터 타입
// typescript / javascript 라는거에는 
// 데이터가 
// string
// number 
// boolean
// object
// array
// null
  


  const name: string = "연희쨩";
  const age: number = 345;
  const introduce: string[] = [
    "안녕, 나는 봉붕이야.",
    "나는 345살이야.",//선생님 쓸래쉬 2개 넣으면 주석맞죠?
    "나는 봉우리 코더야.",
  ];
  // js -> 동작, 기능
  // css 
  // html -> 구조/ 내용
  return (
    <>
    <p>

      {name}
    </p>
    </>
  );
}
