export default function HomePage() {

  function 여늬함수(글자:string){
    let 답장 =  글자 + "님 안녕하세요";
    return 답장;
  }

  return (
    <>
      <h1>{여늬함수("연희쨩")}</h1>
    </>
  );
}
