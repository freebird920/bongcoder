import Introduce from "@/components/hello/Introduce";

export default function HelloPage() {
  const name: string = "봉붕이";
  const age: number = 345;
  const introduce: string[] = [
    "안녕, 나는 봉붕이야.",
    "나는 345살이야.",
    "나는 봉우리 코더야.",
  ];
  return (
    <>
      <h1 className="text-center font-black text-xl">봉우리코더자기소개</h1>

      <article className="border-2 p-2 rounded-md ">
      <h2>저는 이런 사람 입니다.</h2>
        <p>
          <span className="font-bold">이름:</span>
          {name}
        </p>
        <p>나이: {age}</p>
        <div className="border-2 p-2 rounded-md">
          <h3 className="text-center font-bold">자기소개</h3>
          {introduce.map((a: string, i: number) => {
            return <p key={i}>{a}</p>;
          })}
        </div>
          <Introduce/>

      </article>
    </>
  );
}
