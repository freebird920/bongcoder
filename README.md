Hi. Bong-Coders.

It's time to practice Next.js

## 목차
1. [5월 9일 내용 및 숙제](#5월-9일)
2. [5월 23일 내용 및 숙제](#5월-23일)
1. [5월 30일 내용 및 숙제](#5월-30일)

## 개발환경 세팅

    개발에 앞서 개발 환경을 세팅합니다. IDE(통합개발환경)는 가장 이용자가 많은 VS code를 사용합니다. 또, next.js를 이용하여 풀스택 개발을 해볼 것이기 때문에 node.js를 설치합니다.

#### 순서

1. [VS code 설치](#vs-code-설치)
1. [node.js 설치](#nodejs-설치)

### VS code 설치

vscode를 설치한다. <br/> [다운로드링크](https://code.visualstudio.com/) ![VS Code Download Image](https://github.com/freebird920/bongcoder/blob/master/src/markdown/img/vscodedown.png?raw=true)

### node.js 설치

node.js를 설치한다. <br/> [다운로드링크](https://nodejs.org/en) ![Node.js Download Image](https://github.com/freebird920/bongcoder/blob/master/src/markdown/img/nodejsdownload.png?raw=true)

### next.js 설치

1. vscode에서
1. <kbd>ctrl</kbd> + <kbd>`</kbd> ![이미지 설명](https://github.com/freebird920/bongcoder/blob/master/src/markdown/img/vscodeterminal.png?raw=true)
1. 터미널에 npx create-next-app@latest 입력

```bash
npx create-next-app@latest
```

[오픈채팅방](https://open.kakao.com/o/gcyGpNmg)에 오류코드가 함께 나오게 스크린샷을 찍어주시면 도와드립니다.

# how to route?

1. ./src/app/ 아래에 적절한 이름의 폴더를 만든다.
2. ./src/app/[새로운폴더이름]
3. ./src/app/[새로운폴더이름]/page.tsx
4. page.js, page.jsx page.tsx 파일을 만든다.

# hello라는 페이지를 만들어보자.

1. ./src/app/hello/page.tsx 만들기.
2. nav bar를 만들어서 home과 hello 페이지를 오갈 수 있도록 한다.
3. hello 페이지에 const로 name, age, introduce 라는 변수에 적절한 문자열을 저장한다.
4. 저장한 문자열을 적절히 보여준다.

# tips.

## tailwind 때문에 globals.css에 뜨는 거슬리는 경우

./vscode/settings.json을 만들고 아래를 복붙 후 저장

```json
{
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

## css, tailwind에서 class 만드는 법

### global.css

```css
@layer components {
  .li-navbar {
    /*.[클래스명]으로 작명한다.*/
    @apply font-bold text-lg hover:bg-green-500; /*@apply를 이용하면 tailwind의 calssname을 그대로 사용 가능하다. */
    background-color: blue; /*일반 css 는 이렇게 쓰면 된다.*/
  }
}
```

### somecomponent.tsx

```tsx
return (
  <li className="li-navbar">
    <a href="/">Home</a>
  </li>
);
```

## 5월 9일

### next.js에서 페이지/컴포넌트 만드는 방법

next.js는 react를 기반으로 하는 프레임워크이다. 따라서 react에서 사용하는 방법과 비슷하다.

- export default function **컴포넌트명**( ){ } 으로 컴포넌트를 만든다.
- {} 안의 return() 안에 html을 작성한다.
- 나머지 코드는 return 앞에 작성한다.

```typescript
// @/src/pages/hello.tsx
export default function HelloPage() {
  // 함수 등 코드는 여기에 작성
  return (
    <>
      {" "}
      // 여기에 html 작성
      <h1>Hello</h1>
    </>
  );
}
```

### 함수

javascript에서 함수 정의하는 방법

```javascript
// function 키워드를 이용한 함수 정의
function 함수명(인자1, 인자2, ...){
    //함수 내용
    return (반환값)
}

// 화살표 함수를 이용한 함수 정의
const 함수명 = (인자1, 인자2, ...) => {
    //함수 내용
    return (반환값)
}
```

예시

```javascript
function 사람(음식) {
  return `${음식}먹은 사람의 똥`;
}

console.log(사람("치킨"));
// 콘솔에 "치킨 먹은 사람의  똥"이 출력된다.

function add(a, b) {
  return a + b;
}

const add = (a, b) => {
  return a + b;
};

add(1, 2); // 3이 남는다.

// console.log()도 함수다.
console.log("안녕하세요"); // 콘솔에 "안녕하세요"가 출력된다.
```

### form 태그

form 태그는 사용자로부터 입력을 받고 이것을 어디론가 전송하는 태그이다.

```tsx
export default function FormPage() {
  return (
    <form>
      <input type="text" placeholder="이름" />
      <input type="number" placeholder="나이" />
      <button type="submit">제출</button>
    </form>
  );
}
```

### form 태그에서 버튼 클릭했을 때 동작 설정 방법

```tsx
export default function FormPage() {
  function 나는버튼눌렸을때실행되는함수입니다(텍스트: string) {
    console.log(텍스트);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // 원래 form태그에서 submit동작은 새로고침을 유발하기 때문에 이것을 써서 form 태그의 기본 동작을 막는다.
        const formData = new FormData(event.target);
        const 이름 = formData.get("name") as string;
        나는버튼눌렸을때실행되는함수입니다(이름);
      }}
    >
      <input type="text" placeholder="이름" name="name" />
      <button type="submit">제출</button>
    </form>
  );
}
```

### useState

useState는 react에서 상태를 관리하는 함수이다. state는 컴포넌트 내에서 변하는 값을 저장하는 변수이다. 메모리에 state를 저장해두고 state가 변경되면 컴포넌트를 다시 렌더링 한다.

```typescript
//  useState 선언하는 방법
const [state, setState] = useState(초기값);

// state 사용하는 방법
const state = "변경된 값";
setState(state);
```

### form 태그와 함께 사용하기

1. 먼저 "use client"를 가장 상단에 작성한다. useState 훅은 클라이언트 사이드에서만 사용 가능하므로 반드시 "use client"를 작성해야 한다. (next.js는 use client를 명시하지 않으면 서버 컴포넌트로 만들어지기 때문)
1. useState를 import 한다. `import { useState } from "react";` "use client"를 써서 import 한다.

```tsx
"use client";
import { useState } from "react";

export default function TestPage() {
  const [myname, setMyname] = useState("비밀입니다.");
  return (
    <>
      <p>나는 누구? {myname} </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const 이름 = formData.get("name") as string;
          setMyname(이름);
        }}
      >
        <input type="text" placeholder="이름" name="name" />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
```


## 5월 23일

### useState 복습
useState는 react에서 상태를 관리하는 함수이다. state는 컴포넌트 내에서 변하는 값을 저장하는 변수이다. 메모리에 state를 저장해두고 state가 변경되면 컴포넌트를 다시 **렌더링** 한다. 실시간으로 상태를 업데이트 하고 이 상태를 다시 클라이언트의 브라우저에 보여주기 위해 사용한다. 
```tsx
'use client' // next.js 프로젝트에서 useState를 사용하려면 반드시 'use client'를 작성해야 한다. 
export default function testPage(){
  const [testState, setTestState] = useState("초기값") // useState를 사용해서 testState라는 상태를 만들고 초기값을 "초기값"으로 설정한다.
  return(
    <>
      <p>{testState}</p> // testState를 보여준다.
      <button onClick={()=>{setTestState("변경된 값")}}>버튼</button> // 버튼을 누르면 testState의 값을 "변경된 값"으로 변경한다.
    </>
  )
}
```


### CUSTOM COMPONENTS 
React에서는 컴포넌트를 만들어서 재사용성을 높일 수 있다. 
React 컴포넌트는 함수로 만들어지는데, 함수를 불러와서 실행하고 함수가 실행되면 함수가 있던 자리에 렌더링 할 html요소를 남긴다.
```tsx
function testFunction(){
  return("리턴값") // 이 부분이 남는것
}
testFunction() // "리턴값이 남는다."


// 마찬가지로 컴포넌트도 함수로 만들어진다.
function TestComponent(){
  return(<div>나는 컴포넌트입니다.</div>) // <div>나는 컴포넌트입니다.</div> 이 부분이 남는다.
}



```
### 컴포넌트 만드는 방법
컴포넌트는 함수로 만들어진다. 함수명은 **대문자**로 시작해야 한다. 
```tsx
// @/src/components/MyComponent
export default function MyComponent() {
  return (
    <div>
      <h1>나는 컴포넌트입니다.</h1>
    </div>
  );
}
```

### 컴포넌트 사용하는 방법
컴포넌트를 사용할 때는 import를 이용해서 불러온다. 

```tsx
import MyComponent from "@/src/components/MyComponent";
export default function TestPage() {
  return (
    <>
      <MyComponent />
    </>
  );
}
```


## 5월 30일 

### css
css는 cascaded style sheet의 약자로 html요소에 스타일을 입히는 언어이다. 

### tailwind css
tailwind css는 css 프레임워크로, 클래스를 이용해서 스타일을 입히는 방식이다. css의 사용방법이 복잡하고 불편하기 때문에 tailwind css를 사용하면 편리하다. 

tailwind에서는 html 태그 안에 class를 이용해서 스타일을 입힌다. react에서는 className을 사용한다. `className="클래스명"`으로 사용하고 각 클래스명은 띄어쓰기로 구분한다. 
```tsx
<div>
  <h1 className="text-2xl font-bold">나는 h1태그입니다.</h1>
</div>
```

React에서 tailwind를 사용하는 방법은 다음과 같다. 
```tsx
export default function TailwindTestPage(){
  return(
    <>
      <h1 className="font-bold text-xl text-center">나는 h1태그입니다.</h1>
      <p className="font-sans font-normal ">나는 본문 문장입니다.</p>
      <button className="border-2 rounded-md p-1">나는 버튼입니다.</button>
    </>
  )
}
```

### layout.tsx
layout.tsx는 페이지의 레이아웃을 정하는 파일이다. 페이지의 레이아웃을 정하는 파일이기 때문에 페이지마다 공통적으로 들어가는 요소들을 여기에 넣어두면 편리하다. 
파일명은 반드시 layout.tsx로 해야 한다. 
```tsx
// ... 
export default function Layout({ children }) {
  return (
    <html>
      <nav> </nav>
      <main>{children}</main>
    </html>
  );
}
``` 


### <a> 태그
a 태그는 링크를 걸어주는 태그이다. href 속성에 링크 주소를 넣어주면 된다. 
```tsx
<a href="링크주소">링크이름</a>
```


### if 구문
if 구문은 조건문이다. 조건에 따라 다른 동작을 하게 할 수 있다. 
```tsx
if(조건){
  // 조건이 참일 때 실행되는 코드
}else{
  // 조건이 거짓일 때 실행되는 코드
}
```
