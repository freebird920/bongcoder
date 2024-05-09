Hi. Bong-Coders.

It's time to practice Next.js


## 목차
1. [5월 9일 내용 및 숙제](#5월-9일)

## 개발환경 세팅


    개발에 앞서 개발 환경을 세팅합니다. IDE(통합개발환경)는 가장 이용자가 많은 VS code를 사용합니다. 또, next.js를 이용하여 풀스택 개발을 해볼 것이기 때문에 node.js를 설치합니다.   

#### 순서
1. [VS code 설치](#vs-code-설치) 
1. [node.js 설치](#nodejs-설치)

### VS code 설치
vscode를 설치한다. <br/>
[다운로드링크](https://code.visualstudio.com/)
![VS Code Download Image](https://github.com/freebird920/bongcoder/blob/master/src/markdown/img/vscodedown.png?raw=true)


### node.js 설치
node.js를 설치한다. <br/>
[다운로드링크](https://nodejs.org/en)
![Node.js Download Image](https://github.com/freebird920/bongcoder/blob/master/src/markdown/img/nodejsdownload.png?raw=true)

### next.js 설치
1. vscode에서
1. <kbd>ctrl</kbd> + <kbd>`</kbd>
![이미지 설명](https://github.com/freebird920/bongcoder/blob/master/src/markdown/img/vscodeterminal.png?raw=true)
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

function 사람(음식){
  return `${음식} 똥`
}

console.log(사람("치킨")) 
// 콘솔에 "치킨 똥"이 출력된다.

function add(a, b){
    return a + b;
}

const add = (a, b) => {
    return a + b;
}
```

### form 태그
form 태그는 사용자로부터 입력을 받고 이것을 어디론가 전송하는 태그이다.
```typescript

export default function FormPage(){
    return (
        <form>
            <input type="text" placeholder="이름"/>
            <input type="number" placeholder="나이"/>
            <button type="submit">제출</button>
        </form>
    )
}
```